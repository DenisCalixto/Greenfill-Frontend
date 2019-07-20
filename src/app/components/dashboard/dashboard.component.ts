import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Leader } from '../../models/Leader';
import { TotalPackaging } from '../../models/TotalPackaging';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  leaders: Leader[] = [];

  totalPackaging: TotalPackaging;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    // Send Http request
    this.fetchTotalPackaging();
    this.fetchLeaders();
  }

  private fetchLeaders() {
    this.http
      .get<Leader[]>('https://api.greenfill.wmdd.ca/leaderboard')
      .pipe(
        map(responseData => {
          const leadersArray: Leader[] = [];
          for (const key in responseData) {
            leadersArray.push({...responseData[key]});
          }
          return leadersArray;
        })
      )
      .subscribe(resData => {
        for(const key in resData[0]) {
          this.leaders.push(resData[0][key]);
        }
      });
  }

  private fetchTotalPackaging() {
    this.http
      .get<TotalPackaging>('https://api.greenfill.wmdd.ca/person/' + this.authService.userId + '/totalpackaging')
      .subscribe(totalItem => {
        this.totalPackaging = totalItem;
      });
  }

}
