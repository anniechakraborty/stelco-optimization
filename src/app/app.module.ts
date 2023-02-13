import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { OutputFieldsComponent } from './output-fields/output-fields.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material';
// there is some error with importing MatButtonModule this way as it is not defined in angular material

@NgModule({
  declarations: [
    AppComponent,
    InputFieldsComponent,
    OutputFieldsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}
