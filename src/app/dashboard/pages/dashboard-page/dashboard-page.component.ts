import { Component, OnInit,OnChanges,ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as DashboardActions from '../../actions/dashboard.actions';
import { DashboardPage } from '../../models/dashboard';

import * as fromDashboard from '../../reducers';
import * as fromApp from '../../../reducers';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ng-dashboard-page',
  templateUrl: './dashboard-page.component.html',

  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardPageComponent implements OnInit, OnChanges {
  // private w$ : Observable<DashboardPage>;
  private currentPage$ : Observable<DashboardPage>;
  private currentPage1$ : Observable<any>;
  private currentPage2$ : Observable<any>;
  private currentPage3$ : Observable<any>;
  constructor(
    private store: Store<fromDashboard.State>,
    private route: ActivatedRoute
  ) { 
    // this.w$ = store.pipe(select(fromDashboard.currentPageWithWidgets));
    this.currentPage3$ = store.pipe(select(fromDashboard.selectCurrentPage))
    this.currentPage1$ = store.pipe(select(fromDashboard.selectWidgets))
    this.currentPage$ = store.pipe(select(fromDashboard.currentPageWithWidgets))
    this.currentPage3$ = store.pipe(select(fromApp.selectCurrentPageId))
  }

  ngOnChanges(){
    console.log("change")
    var pageId = this.route.snapshot.params.pageId;
    this.store.dispatch(new DashboardActions.SelectPage(pageId));
  }

  ngOnInit() {
    var pageId = this.route.snapshot.params.pageId;
    
    //this.store.dispatch(new DashboardActions.DRLoad(pageId));

    console.log("page id  is ", pageId)
  }

}
