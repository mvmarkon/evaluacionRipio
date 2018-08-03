import { TestBed, inject } from '@angular/core/testing';

import { TokenInjectionService } from './token-injection.service';

describe('TokenInjectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInjectionService]
    });
  });

  it('should be created', inject([TokenInjectionService], (service: TokenInjectionService) => {
    expect(service).toBeTruthy();
  }));
});
