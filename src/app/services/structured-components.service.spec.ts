import { TestBed, inject } from '@angular/core/testing';

import { StructuredComponentsService } from './structured-components.service';

describe('StructuredComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StructuredComponentsService]
    });
  });

  it('should be created', inject([StructuredComponentsService], (service: StructuredComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
