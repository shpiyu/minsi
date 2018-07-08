import { TestBed, inject } from '@angular/core/testing';

import { StructuredProductsService } from './structured-products.service';

describe('StructuredProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StructuredProductsService]
    });
  });

  it('should be created', inject([StructuredProductsService], (service: StructuredProductsService) => {
    expect(service).toBeTruthy();
  }));
});
