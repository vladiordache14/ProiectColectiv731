import {Component, Input, OnInit} from '@angular/core';
import {Advert} from "../advert";
import {AdvertService} from "../service/advert.service";
import {ConfirmationDialogService} from "./confirmation-dialog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adverts',
  providers: [AdvertService],
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit{
  adverts: Advert[] = []
  showConfirmationDialog: boolean = false;
  advertBeingDeactivated: Advert | null = null;

  constructor(
    private advertService: AdvertService,
    private confirmationDialogService: ConfirmationDialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAdverts();
  }


  loadAdverts(): void {
    this.advertService.getActiveAdverts().subscribe(adverts => {
      for (let advert of adverts) {
        advert.selectedIndex = 0;
      }
      this.adverts = adverts;
    });
  }

  selectImage(advert: Advert, index: number): void {
    advert.selectedIndex = index;
  }

  showConfirmation(): void {
    this.showConfirmationDialog = true; // Set to true when "Deactivate" button is clicked
  }


  /*deactivateAdvert(advert: Advert): void {
    console.log('Deactivate button clicked');
    // Store the advert in a class property
    this.advertBeingDeactivated = advert;

    // Subscribe to the confirmation result
    this.confirmationDialogService.showDialog$.subscribe((confirmed: boolean) => {
      // User confirmed, proceed with deactivation logic
      this.onConfirmation(confirmed);
    });

    // Show the confirmation dialog
    this.showConfirmationDialog = true;
  }*/

  deactivateAdvert(advert: Advert): void {
    // Store the advert in a class property
    this.advertBeingDeactivated = advert;

    // Show the confirmation dialog
    this.showConfirmationDialog = true;
  }

  onConfirmation(confirmed: boolean): void {
    if (confirmed) {
      // User confirmed, proceed with deactivation logic
      console.log('User confirmed deactivation');

      const advert = this.advertBeingDeactivated;
      if (advert) {
        // Update advert to set isActive to false
        advert.isActive = false;

        // Deactivate the advert in the backend
        this.advertService.deactivateAdvert(advert.advertId).subscribe(() => {
          // Reload active adverts after deactivation
          this.loadAdverts();
        });
      }
    } else {
      // User cancelled or the dialog was closed
      console.log('Deactivation cancelled');
    }

    // Hide the confirmation dialog
    this.showConfirmationDialog = false;

    // Clear the stored advert
    this.advertBeingDeactivated = null;
  }


  editAdvert(advert: Advert): void {
    // Navigate to the edit page with the entire advert object as a parameter
    this.advertService.setAdvertBeingEdited(advert);
    this.router.navigate(['editAdvert'], { state: { advertId: advert.advertId } });
  }


}
