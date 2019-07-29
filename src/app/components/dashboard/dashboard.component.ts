import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Leader } from '../../models/Leader';
import { TotalPackaging } from '../../models/TotalPackaging';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private userSub: Subscription;
  isAuthenticated = false;
  leaders: Leader[] = [];
  userName: string = null;
  totalPackaging: TotalPackaging;

  constructor(private http: HttpClient, protected authServiceDash: AuthService) {}

  ngOnInit() {
    // NOT WORKING
    this.userSub = this.authServiceDash.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      this.userName = this.authServiceDash.name;
    });
    // NOT WORKING

    this.fetchTotalPackaging();
    this.fetchLeaders();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
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
      .get<TotalPackaging>('https://api.greenfill.wmdd.ca/person/' + this.authServiceDash.userId + '/totalpackaging')
      .subscribe(totalItem => {
        this.totalPackaging = totalItem;
      });
  }

}
