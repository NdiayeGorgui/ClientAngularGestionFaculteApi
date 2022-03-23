import { TestBed } from '@angular/core/testing';

import { TypeCoursService } from './type-cours.service';

describe('TypeCoursService', () => {
  let service: TypeCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
