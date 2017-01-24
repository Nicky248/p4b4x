/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreAlertService } from './pre-alert.service';

describe('Service: PreAlert', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreAlertService]
    });
  });

  it('should ...', inject([PreAlertService], (service: PreAlertService) => {
    expect(service).toBeTruthy();
  }));
});
