import { Component, Input, ViewChild, Directive, ViewContainerRef, AfterViewInit, OnDestroy,ComponentFactoryResolver } from '@angular/core';

import {VisualisationDynamicComponent} from './visualisation.dynamic.component';

import {VizService} from './visualisation.service';
import {VizComponentInterface} from './visualisation.component.interface';

@Directive({
  selector: '[viz-host]',
})
export class VizDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'visualisation',
  template: `
  <div  >
    <ng-template viz-host style="width:100%;height:250px"></ng-template>
  </div>`

})
export class GenericVisualisationComponent implements AfterViewInit, OnDestroy {

  @Input() id: string;
  @Input() visData: string;
  
  @ViewChild(VizDirective) vizHost: VizDirective;
  viz: VisualisationDynamicComponent;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private vizService: VizService) { //private _componentFactoryResolver: ComponentFactoryResolver, 


  }

  ngAfterViewInit() {
    this.loadComponent();
    // this.getAds();
  }

  ngOnDestroy() {

  }

  loadComponent() {
    setTimeout(() => {
      this.viz = this.vizService.getVisualisations()[this.id];
      let componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.viz.component);
      let viewContainerRef = this.vizHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<VizComponentInterface>componentRef.instance).setVisualisationData(this.visData);

    }, 100);

  }


}
