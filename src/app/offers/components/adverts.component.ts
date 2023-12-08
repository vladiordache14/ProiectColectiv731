import {Component, Input, OnInit} from '@angular/core';
import {Advert} from "../advert";
import {AdvertService} from "../service/advert.service";
import {MatDialog} from "@angular/material/dialog";
import {CartDialogComponent} from "../../cart-dialog/components/cart-dialog.component";

@Component({
  selector: 'app-adverts',
  providers: [AdvertService],
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit{
  adverts: Advert[] = [];

  constructor(private advertService: AdvertService, private dialog: MatDialog) { } // Inject MatDialog

  ngOnInit(): void {
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

  openCartDialog(): void {
    this.dialog.open(CartDialogComponent, {
      width: '450px',
      data: { items: this.adverts }
    });
  }
}
