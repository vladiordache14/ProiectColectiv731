import { Component, Inject } from '@angular/core';
import { Advert } from "../../offers/advert";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {
  private localStorageKey = 'cartData';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Advert[],
              private dialogRef: MatDialogRef<CartDialogComponent>) { }

  removeItem(advert: Advert) {
    this.data = this.data.filter(item => item !== advert);
    this.updateLocalStorage(); // Update local storage after removing an item
  }

  placeOrder() {
    // Implement place order logic if needed
  }

  closeDialog() {
    this.dialogRef.close(this.data);
  }

  selectImage(advert: Advert, index: number): void {
    advert.selectedIndex = index;
  }

  // Function to update local storage with the current cart data
  updateLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
  }
}
