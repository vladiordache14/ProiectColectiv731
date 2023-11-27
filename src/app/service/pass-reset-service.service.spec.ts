import { TestBed } from '@angular/core/testing';

import { PassResetService } from './pass-reset-service.service';

describe('PassResetServiceService', () => {
  let service: PassResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassResetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
