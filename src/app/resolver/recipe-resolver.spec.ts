import { TestBed } from '@angular/core/testing';

import { RecipeResolver } from './recipe-resolver';

describe('RecipeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeResolver = TestBed.get(RecipeResolver);
    expect(service).toBeTruthy();
  });
});
