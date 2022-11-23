import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
