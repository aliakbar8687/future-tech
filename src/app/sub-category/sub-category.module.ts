import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';
import { SubCategoryComponent } from './sub-category.component';
import { FormsModule } from '@angular/forms';
import { SubCategoryRoutingModule } from './sub-category-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { SubCategoryService } from './sub-category.service';

@NgModule({
  declarations: [
    SubCategoryComponent,
    AddSubCategoryComponent,
    EditSubCategoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubCategoryRoutingModule,
    SharedModule
  ],
  providers: [
    SubCategoryService
  ]
})
export class SubCategoryModule { }
