import { TestBed, inject } from '@angular/core/testing';

import { IndustryService } from './industry.service';

describe('IndustryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustryService]
    });
  });

  it('should ...', inject([IndustryService], (service: IndustryService) => {
    expect(service).toBeTruthy();
  }));
});
