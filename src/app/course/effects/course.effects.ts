import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Injectable, Inject} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import { Observable } from 'rxjs';
import {Action} from '@ngrx/store'

import * as CourseActions from '../actions/course.actions';
import { CourseService } from '../../core/services/course.service';


@Injectable()
export class CourseEffects {
     @Effect()
     init$: Observable<Action> =this.actions$
     .ofType(CourseActions.CourseActionTypes.Load)
     .switchMap(
         payload =>  this.courses.list()
         .map(res => {
             return new CourseActions.LoadSuccess(res);
        })
       
     );
    
    constructor(
        private actions$: Actions,
        private courses: CourseService
        // @Inject('config') private config:any
    ) {

    }
}