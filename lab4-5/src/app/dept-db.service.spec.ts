import { TestBed } from '@angular/core/testing';

import { DeptDbService } from './dept-db.service';

describe('DeptDbService', () => {
  let service: DeptDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
