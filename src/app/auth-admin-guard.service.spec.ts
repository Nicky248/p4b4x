/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthAdminGuardService } from './auth-admin-guard.service';

describe('Service: AuthAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdminGuardService]
    });
  });

  it('should ...', inject([AuthAdminGuardService], (service: AuthAdminGuardService) => {
    expect(service).toBeTruthy();
  }));
});