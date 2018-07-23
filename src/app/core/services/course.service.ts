import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../../course/models/course';

@Injectable()
export class CourseService {
  private API_PATH = 'https://virtserver.swaggerhub.com/DIPF-EduTec/Dashboard/1.0.0/courses';

  constructor(private http: HttpClient) {}

  list(): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.API_PATH);
  }
}
