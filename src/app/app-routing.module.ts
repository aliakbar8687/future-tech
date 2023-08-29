import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  },
  {
    path: 'category',
    canActivate: [authGuard, roleGuard],
    data: ['admin', 'super_admin', 'it'],
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'sub-category',
    canActivate: [authGuard, roleGuard],
    data: ['admin', 'it'],
    loadChildren:() => import('./sub-category/sub-category.module').then(m => m.SubCategoryModule)
  },
  {
    path: 'product',
    canActivate: [authGuard],
    data: ['it', 'super_admin'],
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
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
  imports: [RouterModule.forRoot(routes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
