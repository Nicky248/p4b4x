/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActStaPersonalShopperService } from './act-sta-personal-shopper.service';

describe('ActStaPersonalShopperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActStaPersonalShopperService]
    });
  });

  it('should ...', inject([ActStaPersonalShopperService], (service: ActStaPersonalShopperService) => {
    expect(service).toBeTruthy();
  }));
});
