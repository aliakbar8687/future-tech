import { category } from './../student';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { CategoryList } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit, OnDestroy {
  isChildActivate: boolean = false;
  routeSubscription: Subscription;

   categoryList:CategoryList[]=[
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
  ]

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
}
