import { TestBed } from '@angular/core/testing';

import { SubscriptService } from './subscript.service';

describe('SubscriptService', () => {
  let service: SubscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
