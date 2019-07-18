import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-landing',
  templateUrl: './map-landing.component.html',
  styleUrls: ['./map-landing.component.scss']
})
export class MapLandingComponent {

  inputValue = '';
  constructor(private router: Router) { }

  onTextSearched() {
    this.router.navigate(['/search'], {state: {data: {searchedText: this.inputValue}}});
  }

}
