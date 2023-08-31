import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
