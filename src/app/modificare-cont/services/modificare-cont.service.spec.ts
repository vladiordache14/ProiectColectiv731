/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModificareContService } from './modificare-cont.service';

describe('Service: ModificareCont', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModificareContService]
    });
  });

  it('should ...', inject([ModificareContService], (service: ModificareContService) => {
    expect(service).toBeTruthy();
  }));
});
