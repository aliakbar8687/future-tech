import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextHighlightDirective } from './custom/directives/text-highlight.directive';
import { ConvertINRPipe } from './custom/pipe/convert-inr.pipe';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductComponent } from './product/product.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';


@NgModule({
  declarations: [
    AppComponent,
    TextHighlightDirective,
    ConvertINRPipe,
    HeaderComponent,
    NotFoundComponent,
    CategoryComponent,
    SubCategoryComponent,
    ProductComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
