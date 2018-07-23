import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/distinct';

import { DashboardPage, DashboardPageRow, DashboardPageColumn, Widget } from '../../dashboard/models/dashboard';

@Injectable()
export class DashboardService {
  // private API_PATH = 'https://virtserver.swaggerhub.com/DIPF-EduTec/Dashboard/1.0.0';
  private API_PATH = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  listPages(): Observable<DashboardPage[]> {
    let url = `/dashboard/pages/3fa85f64-5717-4562-b3fc-2c963f66afa6`
    return this.http
      .get<DashboardPage[]>(this.API_PATH+url)
      
  }

  listRows(pageId:string) {
    let url = `/dashboard/page/${pageId}/rows`
    return this.http
      .get<DashboardPageRow[]>(this.API_PATH+url)
  }

  listColumns(rowId:string) {
    console.log('invoking listrows')
    let url = `/dashboard/page/row/${rowId}/columns`
    return this.http
      .get<DashboardPageColumn[]>(this.API_PATH+url)
  }

  getWidget(widgetId:string){
    console.log("widgetService",widgetId)
    let url = `/dashboard/widgets/${widgetId}`
    return this.http
      .get<Widget>(this.API_PATH+url)
  }
  
}
