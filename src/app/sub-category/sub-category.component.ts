import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { CategoryList } from '../models/Category';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit,OnDestroy{
  isChildActivate: boolean = false;
  routeSubscription: Subscription;
  subCategoryList:CategoryList[]=[
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

