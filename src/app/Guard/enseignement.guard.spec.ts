import { TestBed } from '@angular/core/testing';

import { EnseignementGuard } from './enseignement.guard';

describe('EnseignementGuard', () => {
  let guard: EnseignementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EnseignementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
