/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShippingsUserService } from './shippings-user.service';

describe('ShippingsUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingsUserService]
    });
  });

  it('should ...', inject([ShippingsUserService], (service: ShippingsUserService) => {
    expect(service).toBeTruthy();
  }));
});
