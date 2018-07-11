import { Component, OnInit } from '@angular/core';
import { UserService } from 'ng-tla-services';
import {CourseService} from '../../../core/services/course.service'
import { select, Store } from '@ngrx/store';
import * as fromCourses from '../../reducers';
import * as CourseActions from '../../actions/course.actions';
import { Observable } from 'rxjs';


import { CourseActionTypes } from '../../actions/course.actions';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  private courses$ : Observable<Course[]>;
  
  constructor(
    private store: Store<fromCourses.State>,
    ) { 
      this.courses$ = store.pipe(select(fromCourses.selectCourses));

    }

  ngOnInit() {
    this.store.dispatch(new CourseActions.Load());
  }

}
