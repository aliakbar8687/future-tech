import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  const _authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  
  return _authService.isLoggedIn$.pipe(switchMap(isLoggedIn => {
    if (isLoggedIn) return of(true);

    return router.navigate(['not-found']);
  }));
  
};
