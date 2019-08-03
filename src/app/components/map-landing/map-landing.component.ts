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
  zoom: number = 12;

  // current position

  lat: any;
  lng: any;
  // animation: 'DROP';
  styles =
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];
  lastOpen;
  request: any;
  constructor(private http: HttpClient, private router: Router) {
    // if (navigator) {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition( pos => {
          // this.lng = +pos.coords.longitude;
          // this.lat = +pos.coords.latitude;
          this.lat = 49.225373;
          this.lng = -123.110611;
    //     });
    //   }
    // }
  }
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
  onMouseOut(infoWindow,gm){
    if(gm.lastOpen){
      gm.lastOpen = infoWindow;
      gm.lastOpen.close();
    }
  }


    // convert address to geocode


      // set marker
      getAddress(){
        // alert('1');
        this.request = this.http.get('https://api.greenfill.wmdd.ca/companies');
        this.request.subscribe(res =>{

          //  this.addresses.push();
          // console.log(res.companies);
          // setTimeout(()=>{
            this.addresses = res.companies;
          // },1000);

            // this.getPosts();
            console.log(this.addresses);

          // console.log(this.addresses[0].address);

            this.getPosts();
            // console.log(this.addresses[0].address);

            // this.testFn();


        });

      }

     getPosts(){
// ========================
    for(let i=0; i< this.addresses.length; i++){

        this.posts = this.http.get(this.ROOT_URL+this.addresses[i].address
          +this.addresses[i].city
          +this.addresses[i].province);

          this.posts.subscribe(

          response => {
            // console.log(response);
            if (response.results[0].geometry) {
            this.markers.push(response.results[0].geometry.location);
          }
            // console.log(response.results[0].geometry.location)

            //   this.markers[i].name= this.addresses[i].name;
            // this.markers[i].website= this.addresses[i].website;
            // testFn(i, response.results[0].geometry.location, this.addresses[i].name, this.addresses[i].website)
            });

          }
          setTimeout(()=>{
            for(let i=0;i<this.addresses.length;i++){
              if (this.addresses[i] && this.markers[i]) {
                this.markers[i].name = this.addresses[i].name;
                this.markers[i].website = this.addresses[i].website;
                this.markers[i].animation = 'DROP'
              }
            }
          },1000);
        }
// ========================================






  inputValue = '';


  onTextSearched() {

    this.router.navigate(['/search'], {state: {data: {searchedText: this.inputValue}}});
  }


ngOnInit(){
  this.getAddress();

}

}
interface marker {
  animation: string;
  website: string;
  name: string;
	lat: number;
	lng: number;

}
interface address{
  name: string;
  website: string;
  city: string;
  province: string;
  address: string;
}
