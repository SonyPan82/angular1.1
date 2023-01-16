import { TestBed } from '@angular/core/testing';

import { TodomscService } from './todomsc.service';

describe('TodomscService', () => {
  let service: TodomscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodomscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
