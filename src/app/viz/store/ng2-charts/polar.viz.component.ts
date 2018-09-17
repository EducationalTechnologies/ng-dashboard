import { Component, Input } from '@angular/core';
import { VizComponentInterface } from '../../visualisation.component.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    templateUrl: './polar.viz.component.html',
    styleUrls: ['./polar.viz.component.css']
})
export class PolarChartVizComponent implements VizComponentInterface {
    
  public radarChartLabels:string[] = [];//['Time Investment', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
 

  data =[
    {data: [5, 5, 5, 5, 5, 5, 5], label: 'Goal'},
    {data: [6, 6, 6, 5, 5, 5, 6], label: 'Your Investment'}
  ];

  public radarChartType:string = 'radar';
 
  dim: number=0;
  sliderVisible = false;
 
  setVisualisationData(data: any) {
      if (data) {
          this.radarChartLabels = data.metadata.dimensions
          data.data.map((row, index)=>{
             this.data[index].data = row;
             this.data[index].label = data.metadata.series[index];
          })
      }
    //incomming data, todo

    
}

setConfig(config: any): void {
}
  
  // events
  public chartClicked(e:any):void {
      if (e.active && e.active[0]&&e.active[0]._datasetIndex == 1){
        this.sliderVisible = true;
        this.dim = e.active[0]._index;
      } else {
        this.sliderVisible = false;
      }
    
}
 
public changeParam(e:any, i:any) {
    console.log(e, i, "cp");
    console.log(this.data)
    var nData = [];
    nData[0] = this.data[0];
    nData[1] = this.data[1];
    this.data = nData;
}

  public chartHovered(e:any):void {
    console.log(e);
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
}