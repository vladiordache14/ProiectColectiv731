import { TestBed } from '@angular/core/testing';

import { CreateAdvertModalService } from './create-advert-modal.service';

describe('CreateAdvertModalService', () => {
  let service: CreateAdvertModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAdvertModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
