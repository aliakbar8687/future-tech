import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';



@NgModule({
  declarations: [
    AddSubCategoryComponent,
    EditSubCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubCategoryModule { }
