/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValAdminJWTService } from './val-admin-jwt.service';

describe('Service: ValAdminJWT', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValAdminJWTService]
    });
  });

  it('should ...', inject([ValAdminJWTService], (service: ValAdminJWTService) => {
    expect(service).toBeTruthy();
  }));
});
