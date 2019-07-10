import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { TotalPackaging } from './total-packaging.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalPackaging;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Send Http request
    this.fetchTotalPackaging(10);
  }

  private fetchTotalPackaging(idPerson) {
    this.http
      .get<{[key: string]: TotalPackaging }>('http://greenfill.deniscalixto.wmdd.ca/person/' + idPerson + '/totalpackaging')
      .subscribe(totalItem => {
        this.totalPackaging = totalItem;
      });
  }}
