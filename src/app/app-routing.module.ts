import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductComponent } from './product/product.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      {
        path: 'add',
        component: AddCategoryComponent
      },
      {
        path: 'edit/:id',
        component: EditCategoryComponent
      }
    ]
  },
  {
    path: 'sub-category',
    component: SubCategoryComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
