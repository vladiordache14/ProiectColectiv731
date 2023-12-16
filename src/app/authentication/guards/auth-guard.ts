import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { filter, switchMap, takeUntil, takeWhile } from 'rxjs';

export function featureFlagGuard(intiialRoute: string): CanActivateFn {
  return () => {
    const signupService = inject(SignupService);
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
            router.navigate([intiialRoute]);
          }
        });
      router.navigate(['/']);
      return false;
    }
  };
}
