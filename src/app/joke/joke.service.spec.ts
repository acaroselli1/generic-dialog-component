import { TestBed } from '@angular/core/testing';

import { JokeService } from './joke.service';
import { HttpClientModule } from '@angular/common/http';

describe('JokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: JokeService = TestBed.get(JokeService);
    expect(service).toBeTruthy();
  });
});
