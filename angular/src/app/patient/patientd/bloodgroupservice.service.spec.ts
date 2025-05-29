import { TestBed } from '@angular/core/testing';

import { BloodgroupserviceService } from './bloodgroupservice.service';

describe('BloodgroupserviceService', () => {
  let service: BloodgroupserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodgroupserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
