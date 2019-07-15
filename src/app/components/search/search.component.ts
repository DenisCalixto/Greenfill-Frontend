import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { SearchService, Search } from './../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private searchService: SearchService, private router: Router) {}

  searchs: Search[] = [];

  onSubmit(form: NgForm) {

    //test if form is valid in terms of security
    if (!form.valid) {
      return;
    }

    // storing the search text typed by the user
    const searchText = form.value.searchText;

    // Observable which is going to wait for the service 
    // to return something from the API
    let searchObs: Observable<Search[]>;
    searchObs = this.searchService.search(searchText);

    searchObs.subscribe(
      resData => {
        console.log(resData);
        for(const key in resData[0]) {
          console.log(resData[0][key]);
          this.searchs.push(resData[0][key]);
        }
        console.log(this.searchs);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );

    form.reset();
  }
}
