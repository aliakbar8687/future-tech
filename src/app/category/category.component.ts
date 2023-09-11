import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { Button } from '../models/Sub-Header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  isChildActivate: boolean = false;
  showAddCategory: boolean = false;
  categories: Category[] = [];
  selectedCategory: Category;

  subHeaderButton: Button[] = [
    {
      text: 'Add Category',
      class: 'btn btn-outline-success'
    }
  ]

  constructor(
    private _categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this._categoryService
        .list()
        .subscribe(
          res => {
            this.categories = res.payload
          }
        );
  }

  onEdit(id: string): void {
    this.isChildActivate = true;
    this.showAddCategory = false;
    this.selectedCategory = this.categories.find(category => category._id === id) as Category;
  }

  onDelete(id: string) {
    this._categoryService
        .delete(id)
        .subscribe(
          res => {
            if (Object.keys(res.payload).length < 1) return;

            const index = this.categories.findIndex(category => category._id === id);
            if (index !== -1) this.categories.splice(index, 1);
          }
        )
  }

  handleCancel(ev: Category | null = null) {
    this.isChildActivate = false;
  }

  onAdd(): void {
    this.isChildActivate = true;
    this.showAddCategory = true;
  }

  onSearch(searchText: string) {
    console.log(searchText);
  }
 }
