import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/About';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: About = {
    name: '',
    role: '',
    info: '',
    image: ''
  }
  webView: boolean = true;

  abouts: About[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.abouts = this.aboutService.getAbouts();
    
    if (window.innerWidth < 750) {
      return this.webView = false;
    }    
  }
}
