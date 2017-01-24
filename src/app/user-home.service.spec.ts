/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserHomeService } from './user-home.service';

describe('Service: UserHome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserHomeService]
    });
  });

  it('should ...', inject([UserHomeService], (service: UserHomeService) => {
    expect(service).toBeTruthy();
  }));
});
