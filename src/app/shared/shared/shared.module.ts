import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from '../components/sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';
import { ButtonLargeDirective } from '../directives/button-large.directive';
import { RainbowDirective } from '../directives/rainbow.directive';
import { DropdownDirective } from '../directives/dropdown.directive';

@NgModule({
  declarations: [
    SubHeaderComponent,
    ButtonLargeDirective,
    RainbowDirective,
    DropdownDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SubHeaderComponent,
    ButtonLargeDirective,
    RainbowDirective,
    DropdownDirective,
  ]
})
export class SharedModule { }
