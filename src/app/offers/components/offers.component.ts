import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../offer";
import {OffersService} from "../service/offers.service";

@Component({
  selector: 'app-offers',
  providers: [OffersService],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit{
  offers: Offer[] = [];

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getActiveOffers().subscribe(offers => {
      for (let offer of offers) {
        offer.selectedIndex = 0;
      }
      this.offers = offers;
    });
  }

  selectImage(offer: Offer, index: number): void {
    offer.selectedIndex = index;
  }
}
