import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2OneAppComponent } from '../app/ng2-one.component';

beforeEachProviders(() => [Ng2OneAppComponent]);

describe('App: Ng2One', () => {
  it('should create the app',
      inject([Ng2OneAppComponent], (app: Ng2OneAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-one works!\'',
      inject([Ng2OneAppComponent], (app: Ng2OneAppComponent) => {
    expect(app.title).toEqual('ng2-one works!');
  }));
});
