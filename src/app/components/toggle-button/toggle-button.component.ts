import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
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

  toggleButton() {
    this.isToggled$.subscribe(value => {
      this.isToggled = value;
    })
    if (!this.isToggled) {
      this.router.navigate(['/page-two']);
    } else {
      this.router.navigate(['/page-one']);
    } 
    this.toggleService.toggle();
  }
}