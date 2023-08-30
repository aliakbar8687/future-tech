import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryList } from 'src/app/models/Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent {
  @Input('category') category: CategoryList;

  @Output('onCancel') onCancel = new EventEmitter<CategoryList>();

  handleClose() {
    this.onCancel.emit(this.category);
  }
}
