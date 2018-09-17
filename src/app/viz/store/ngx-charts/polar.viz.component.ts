import { Component, Input } from '@angular/core';
import { VizComponentInterface } from '../../visualisation.component.interface';

@Component({
    templateUrl: './polar.viz.component.html',
})
export class PolarChartVizComponent implements VizComponentInterface {
    view: any[] = [400, 400];
//   data :any = [
   
//   ];
  data =[
    {data: [5, 5, 5, 5, 5, 5, 5], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  constructor() {
   
  }
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  
  

    setVisualisationData(data: any) {
        // console.log(data.data);
        // this.data = data.data;
    }

    onClick(e:any){
        console.log("click");
    }

    onLegendLabelClick(e:any){
        console.log("onLegendLabelClick");
    }

    activate(e:any){
        console.log("activate");
    }

    setConfig(config: any): void {
    }

}