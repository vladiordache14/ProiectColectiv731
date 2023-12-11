import {Component, Inject} from '@angular/core';
import {Advert} from "../../offers/advert";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Advert[],
              private dialogRef: MatDialogRef<CartDialogComponent>) { }

  removeItem(advert: Advert) {
    this.data = this.data.filter(item => item !== advert)
  }

  placeOrder() {

  }

  closeDialog() {
    this.dialogRef.close(this.data);
  }

  selectImage(advert: Advert, index: number): void {
    advert.selectedIndex = index;
  }
}
