import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Advert } from '../../advert';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent {
  @Output() submitAdvert = new EventEmitter<Advert>();
  advertForm: FormGroup;

  constructor(private fb: FormBuilder,
  public dialogRef: MatDialogRef<CreateAdvertComponent>,) {
    this.advertForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
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
