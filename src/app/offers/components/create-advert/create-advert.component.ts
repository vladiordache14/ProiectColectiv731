import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Advert } from '../../advert';
import { MatDialogRef } from '@angular/material/dialog';
import {AdvertService} from "../../service/advert.service";

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {
  @Output() submitAdvert = new EventEmitter<Advert>();

  advertForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private advertService: AdvertService,
              public dialogRef: MatDialogRef<CreateAdvertComponent>) {}

  ngOnInit() {
    this.advertForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.pattern(/(?:\bauto\b|\bcar\b|\bvehicle\b)/i)]],
      price: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit() {
    if (this.advertForm.valid) {
      const advertData = this.advertForm.value as Advert;
      this.submitAdvert.emit(advertData);
      this.advertForm.reset();
      this.dialogRef.close();
    }
  }

}
