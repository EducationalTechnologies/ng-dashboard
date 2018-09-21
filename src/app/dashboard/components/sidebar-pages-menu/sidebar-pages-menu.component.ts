import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../actions/dashboard.actions';
import { DashboardPage } from '../../models/dashboard';

import * as fromDashboard from '../../reducers';
import * as fromApp from '../../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: '[ng-sidebar-pages-menu]',
  templateUrl: './sidebar-pages-menu.component.html',
  styleUrls: ['./sidebar-pages-menu.component.css']
})
export class SidebarPagesMenuComponent implements OnInit {
  //private pages$ : Observable<DashboardPage[]> = this.store.pipe(select(fromDashboard.selectPages));

  private selectPagesForCourse$ : Observable<any> = this.store.select(fromDashboard.selectPagesForCourse);
  private selectCurrentCourseId$ : Observable<DashboardPage[]> = this.store.select(fromApp.selectCurrentCourseId);

  constructor(
    private store: Store<fromDashboard.State>
  ) { 
    

  }

  ngOnInit() {
    // this.store.dispatch(new DashboardActions.DPLoad());

  }

}
