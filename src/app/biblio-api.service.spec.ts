import { TestBed } from '@angular/core/testing';

import { BiblioApiService } from './biblio-api.service';

describe('BiblioApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiblioApiService = TestBed.get(BiblioApiService);
    expect(service).toBeTruthy();
  });
});
