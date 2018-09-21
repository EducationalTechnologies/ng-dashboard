import { Action } from '@ngrx/store';
import { DashboardPage, DashboardPageRowPayload, DashboardPageColumn, DashboardPageColumnPayload, Widget } from '../models/dashboard';

export enum DashboardActionTypes {
    DPLoad = '[DashboardPage] Load',
    DPLoadSuccess = '[DashboardPage] Load Success',
    DRLoad = '[DashboardPage] Load Row',
    DRLoadSuccess = '[DashboardPage] Load Row Success',
    DCLoadSuccess = '[DashboardPage] Load Column Success',

}

export class DPLoad implements Action {
    readonly type = DashboardActionTypes.DPLoad;
    constructor(public payload:{courseId:string}) { }
}

export class DPLoadSuccess implements Action {
    readonly type = DashboardActionTypes.DPLoadSuccess;
    constructor(public payload: {pages: DashboardPage[], courseId:string}) { }
}

export class DRLoad implements Action {
    readonly type = DashboardActionTypes.DRLoad;
    constructor(public payload:{pageId:string, courseId:string}) { }
}

export class DRLoadSuccess implements Action {
    readonly type = DashboardActionTypes.DRLoadSuccess;
    constructor(public payload: DashboardPageRowPayload) { }
}

export class DCLoadSuccess implements Action {
    readonly type = DashboardActionTypes.DCLoadSuccess;
    constructor(public payload: DashboardPageColumnPayload) { }
}


export type DashboardActionsUnion =
    | DPLoad  | DPLoadSuccess | DRLoad | DRLoadSuccess | DCLoadSuccess;
