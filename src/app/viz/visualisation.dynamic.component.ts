import { Type } from '@angular/core';
export class VisualisationDynamicComponent {
    public queryId: string;
    constructor(public component: Type<any>) { }
    // constructor(public component: Type<any>, public data: any) {}
}