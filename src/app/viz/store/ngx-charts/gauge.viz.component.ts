import { Component, Input } from '@angular/core';
import { VizComponentInterface } from '../../visualisation.component.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    // providers: [QueryService],
    templateUrl: './gauge.viz.component.html',

})
export class GaugeChartVizComponent implements VizComponentInterface {
    view: any[] = [700, 400];
//   data: any[];
  data :any = [
   
  ];
  
  constructor() {
   
  }
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  
  

    setVisualisationData(data: any) {
        //console.log(data);
        if (data) this.data = data.data;
        // this.xAxisLabel = data.metadata.xAxis;
        // this.yAxisLabel = data.metadata.yAxis;
    }

    setConfig(config: any): void {
    }

}