import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { filter, takeUntil, takeWhile } from 'rxjs';

export function AuthGuard(intialRoute: string): CanActivateFn {
  return () => {
    const signupService = inject(LoginService);
    const router: Router = inject(Router);
    if (signupService.isAuthenticated()) {
      return true;
    } else {
      signupService.openLoginModal.next(true);
      signupService.authenticationState
        .pipe(
          takeWhile((value) => value == false, true),
          takeUntil(
            signupService.openLoginModal.pipe(filter((value) => value == false))
          )
        )
        .subscribe((state) => {
          if (state) {
            signupService.openLoginModal.next(false);
            router.navigate([intialRoute]);
          }
        });
      router.navigate(['/']);
      return false;
    }
  };
}
