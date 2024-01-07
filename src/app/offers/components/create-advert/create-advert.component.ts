import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Advert } from '../../model/advert';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdvertService } from '../../service/advert.service';
import { AdvertsComponent } from '../advert/adverts.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AdvertRequest } from '../../model/advertRequest';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {
  @Output() submitAdvert = new EventEmitter<Advert>();

  advertForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private advertService: AdvertService,
    private userDataService: UserDataService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CreateAdvertComponent>
  ) {}

  ngOnInit() {
    this.advertForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.pattern(/(?:\bauto\b|\bcar\b|\bvehicle\b)/i)]],
      price: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]],
      photos: null
    });
  }

  onSubmit() {
    if (this.advertForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: 'Are you sure you want to submit this advert?'
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const advertData = this.advertForm.value as AdvertRequest;
          this.saveAdvert(advertData);
        }
      });
    }
  }

  onImagesChange(event: any) {
    const files = (event.target as HTMLInputElement).files;
    this.advertForm.patchValue({
      photos: files
    });
  }

  openDialog(): void {
    this.dialog.open(AdvertsComponent, {
      width: '250px'
    });
  }

saveAdvert(advertData: AdvertRequest) {
    const formData = new FormData();
    formData.append('advertDto', JSON.stringify({
        name: advertData.name,
        description: advertData.description,
        price: advertData.price
    }));

    for (let i = 0; i < advertData.photos.length; i++) {
        formData.append('photos', advertData.photos[i]);
    }

    this.advertService.addAdvert(formData).subscribe(
        (response) => {
            console.log('Advert added:', response);
            this.dialogRef.close();
        }
    );
}
}
