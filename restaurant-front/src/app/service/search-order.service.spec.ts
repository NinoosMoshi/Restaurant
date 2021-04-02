import { TestBed } from '@angular/core/testing';

import { SearchOrderService } from './search-order.service';

describe('SearchOrderService', () => {
  let service: SearchOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
