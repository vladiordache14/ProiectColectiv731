//This is the toggle-button that switches between pages

import { Component } from '@angular/core';
import { ToggleService } from '../../service/toggle.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
  constructor(private toggleService: ToggleService, private router: Router) {}

  isToggled$ = this.toggleService.isToggled$;
  isToggled: boolean = false;

  //Returns the correct text inside the button
  getButtonText(): string {
    this.isToggled$.subscribe(value => {
      this.isToggled = value;
    })
    if (this.isToggled) {
      return 'All Offers';
    } else {
      return 'My Offers';
    }
  }

  //changes the page we are on
  private changePage() {
    this.isToggled$.subscribe(value => {
      this.isToggled = value;
    })
    if (!this.isToggled) {
      this.router.navigate(['/page-two']);
    } else {
      this.router.navigate(['/page-one']);
    } 
  }

  toggleButton() {
    this.changePage();
    this.toggleService.toggle();
  }
}