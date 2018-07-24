import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-functionality-card",
  template: `
  <mat-card class="example-card">
    <mat-card-header>
      <div mat-card-avatar class="example-header-image"></div>
      <mat-card-title class="subheading-2">
        <h3>
          {{title}}
        </h3>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p>
        You can download all the data that has been collected about you. If you choose to do so, an archive (.zip) will be created
        and you will be able to download it once it is ready.
      </p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button color="primary">
        <mat-icon>archive</mat-icon>
        Create Download Archive
        <i class="fa fa-download" aria-hidden="true"> </i>
      </button>
    </mat-card-actions>
  </mat-card>
  `,
  styles: []
})
export class FunctionalityCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
