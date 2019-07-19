import { Component } from '@angular/core';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-search-single',
  templateUrl: './search-single.component.html',
  styleUrls: ['./search-single.component.scss']
})
export class SearchSingleComponent {

  constructor() { }
  images = ["../../assets/img_store_a01@2x.png","../../assets/img_store_a02@2x.png", "../../assets/img_store_a03@2x.png"];

  search: Store;

}
