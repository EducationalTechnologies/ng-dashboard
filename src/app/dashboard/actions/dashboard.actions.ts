import { Action } from '@ngrx/store';
import { DashboardPage, DashboardPageRowPayload, DashboardPageColumn, DashboardPageColumnPayload, Widget } from '../models/dashboard';

export enum DashboardActionTypes {
    SelectPage = '[DashboardPage] Select Page',
    DPLoad = '[DashboardPage] Load',
    DPLoadSuccess = '[DashboardPage] Load Success',
    DRLoad = '[DashboardPage] Load Row',
    DRLoadSuccess = '[DashboardPage] Load Row Success',
    DCLoadSuccess = '[DashboardPage] Load Column Success',

    WidgetLoad = '[DashboardPage] Load Widget',
    WidgetLoadSuccess = '[DashboardPage] Load Widget Success',
}

export class SelectPage implements Action {
    readonly type = DashboardActionTypes.SelectPage;
    constructor(public pageId:string) { }
}

export class DPLoad implements Action {
    readonly type = DashboardActionTypes.DPLoad;
    constructor() { }
}

export class DPLoadSuccess implements Action {
    readonly type = DashboardActionTypes.DPLoadSuccess;
    constructor(public payload: DashboardPage[]) { }
}

export class DRLoad implements Action {
    readonly type = DashboardActionTypes.DRLoad;
    constructor(public pageId:string) { }
}

export class DRLoadSuccess implements Action {
    readonly type = DashboardActionTypes.DRLoadSuccess;
    constructor(public payload: DashboardPageRowPayload) { }
}

export class DCLoadSuccess implements Action {
    readonly type = DashboardActionTypes.DCLoadSuccess;
    constructor(public payload: DashboardPageColumnPayload) { }
}

export class WidgetLoad implements Action {
    readonly type = DashboardActionTypes.WidgetLoad;
    constructor(public widgetId:string) { }
}

export class WidgetLoadSuccess implements Action {
    readonly type = DashboardActionTypes.WidgetLoadSuccess;
    constructor(public widget: Widget) { }
}

export type DashboardActionsUnion =
    |SelectPage| DPLoad  | DPLoadSuccess | DRLoad | DRLoadSuccess | DCLoadSuccess| WidgetLoad |WidgetLoadSuccess;