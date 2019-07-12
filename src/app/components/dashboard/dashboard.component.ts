import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { TotalPackaging } from '../../models/TotalPackaging';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalPackaging: TotalPackaging;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    // Send Http request
    this.fetchTotalPackaging();
  }

  private fetchTotalPackaging() {
    this.http
      .get<TotalPackaging>('http://greenfill.deniscalixto.wmdd.ca/person/' + this.authService.userId + '/totalpackaging')
      .subscribe(totalItem => {
        this.totalPackaging = totalItem;
      });
  }

}
