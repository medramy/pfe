import { TestBed } from '@angular/core/testing';

import { UsercrudService } from './usercrud.service';

describe('UtlisateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercrudService = TestBed.get(UsercrudService);
    expect(service).toBeTruthy();
  });
});
