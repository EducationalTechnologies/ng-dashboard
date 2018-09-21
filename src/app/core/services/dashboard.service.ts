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

  listPages(courseId:string): Observable<DashboardPage[]> {
    let url = `/dashboard/course/`+courseId+'/pages'
    return this.http
      .get<DashboardPage[]>(this.API_PATH+url)
      
  }

  listRows(courseId:string, pageId:string) {
    let url = `/dashboard/course/${courseId}/page/${pageId}/rows`
    return this.http
      .get<DashboardPageRow[]>(this.API_PATH+url)
  }

  listColumns(courseId:string, pageId:string,rowId:string) {
    
    let url = `/dashboard/course/${courseId}/page/${pageId}/row/${rowId}/columns`
    return this.http
      .get<DashboardPageColumn[]>(this.API_PATH+url)
  }

  getWidget(widgetId:string){
    let url = `/dashboard/widgets/${widgetId}`
    return this.http
      .get<Widget>(this.API_PATH+url)
  }
  
}
