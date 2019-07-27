import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { SearchService, Search, marker } from './../../services/search.service';
import { SearchSingleComponent } from '../search-single/search-single.component';
import { Store } from 'src/app/models/Store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  lat: any;
  lng: any;

  icon = {
    url: '../../assets/ic_pin@2x.png',
    scaledSize: {
      width: 25,
      height: 34
    }
  };
  onMouseOver(infoWindow,gm){
    if(gm.lastOpen){
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }
  onMouseOut(infoWindow,gm) {
    if (gm.lastOpen) {
      gm.lastOpen = infoWindow;
      gm.lastOpen.close();
    }
  }
  constructor(private searchService: SearchService, private router: ActivatedRoute,private http: HttpClient) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;

      });
    }
  }

  // Creating a reference which will be used to access data and method from the child component
  @ViewChild(SearchSingleComponent, { static: true } as any) child: SearchSingleComponent;

  searchs: Search[] = [];
  markers: marker[] = [];
  ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBU-oePatWVKCry-dkFgUNEVNoQGYwqthk&address=';
  posts: any;
  zoom: number = 16;
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
        this.markers = [];
        for(let i=0; i< this.searchs.length; i++){

          this.posts = this.http.get(this.ROOT_URL+this.searchs[i].address
          );
          this.posts.subscribe(

            response => {
              // console.log(response);
              this.markers.push(response.results[0].geometry.location);
              // this.markers[i].name= this.searchs[i].name;
              // console.log(this.markers[i]);
            });
        }
        setTimeout(()=>{
          for(let i=0;i<this.searchs.length;i++){
            this.markers[i].name = this.searchs[i].name;

          }
        },3000);
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
