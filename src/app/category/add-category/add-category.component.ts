import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  @Output('onCancel') onCancel = new EventEmitter();
  
  handleClose() {
    this.onCancel.emit(false);
  }
}
