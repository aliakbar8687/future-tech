import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';
import { SubCategoryComponent } from './sub-category.component';
import { FormsModule } from '@angular/forms';
import { SubCategoryRoutingModule } from './sub-category-routing.module';

@NgModule({
  declarations: [
    SubCategoryComponent,
    AddSubCategoryComponent,
    EditSubCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubCategoryRoutingModule
  ]
})
export class SubCategoryModule { }
