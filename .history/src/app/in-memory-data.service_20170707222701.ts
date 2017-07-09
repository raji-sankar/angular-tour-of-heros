import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 11, name: 'Mr. Nice', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 12, name: 'Narco', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 13, name: 'Bombasto',  street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 14, name: 'Celeritas', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 15, name: 'Magneta', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 16, name: 'RubberMan', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 17, name: 'Dynama', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 18, name: 'Dr IQ', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 19, name: 'Magma', street: '123 main st', city: 'my city', state: 'NJ' },
      { id: 20, name: 'Tornado', street: '123 main st', city: 'my city', state: 'NJ' }
    ];
    return {heroes};
  }
}