import { Component } from '@angular/core';
import { CreateAdvertModalService } from '../../service/create-advert-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private modalService: CreateAdvertModalService) { }
  openAdvertModal() {
    this.modalService.openCreateAdvertModal();
  }
}
