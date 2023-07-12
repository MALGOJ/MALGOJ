import { TestBed } from '@angular/core/testing';

import { MalgojService } from './malgoj.service';

describe('MalgojService', () => {
  let service: MalgojService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalgojService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
