import { TestBed } from '@angular/core/testing';

import { BranchManagerGuard } from './branch-manager.guard';

describe('BranchManagerGuard', () => {
  let guard: BranchManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BranchManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
