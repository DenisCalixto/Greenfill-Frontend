import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-user-progress-chart',
  templateUrl: './user-progress-chart.component.html',
  styleUrls: ['./user-progress-chart.component.scss']
})
export class UserProgressChartComponent implements OnInit {

  constructor() { }

  public userProgressChartLabels = ['Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009'];
  public userProgressChartType = 'line';
  public userProgressChartLegend = false;
  public userProgressChartData = [
    {data: [2, 30, 70, 120, 150, 210, 180, 300], label: 'Series A',
     pointRadius: 7, pointBorderColor: 'lightgreen', pointBorderWidth: 4,
     pointBackgroundColor: 'green'}
  ];

  public userProgressChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'transparent',
    },
  ];

  public userProgressChartOptions: (ChartOptions) = {
    responsive: true,
    // aspectRatio: 5,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Month'
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          display: true
        },
        gridLines: {
          drawBorder: false,
          color: ['green', 'transparent', 'transparent', 'green', 'transparent', 'transparent', 'green']
        },
      }]
    }
  };

  ngOnInit() {
  }

}
