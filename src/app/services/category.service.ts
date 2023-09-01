import { Injectable } from '@angular/core';
import { CategoryList } from '../models/Category';

@Injectable()
export class CategoryService {
  private categories: CategoryList[] = [
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
  constructor() { }

  list(): CategoryList[] {
    return this.categories;
  }

}
