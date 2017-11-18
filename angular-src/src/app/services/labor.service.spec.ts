import { TestBed, inject } from '@angular/core/testing';

import { LaborService } from './labor.service';

describe('LaborService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaborService]
    });
  });

  it('should be created', inject([LaborService], (service: LaborService) => {
    expect(service).toBeTruthy();
  }));
});
