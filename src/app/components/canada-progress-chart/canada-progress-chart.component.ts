import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-canada-progress-chart',
  templateUrl: './canada-progress-chart.component.html',
  styleUrls: ['./canada-progress-chart.component.scss']
})
export class CanadaProgressChartComponent implements OnInit {

  constructor() { }

  // public canadaProgressChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  public canadaProgressChartLabels = ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2020'];
  public canadaProgressChartType = 'line';
  public canadaProgressChartLegend = false;
  public canadaProgressChartData = [
    {data: [480000, 460000, 440000, 428000, 423600, 394600, 370000, 351000, 371000, ], label: 'Tonnes',
     pointRadius: 7, pointBorderColor: '#43C1B366', pointBorderWidth: 12,
     pointBackgroundColor: '#43C1B3'}
  ];

  public canadaProgressChartColors: Color[] = [
    {
      borderColor: '#43C1B3',
      backgroundColor: 'transparent',
    },
  ];

  public canadaProgressChartOptions: (ChartOptions) = {
    responsive: true,
    // aspectRatio: 5,
    maintainAspectRatio: false,
    layout: {
      padding: {
          left: 0,
          right: 0,
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
          display: false
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
