import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Info } from '../../models/Info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  info: Info = {
    id: null,
    image: '',
    cardImage: '',
    text: ''
  }
  infos: Info[];
  showCard: any = {};

  constructor (private infoService: InfoService) { }
  
  ngOnInit() {
    this.infos = this.infoService.getInfos();
  }
}
