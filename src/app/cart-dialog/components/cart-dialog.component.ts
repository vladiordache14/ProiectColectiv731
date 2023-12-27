import { Component, Inject } from '@angular/core';
import { Advert } from "../../offers/advert";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AdvertService } from "../../offers/service/advert.service";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent {
  private localStorageKey = 'cartData';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Advert[],
              private dialogRef: MatDialogRef<CartDialogComponent>,
              private advertService: AdvertService) {
    this.dialogRef.afterOpened().subscribe(() => {
      this.updateInactiveAdverts();
    });
  }

  updateInactiveAdverts(): void {
    this.advertService.getActiveAdverts()
      .subscribe((activeAdverts: Advert[]) => {
        let activeAdvertIds = activeAdverts.map(advert => advert.id);
        for (let advert of this.data) {
          advert.isActive = activeAdvertIds.includes(advert.id);
        }
      })
  }

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
