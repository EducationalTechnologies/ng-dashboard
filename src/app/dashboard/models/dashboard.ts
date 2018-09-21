export interface DashboardPageMap {
  [key: string]: {[key:string]:DashboardPage};
}
export interface DashboardPage {
  id: string;
  name: string;
  rows: DashboardPageRow[];
}

export interface DashboardRowMap {
  [key: string]: DashboardPageRow[];
}
export interface DashboardPageRowPayload {
  courseId:string;
  pageId: string;
  rows: DashboardPageRow[];
}

export interface DashboardPageRow {
  id: string;
  pageId: string;
  title: string;
  columns: DashboardPageColumn[]
}

export interface DashboardPageColumnPayload {
  pageId: string;
  rowId: string;

  columns: DashboardPageColumn[];
}

export interface DashboardPageColumnMap {
  [key: string]: DashboardPageColumn[];
}

export interface DashboardPageColumn {
  id: string;
  width: number
  title: string;
  classes?: string;
  widgetId?: string;  //todo remove
  widgets?: Widget[];
}

export interface Widget {
  type: string;
  // vizId: string;
  queryId?: string;
  resultsFormat?: string;
  text?: string;
}