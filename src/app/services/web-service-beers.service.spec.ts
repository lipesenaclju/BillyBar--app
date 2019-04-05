import { TestBed } from '@angular/core/testing';

import { WebServiceBeersService } from './web-service-beers.service';

describe('WebServiceBeersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebServiceBeersService = TestBed.get(WebServiceBeersService);
    expect(service).toBeTruthy();
  });
});
