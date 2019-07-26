import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map-landing',
  templateUrl: './map-landing.component.html',
  styleUrls: ['./map-landing.component.scss']
})
export class MapLandingComponent implements OnInit {
  addresses: address[] = [];
  markers: marker[] = [];
  ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBU-oePatWVKCry-dkFgUNEVNoQGYwqthk&address=';

  posts: any;
  zoom: number = 16;

  // current position
  // lat: any;
  // lng: any;
  lat: any = 49.2246751;
  lng: any = -123.1122661;

  lastOpen;
  request: any;
  constructor(private http: HttpClient, private router: Router) {
    if (navigator) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( pos => {
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
        });
      }
    }
  }
  icon = {
    url: '../../assets/ic_pin@2x.png',
    scaledSize: {
      width: 25,
      height: 34
    }
  };

  onMouseOver(infoWindow, gm) {
    if (gm.lastOpen) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  onMouseOut(infoWindow, gm) {
    if (gm.lastOpen) {
      gm.lastOpen = infoWindow;
      gm.lastOpen.close();
    }
  }

  // convert address to geocode

  // set marker
  getAddress() {
    this.request = this.http.get('https://api.greenfill.wmdd.ca/companies');
    this.request.subscribe(res => {
      //  this.addresses.push();
      // console.log(res.companies);
      this.addresses = res.companies;
      // console.log(this.addresses[0].address);
      this.getPosts();
    });
  }

  getPosts() {
  for (let i = 0; i <= this.addresses.length; i++) {
      this.posts = this.http.get(this.ROOT_URL + this.addresses[i].address
        + this.addresses[i].city
        + this.addresses[i].province);
      this.posts.subscribe(

        response => {
          // console.log(response);
          this.markers.push(response.results[0].geometry.location);

          this.markers[i].name = this.addresses[i].name;
          this.markers[i].website = this.addresses[i].website;
          // console.log(this.markers[0]);
        });

    }
  }

  inputValue = '';

  onTextSearched() {
    this.router.navigate(['/search'], {state: {data: {searchedText: this.inputValue}}});
  }

  ngOnInit() {
    this.getAddress();
  }

}

interface marker {
  website: string;
  name: string;
  lat: number;
  lng: number;

}
interface address {
  name: string;
  website: string;
  city: string;
  province: string;
  address: string;
}
