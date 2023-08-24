import { Component, OnDestroy, OnInit } from '@angular/core';
import { category } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/Category';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit  {
  categories: Array<Category> = category;
  category: Category | undefined;
  categoryId: string = '';
  showMoreInfo = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      res => {
        this.showMoreInfo = res['detail'] === 'true' ? true : false;
      }
    );

    this.activatedRoute.params.subscribe(
      res => {
        this.categoryId = res['id']
        this.getCategoryById()
      }
    );
  }

  getCategoryById() {
    this.category = this.categories.find(cat => cat.id === +this.categoryId);
  }

  getNextUser(): void {
    this.router.navigate(['user-detail', +this.categoryId + 1])
  }
}
