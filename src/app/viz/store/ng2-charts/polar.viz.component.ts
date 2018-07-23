import { Component, Input } from '@angular/core';
import { VizComponentInterface } from '../../visualisation.component.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    templateUrl: './polar.viz.component.html',
    styleUrls: ['./polar.viz.component.css']
})
export class PolarChartVizComponent implements VizComponentInterface {
    
//   data :any = [
   
//   ];
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
 
  public data:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';
 
  dim: number=0;
  sliderVisible = false;
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


  
  

    setVisualisationData(data: any) {
        console.log(data.data);
        var rcd= []
        for (var i=0;i<data.data.length;i++){
            rcd[i] = {data:data.data[i].series, label:data.data[i].name}
        }
        this.radarChartLabels = data.metadata.labels;
        this.data = rcd;
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