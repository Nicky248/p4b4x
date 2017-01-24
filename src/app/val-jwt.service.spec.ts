/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValJWTService } from './val-jwt.service';

describe('Service: ValJWT', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValJWTService]
    });
  });

  it('should ...', inject([ValJWTService], (service: ValJWTService) => {
    expect(service).toBeTruthy();
  }));
});
