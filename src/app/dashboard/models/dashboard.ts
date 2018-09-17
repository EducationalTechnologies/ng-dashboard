export interface DashboardPage {
    id: string;
    name : string;
    rows : DashboardPageRow[];
  }

  export interface DashboardPageRowPayload {
    pageId:string;
    rows:DashboardPageRow[];
  }

  export interface DashboardPageRow {
    id: string;
    pageId: string;
    title : string;
    columns : DashboardPageColumn []
  }

  export interface DashboardPageColumnPayload {
    pageId: string;
    rowId:string;
    
    columns:DashboardPageColumn[];
  }

  export interface DashboardPageColumn {
    id: string;
    width:  number
    title : string;
    classes?: string;
    widgetId?:string;  //todo remove
    widgets?:Widget[];
  }

  export interface Widget {
    type: string;
    // vizId: string;
    queryId?:  string;
    resultsFormat? : string;
    text? : string;
  }