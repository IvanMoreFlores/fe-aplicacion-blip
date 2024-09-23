import { TestBed } from '@angular/core/testing';

import { OpenstreetService } from './openstreet.service';

describe('OpenstreetService', () => {
  let service: OpenstreetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenstreetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
