import { User } from 'src/app/models/User';
import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  const _authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  
  return _authService.isLoggedIn$.pipe(switchMap(isLoggedIn => {
    const index = Object.keys(route.data).findIndex(key => route.data[key] === isLoggedIn);
    if (index !== -1) return of(true);

    return router.navigate(['not-found']);
  }));
};
