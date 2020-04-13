import { TestBed } from '@angular/core/testing';

import { JwtHttpInterceptorService } from './jwt-http-interceptor.service';

describe('JwtHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtHttpInterceptorService = TestBed.get(JwtHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
