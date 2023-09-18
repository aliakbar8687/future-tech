import { Injectable } from '@angular/core';
import { CategoryList } from '../models/Category';

@Injectable()
export class SubCategoryService {
  private subCategories: CategoryList[] = [
    {
      id:1,
      name:"Formal Wear",
      description:"formal wear collections"
    },
    {
      id:2,
      name:"Casual Wear",
      description:"casual wear collections"
    },
    {
      id:3,
      name:"Western Wear",
      description:"western wear collections"
    },
  ];

  constructor() { }

  list(): CategoryList[] {
    return this.subCategories;
  }
}
