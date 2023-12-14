import { Component, Input, OnInit } from '@angular/core';
import { Advert } from "../advert";
import { AdvertService } from "../service/advert.service";
import { MatDialog } from "@angular/material/dialog";
import { CartDialogComponent } from "../../cart-dialog/components/cart-dialog.component";

@Component({
  selector: 'app-adverts',
  providers: [AdvertService],
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  adverts: Advert[] = [];
  advertsInCart: Advert[] = [];
  public cartDataKey = 'cartData';

  constructor(private advertService: AdvertService, private dialog: MatDialog) { }

  ngOnInit(): void {

    // Clear the localStorage when the page is refreshed
    localStorage.removeItem(this.cartDataKey);

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

  addToCart(advert: Advert) {
    this.loadCartData();
    // Adding a copy to the cart
    this.advertsInCart.push({ ...advert });
    localStorage.setItem(this.cartDataKey, JSON.stringify(this.advertsInCart));
  }

  private loadCartData() {
    const storedCartData = localStorage.getItem(this.cartDataKey);
    this.advertsInCart = storedCartData ? JSON.parse(storedCartData) : [];
  }

  openCartDialog(): void {
    const storedCartData = localStorage.getItem(this.cartDataKey);
    // Pass the data from localStorage to the dialog
    this.dialog.open(CartDialogComponent, {
      width: '55%',
      data: storedCartData ? JSON.parse(storedCartData) : []
    });
  }
}
