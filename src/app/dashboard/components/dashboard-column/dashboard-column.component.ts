import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DashboardPageColumn } from '../../models/dashboard';
import { ICardOptions } from 'ng-admin-lte/src/app/modules/ng-admin-lte/card/card.component';

@Component({
  selector: 'ng-dashboard-column',
  templateUrl: './dashboard-column.component.html',
  styleUrls: ['./dashboard-column.component.css']
})
export class DashboardColumnComponent implements OnInit {

  @Input('column') column: DashboardPageColumn; 
  public cardOptionsCloseMe: ICardOptions;
  public cardOptionsNewProject: ICardOptions;

  
  vizId = "ngx-gauge"
  data = {
    "metadata": {
        "xAxis": "Country",
        "yAxis": "Population",
    },
    "data": [
        {
            "name": "Netherlands",
            "value": 52
        },
        {
            "name": "France",
            "value": 72
        }
    ]
  }

  constructor() { 
    this.cardOptionsCloseMe = { button: [ { icon: {'fa': true, 'fa-times': true} }] }
    this.cardOptionsNewProject = { button: [{ label: "New Project", id:"newProjectBtn" } ] }

  }

  ngOnInit() {
    
  }

  clickHeaderButton(val) {
    // console.log("Clicked "+val.id)
  }

}
