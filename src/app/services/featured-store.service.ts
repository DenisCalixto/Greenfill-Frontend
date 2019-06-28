import { Injectable } from '@angular/core';

import { Store } from '../models/Featured-store'

@Injectable()
export class FeaturedStoreService {
  stores: Store[];

  constructor() {
    this.stores = [
      {
        name: 'NADA',
        address: '675 E Broadway Vancouver BC V5T 1X7',
        weekdayHours: 'Weekday 8a.m. - 8p.m.',
        weekendHours: 'Weekend 9a.m. - 8p.m.',
        image: '../../assets/store_nada.png'
      },
      {
        name: 'The Soap Dispensary',
        address: '675 E Broadway Vancouver BC V5T 1X7',
        weekdayHours: 'Weekday 8a.m. - 8p.m.',
        weekendHours: 'Weekend 9a.m. - 8p.m.',
        image: '../../assets/store_soap.png'
      },
      {
        name: 'Balanced Botanicals',
        address: '675 E Broadway Vancouver BC V5T 1X7',
        weekdayHours: 'Weekday 8a.m. - 8p.m.',
        weekendHours: 'Weekend 9a.m. - 8p.m.',
        image: '../../assets/store_balance.png'
      }
    ]
  }

  getStores(): Store[] {
    return this.stores;
  }
}
