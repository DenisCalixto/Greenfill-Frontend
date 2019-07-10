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

  public canadaProgressChartLabels = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2020'];
  public canadaProgressChartType = 'line';
  public canadaProgressChartLegend = false;
  public canadaProgressChartData = [
    {data: [16, 15.5, 15, 14, 12, 11, 10, 9, 8, 6, 5], label: 'Series A',
     pointRadius: 7, pointBorderColor: 'lightgreen', pointBorderWidth: 4,
     pointBackgroundColor: 'green'}
  ];

  public canadaProgressChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'transparent',
    },
  ];

  public canadaProgressChartOptions: (ChartOptions) = {
    responsive: true,
    aspectRatio: 5,
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
          color: ['green', 'transparent', 'transparent', 'green', 'transparent', 'transparent', 'green']
        },
      }]
    }
  };

  ngOnInit() {
  }

}
