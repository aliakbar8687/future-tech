import { Component, OnInit } from '@angular/core';
import { CategoryList } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  isChildActivate: boolean = false;
  showAddCategory: boolean = false;

  categoryList: CategoryList[] = [
    {
      id:1,
      name:"Men's Clothing",
      description:"Welcome to the World of Men's Clothing"
    },
    {
      id:2,
      name:"Women's Clothing",
      description:"Welcome to the World of Women's Clothing"
    },
    {
      id:3,
      name:"Kids's Clothing",
      description:"Welcome to the World of Kid's Clothing"
    },
  ];

  selectedCategory: CategoryList;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  onEdit(id: number): void {
    this.isChildActivate = true;
    this.showAddCategory = false;
    this.selectedCategory = this.categoryList.find(category => category.id === id) as CategoryList;
  }

  handleCancel(ev: CategoryList | null = null) {
    console.log(ev);
    
    this.isChildActivate = false;
  }

  onAdd(): void {
    this.isChildActivate = true;
    this.showAddCategory = true;
  }
 }
