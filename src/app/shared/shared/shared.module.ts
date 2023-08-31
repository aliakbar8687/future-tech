import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../components/sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SubHeaderComponent,
  ]
})
export class SharedModule { }
