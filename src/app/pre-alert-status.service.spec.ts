/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreAlertStatusService } from './pre-alert-status.service';

describe('PreAlertStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreAlertStatusService]
    });
  });

  it('should ...', inject([PreAlertStatusService], (service: PreAlertStatusService) => {
    expect(service).toBeTruthy();
  }));
});
