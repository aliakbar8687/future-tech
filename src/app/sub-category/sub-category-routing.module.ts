import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';
import { SubCategoryComponent } from './sub-category.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SubCategoryComponent,
    children: [
      {
        path: 'add',
        component: AddSubCategoryComponent,
      },
      {
        path: 'edit/:id',
        component: EditSubCategoryComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCategoryRoutingModule {}
