import { Component } from '@angular/core';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-search-single',
  templateUrl: './search-single.component.html',
  styleUrls: ['./search-single.component.scss']
})
export class SearchSingleComponent {

  constructor() { }

  search: Store;

}
