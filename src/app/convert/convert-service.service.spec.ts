import { TestBed } from '@angular/core/testing';

import { ConvertServiceService } from './convert-service.service';

describe('ConvertServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvertServiceService = TestBed.get(ConvertServiceService);
    expect(service).toBeTruthy();
  });
});
