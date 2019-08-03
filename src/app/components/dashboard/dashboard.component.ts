import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Leader } from '../../models/Leader';
import { TotalPackaging } from '../../models/TotalPackaging';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { UserProgressChartComponent } from '../user-progress-chart/user-progress-chart.component';

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

  constructor(private http: HttpClient, public authServiceDash: AuthService) {}

  // Creating a reference which will be used to access data and method from the child component
  @ViewChild(UserProgressChartComponent, { static: true } as any) child: UserProgressChartComponent;

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
    this.leaders = [];
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
        this.child.userProgressChartData = [
          {data: [2, 30, 70, 120, 150, 210, this.totalPackaging.total], label: 'Packaging',
          pointRadius: 7, pointBorderColor: '#43C1B366', pointBorderWidth: 12,
          pointBackgroundColor: '#43C1B3'}
        ];
      });
  }

  simulateRefill() {
    this.http
      .get<TotalPackaging>(`https://api.greenfill.wmdd.ca/saverefill_simulation?personId=${this.authServiceDash.personId}`)
      .subscribe((answer) => {
        this.fetchTotalPackaging();
        this.fetchLeaders();
      });
  }

}
