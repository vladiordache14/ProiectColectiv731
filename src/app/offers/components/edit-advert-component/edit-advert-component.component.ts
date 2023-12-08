import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Advert} from "../../advert";
import {AdvertService} from "../../service/advert.service";
import {Router} from "@angular/router";

/*interface AdvertState {
  advertId: number;
}*/

@Component({
  selector: 'app-edit-advert-component',
  templateUrl: './edit-advert-component.component.html',
  styleUrls: ['./edit-advert-component.component.css']
})
export class EditAdvertComponentComponent {
  advert!: Advert;
  //advert: Advert;
  isEditing: boolean = false;

  constructor(    private route: ActivatedRoute,
                  private advertService: AdvertService,
                  private router: Router) {}


  /*ngOnInit(): void {
    const advertId = this.router.getCurrentNavigation()?.extras.state?.advertId;

    if (advertId) {
      this.fetchAdvertData(advertId);
    } else {
      // Handle the case where advertId is not provided in the state
      // You might want to navigate back or show an error message
    }
  }*/


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const advertId = +params['advertId'];
      this.fetchAdvertData(advertId);
    });
  }


  private fetchAdvertData(advertId: number): void {
    this.advertService.getAdvertById(advertId).subscribe(advert => {
      this.advert = advert;
    },
      error => {
        console.error('Error fetching advert:', error);
      });
  }

  enableEditing(): void {
    this.isEditing = true;
  }

  selectImage(advert: Advert, index: number): void {
    advert.selectedIndex = index;
  }

  /*saveChanges(): void {
    this.advertService.updateAdvert(this.advert).subscribe(() => {
      // Redirect back to the AdvertsComponent
      this.router.navigate(['app-adverts']);
    }); */

  saveChanges(): void {
    // Call your service to update the advert data
    this.advertService.updateAdvert(this.advert).subscribe(() => {
      window.history.back(); // Navigate back to the previous page
    });

    // Disable editing after saving changes
    this.isEditing = false;
  }



}
