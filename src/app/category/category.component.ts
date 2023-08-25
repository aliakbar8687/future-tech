import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  isChildActivate: boolean = false;
  routeSubscription: Subscription;

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
