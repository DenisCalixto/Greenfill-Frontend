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

  public userProgressChartLabels = ['Feb 2019','Mar 2019','Apr 2019','May 2019','Jun 2019','Jul 2019','Aug 2019'];
  public userProgressChartType = 'line';
  public userProgressChartLegend = false;
  public userProgressChartData = [
    {data: [2, 30, 70, 120, 150, 210, 180], label: 'Packaging',
    pointRadius: 7, pointBorderColor: '#43C1B366', pointBorderWidth: 12,
    pointBackgroundColor: '#43C1B3'}
  ];

  public userProgressChartColors: Color[] = [
    {
      borderColor: '#43C1B3',
      backgroundColor: 'transparent',
    },
  ];

  public userProgressChartOptions: (ChartOptions) = {
    responsive: true,
    // aspectRatio: 5,
    maintainAspectRatio: false,
    layout: {
      padding: {
          left: 0,
          right: 30,
          top: 30,
          bottom: 0
        }
    },
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
          color: ['#D7F7F3', 'transparent', 'transparent', '#D7F7F3', 'transparent', 'transparent', '#D7F7F3']
        },
      }]
    }
  };

  ngOnInit() {
  }

}
