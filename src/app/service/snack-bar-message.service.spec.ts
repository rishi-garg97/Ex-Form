import { TestBed } from '@angular/core/testing';

import { SnackBarMessageService } from './snack-bar-message.service';

describe('SnackBarMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackBarMessageService = TestBed.get(SnackBarMessageService);
    expect(service).toBeTruthy();
  });
});
