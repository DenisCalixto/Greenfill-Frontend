import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { SearchService, Search } from './../../services/search.service';
import { SearchSingleComponent } from '../search-single/search-single.component';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService, private router: ActivatedRoute) {}

  // Creating a reference which will be used to access data and method from the child component
  @ViewChild(SearchSingleComponent, { static: true } as any) child: SearchSingleComponent;

  searchs: Search[] = [];

  ngOnInit(): void {
    if (history.state.data) {
      // console.log(history.state.data['searchedText']);
      this.search(history.state.data['searchedText']);
    } else {
      if (this.router.snapshot.paramMap.get('id')) {
        console.log(this.router.snapshot.paramMap.get('id'));
        this.loadStore(this.router.snapshot.paramMap.get('id'));
      }
    }
  }

  onSubmit(form: NgForm) {

    // test if form is valid in terms of security
    if (!form.valid) {
      return;
    }

    // storing the search text typed by the user
    this.search(form.value.searchText);

    form.reset();
  }

  private search(searchText) {
    // Observable which is going to wait for the service
    // to return something from the API
    let searchObs: Observable<Search[]>;
    searchObs = this.searchService.search(searchText);

    searchObs.subscribe(
      resData => {
        // tslint:disable-next-line: forin
        for(const key in resData[0]) {
          this.searchs.push(resData[0][key]);
        }
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

  loadStore(storeId) {

    // Observable which is going to wait for the service
    // to return something from the API
    let storeObs: Observable<Store>;

    // Calling the method to fecth the clicked store
    storeObs = this.searchService.fetchStore(storeId);

    // Once searchService ends processing, what is int subscribe will execute
    storeObs.subscribe(
      resData => {
        // Sending the returned Store to SearchSingleComponent for it to be displayed
        // Just assigning the variable 'search' in the component is enough to load the data on the page
        this.child.search = resData;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }
}
