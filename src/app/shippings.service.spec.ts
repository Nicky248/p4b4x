/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShippingsService } from './shippings.service';

describe('ShippingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingsService]
    });
  });

  it('should ...', inject([ShippingsService], (service: ShippingsService) => {
    expect(service).toBeTruthy();
  }));
});
