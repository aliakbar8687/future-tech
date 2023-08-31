import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { CategoryList } from '../models/Category';
import { Button } from '../models/Sub-Header';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit,OnDestroy{
  isChildActivate: boolean = false;
  routeSubscription: Subscription;
  productList:CategoryList[]=[
    {
      id:1,
      name:"Formal Jeans",
      description:"formal jeans collections"
    },
    {
      id:2,
      name:"Denim Jeans",
      description:"denim jeans collections"
    },
    {
      id:3,
      name:"shirts",
      description:"shirts collections"
    },
    {
      id:4,
      name:"T-shirts",
      description:"T-shirts collections"
    },
    {
      id:5,
      name:"Women suits",
      description:"Suits collections"
    }
  ];

  subHeaderButton: Button[] = [
    {
      text: 'Add Product',
      class: 'btn btn-outline-success'
    }
  ];
  
  constructor(
    private router: Router
  ) {
  }
 
  ngOnInit(): void {
    this.routeSubscription = this.router
        .events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(
          (res) => {
            this.isChildActivate = (res as NavigationEnd).url.includes('add') || (res as NavigationEnd).url.includes('edit') ? true : false;
          }
        )
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  onSearch(searchText: string) {
    console.log(searchText);
  }
}
