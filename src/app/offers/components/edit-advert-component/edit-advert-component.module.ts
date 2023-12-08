// edit-advert-component.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditAdvertComponentComponent } from './edit-advert-component.component';

@NgModule({
  declarations: [
    EditAdvertComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    // Add other modules as needed
  ],
})
export class EditAdvertComponentModule { }
