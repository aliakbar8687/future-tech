import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

interface Menu {
  text: string;
  path: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // isLoggedIn: User | null;
  isLoggedIn: boolean = false;

  menus: Menu[] = [
    {
      text: 'Category',
      path: 'category'
    },
    {
      text: 'Sub Category',
      path: 'sub-category'
    },
    {
      text: 'Product',
      path: 'product'
    }
  ];

  constructor(
    private router: Router,
    private _authService: AuthService
  ) {
    this._authService.isLoggedIn$.subscribe(res => this.isLoggedIn);
  }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
  }

  redirect(path: string): void {
    this.router.navigateByUrl(path);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
 
}
