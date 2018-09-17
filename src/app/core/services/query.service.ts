import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/distinct';



@Injectable()
export class QueryService {
  
  private API_PATH = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  query(queryId:string): Observable<any> {
    
    let url = '/query/'+queryId
    return this.http
      .get<any>(this.API_PATH+url)
      
  }

  
}
