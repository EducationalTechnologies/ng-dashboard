import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { VizModule } from "./viz/viz.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators
} from "@angular/forms";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatInputModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
  ],
})
export class MaterialModule {}
