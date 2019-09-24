import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";
import { FeedbackComponent } from "./feedback.component";

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [FeedbackComponent]
})
export class AppModule {}
