import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Advert} from "../../advert";
import {AdvertService} from "../../service/advert.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-advert-component',
  templateUrl: './edit-advert-component.component.html',
  styleUrls: ['./edit-advert-component.component.css']
})
export class EditAdvertComponentComponent {
  advert!: Advert
  isEditing: boolean = false;

  constructor(    private route: ActivatedRoute,
                  private advertService: AdvertService,
                  private router: Router) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const advertId = +params['advertId'];
      this.fetchAdvertData(advertId);
      this.enableEditing(); // N AM ASTA declarat doar ca obiect si nu mi l recunoaste gen in html dupa
    });
  }


  /* DOAR CU OBIECT
  ngOnInit(): void {
    const state = this.router.getCurrentNavigation()?.extras.state as { advert: Advert } | undefined;
    if (state && state.advert) {
      this.advert = state.advert;
    } else {
      // Handle the case where the advert is not present in state
    }
  }*/

  private fetchAdvertData(advertId: number): void {
    // Call your service to fetch advert data based on advertId
    this.advertService.getAdvertById(advertId).subscribe(advert => {
      this.advert = advert;
    });
  }

  enableEditing(): void {
    this.isEditing = true;
  }

  selectImage(advert: Advert, index: number): void {
    advert.selectedIndex = index;
  }

  saveChanges(): void {
    // Call your service to update the advert data
    this.advertService.updateAdvert(this.advert).subscribe(() => {
      // Redirect back to the AdvertsComponent or any other desired route
      this.router.navigate(['app-adverts']);
    });

    // Disable editing after saving changes
    this.isEditing = false;
  }


}
