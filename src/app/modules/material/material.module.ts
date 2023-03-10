import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule, 
  MatButtonToggleModule, 
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports : [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }
