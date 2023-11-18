import {Component, OnInit} from '@angular/core';
import {Offer} from "../offer";
import {OffersService} from "../service/offers.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit{
  offers: Offer[] = [];

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe(offers => {
      this.offers = offers;
    });
  }
}
