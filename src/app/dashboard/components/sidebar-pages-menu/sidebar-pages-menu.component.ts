import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as DashboardActions from '../../actions/dashboard.actions';
import { DashboardPage } from '../../models/dashboard';

import * as fromDashboard from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: '[ng-sidebar-pages-menu]',
  templateUrl: './sidebar-pages-menu.component.html',
  styleUrls: ['./sidebar-pages-menu.component.css']
})
export class SidebarPagesMenuComponent implements OnInit {
  private pages$ : Observable<DashboardPage[]>;

  constructor(
    private store: Store<fromDashboard.State>
  ) { 
    this.pages$ = store.pipe(select(fromDashboard.selectPages));
  }

  ngOnInit() {
    this.store.dispatch(new DashboardActions.DPLoad());

  }

}