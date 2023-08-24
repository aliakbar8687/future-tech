import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private _authService: AuthService
  ) {
    // this.isLoggedIn$ = this._authService.isLoggedIn$;
    this._authService.isLoggedIn$.subscribe(
      res => {
        console.log(res);
        this.isLoggedIn = res;
      },
      err => {

      }
    );
  }

  redirect(path: string): void {
    this.router.navigateByUrl(path);
  }

  login() {
    this._authService.login();
  }


  logout() {
    this._authService.logout();
  }

}
