/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreAlertsService } from './pre-alerts.service';

describe('PreAlertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreAlertsService]
    });
  });

  it('should ...', inject([PreAlertsService], (service: PreAlertsService) => {
    expect(service).toBeTruthy();
  }));
});
