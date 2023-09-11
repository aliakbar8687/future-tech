import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { CategoryList } from '../models/Category';
import { Button } from '../models/Sub-Header';
import { CategoryService } from '../services/category.service';
import { SubCategoryService } from './sub-category.service';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit, OnDestroy {
    isChildActivate: boolean = false;
  routeSubscription: Subscription;
  subCategoryList: CategoryList[] = [];

  subHeaderButton: Button[] = [
    {
      text: 'Add Sub Category',
      class: 'btn btn-outline-success'
    }
  ];
  
  constructor(
    private router: Router,
    private _subCategoryService: SubCategoryService
  ) {
  }
 
  ngOnInit(): void {
    this.subCategoryList = this._subCategoryService.list();
    
    this.routeSubscription = this.router
        .events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(
          (res) => {
            this.isChildActivate = (res as NavigationEnd).url.includes('add') || (res as NavigationEnd).url.includes('edit') ? true : false;
          }
        )
  }

  ngAfterViewInit(): void {
    // this.subHeaderComponentRef.changeTitleStyle();
    // console.log(this.categoryNameRef.toArray()[1]);
    // this.categoryNameRef.forEach((c, i) => {
    //   console.log(c);
    //   if (i === 1) (c.nativeElement as HTMLElement).style.color = 'red';
    // })
    // (this.categoryNameRef.toArray()[0].nativeElement as HTMLElement).style.color = 'red';
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  onSearch(searchText: string) {
    console.log(searchText);
  }

  onHeaderClick() {
    console.log('gefgdfgfd');
  }
}

