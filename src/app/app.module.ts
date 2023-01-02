import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { OutputFieldsComponent } from './output-fields/output-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldsComponent,
    OutputFieldsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
