import {Component, Inject} from '@angular/core';
import {Advert} from "../../offers/advert";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  removeItem(advert: any) {

  }

  placeOrder() {

  }
}
