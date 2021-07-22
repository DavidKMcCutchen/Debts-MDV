import { TestBed } from '@angular/core/testing';

import { DebtsService } from './debts.service';

describe('DebtssService', () => {
  let service: DebtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
