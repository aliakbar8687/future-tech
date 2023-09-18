import { Component, OnInit } from '@angular/core';
import { CategoryList } from '../models/Category';
import { CategoryService } from '../services/category.service';
import { Button } from '../models/Sub-Header';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  isChildActivate: boolean = false;
  showAddCategory: boolean = false;
  categories: CategoryList[] = [];
  selectedCategory: CategoryList;

  subHeaderButton: Button[] = [
    {
      text: 'Add Category',
      class: 'btn btn-outline-success'
    }
  ]

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  onEdit(id: number): void {
    this.isChildActivate = true;
    this.showAddCategory = false;
    this.selectedCategory = this.categories.find(category => category.id === id) as CategoryList;
  }

  handleCancel(ev: CategoryList | null = null) {
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
