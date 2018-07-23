import { Component, OnInit, Input } from '@angular/core';
import { DashboardPageRow } from '../../models/dashboard';

@Component({
  selector: 'ng-dashboard-row',
  templateUrl: './dashboard-row.component.html',
  styleUrls: ['./dashboard-row.component.css']
})
export class DashboardRowComponent implements OnInit {

  @Input('row') row: DashboardPageRow; 

  constructor() { }

  ngOnInit() {
  }

}
