import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartVizComponent } from './barchart.viz.component';
import { GaugeChartVizComponent} from './gauge.viz.component'
import { PolarChartVizComponent} from './polar.viz.component'

import { VizService } from './../../visualisation.service';
import { VisualisationDynamicComponent} from './../../visualisation.dynamic.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [CommonModule,    NgxChartsModule,
    ],

    declarations: [
        BarChartVizComponent,GaugeChartVizComponent,PolarChartVizComponent
    ],
    entryComponents: [
        BarChartVizComponent,GaugeChartVizComponent,PolarChartVizComponent
    ]
})
export class NgxChartsVizModule {
    constructor(private service:VizService){
        this.service.addService('ngx-barchart', new VisualisationDynamicComponent(BarChartVizComponent));
        this.service.addService('ngx-gauge', new VisualisationDynamicComponent(GaugeChartVizComponent));
        this.service.addService('ngx-polar', new VisualisationDynamicComponent(PolarChartVizComponent));
    };
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgxChartsVizModule,
        };
    }
}