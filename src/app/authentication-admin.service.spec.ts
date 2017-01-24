/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationAdminService } from './authentication-admin.service';

describe('AuthenticationAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationAdminService]
    });
  });

  it('should ...', inject([AuthenticationAdminService], (service: AuthenticationAdminService) => {
    expect(service).toBeTruthy();
  }));
});
