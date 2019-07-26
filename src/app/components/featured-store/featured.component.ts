import { Component, OnInit } from '@angular/core';
import { FeaturedStoreService } from '../../services/featured-store.service';
import { Store } from '../../models/Featured-store';


@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})

export class FeaturedComponent implements OnInit {

  // store: Store = {
  //   id: 0,
  //   name: '',
  //   address: '',
  //   weekdayHours: '',
  //   weekendHours: '',
  //   image: ''
  // }
  stores: Store[];

  constructor (private featuredStoreService: FeaturedStoreService) { }

  ngOnInit() {
    this.stores = this.featuredStoreService.getStores();
  }
}
