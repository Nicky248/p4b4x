/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminPersonalShopperService } from './admin-personal-shopper.service';

describe('AdminPersonalShopperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPersonalShopperService]
    });
  });

  it('should ...', inject([AdminPersonalShopperService], (service: AdminPersonalShopperService) => {
    expect(service).toBeTruthy();
  }));
});
