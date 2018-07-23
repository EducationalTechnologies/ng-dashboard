import { Component, Input } from '@angular/core';
import { VizComponentInterface } from '../../visualisation.component.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    // providers: [QueryService],
    templateUrl: './barchart.viz.component.html',

})
export class BarChartVizComponent implements VizComponentInterface {
    // single: any[];
    multi: any[];
  
    view: any[] = [700, 400];
    single :any= [
        
      ];
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = '-';
    showYAxisLabel = true;
    yAxisLabel = '-';
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  
    constructor() {
    }



    data: any;

    setVisualisationData(data: any) {
        console.log(data);
        this.single = data.data;
        this.xAxisLabel = data.metadata.xAxis;
        this.yAxisLabel = data.metadata.yAxis;
    }

}