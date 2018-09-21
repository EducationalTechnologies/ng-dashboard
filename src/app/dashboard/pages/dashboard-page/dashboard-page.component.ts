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

export class DashboardPageComponent implements OnInit {
  
  private currentPage$ : Observable<DashboardPage>  = this.store.select(fromDashboard.currentPageNew);
  
  constructor(
    private store: Store<fromDashboard.State>,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
  }

}
