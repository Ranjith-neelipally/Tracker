// TestDecorators.js
import {observable, action, makeObservable} from 'mobx';

class Store {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
    });
  }

  increment() {
    this.count++;
  }
}

const store = new Store();
store.increment();
console.log(store.count); // Should print 1 if decorators are working correctly
