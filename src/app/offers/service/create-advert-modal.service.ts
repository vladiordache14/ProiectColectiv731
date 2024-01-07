import { Injectable } from '@angular/core';
import { CreateAdvertComponent } from '../components/create-advert/create-advert.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class CreateAdvertModalService {

  constructor(private dialog: MatDialog) {}

  openCreateAdvertModal() {
    this.dialog.open(CreateAdvertComponent, {
      width: '1000px',
    });
  }
}

