import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import {User} from "../../model/user";
import {SignupService} from "../../service/signup.service";
import { ModificareContService } from 'src/app/modificare-cont/services/modificare-cont.service';

@Component({
  selector: 'app-first_page',
  templateUrl: './first_page.component.html',
  styleUrls: ['./first_page.component.css'],
})
export class First_pageComponent {
  constructor(public modificareContService: ModificareContService) {}
}
