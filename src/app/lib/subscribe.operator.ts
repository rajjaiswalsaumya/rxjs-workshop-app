import { first, last } from 'rxjs/operators';
import { of } from 'rxjs';

export class SubscribeOperator {
  constructor() {}

  public demo() {
    return first()(of(1, 2, 3));
  }

  public demo2() {
    return last()(of(1, 2, 3));
  }
}
