import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromDashboard from '../../reducers';
import * as QueryActions from '../../actions/query.actions';

@Component({
  selector: 'ng-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  
  @Input() type: string;
  @Input() config: any;
  @Input('queryId') queryId: string;
  @Input('resultsFormat') resultsFormat: string;

  private data$ : Observable<any>;

  constructor(private store: Store<fromDashboard.State>) { 
  }

  ngOnInit() {
    if (this.queryId) {
      this.store.dispatch(new QueryActions.Query({queryId:this.queryId}));
      this.data$=this.store.select(fromDashboard.getResult(this.queryId));
    }
  }

}
