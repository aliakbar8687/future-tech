import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../components/sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';
import { ButtonExpansionDirective } from '../directive/button-expansion.directive';

@NgModule({
  declarations: [
    SubHeaderComponent,
    ButtonExpansionDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SubHeaderComponent,
    ButtonExpansionDirective
  ]
})
export class SharedModule { }
