import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, filter, of, takeUntil, takeWhile } from 'rxjs';
import { SignupService } from 'src/app/authentication/services/signup.service';

@Component({
  selector: 'app-first_page',
  templateUrl: './first_page.component.html',
  styleUrls: ['./first_page.component.css'],
})
export class First_pageComponent implements OnDestroy {
  private unsubscribe = new Subject();
  displayDialog: boolean = false;

  constructor(private router: Router, private signupService: SignupService) {}
  ngOnDestroy(): void {
    this.unsubscribe.next('');
  }

  logInPopup() {
    this.signupService.openLoginModal.next(true);
    this.signupService.authenticationState
      .pipe(
        takeWhile((value) => value == false, true),
        takeUntil(
          this.signupService.openLoginModal.pipe(
            filter((value) => value == false)
          )
        )
      )

      .subscribe((value) => {
        if (value === true) {
          this.hideDialog();
          this.routeOnSuccess();
        }
      });
  }

  hideDialog() {
    this.signupService.openLoginModal.next(false);
  }

  routeOnSuccess() {
    this.router.navigate(['/adverts']);
  }
}
