import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 150],
        backgroundColor: ['#0075ED', '#00E0DB', '#00ED63', 'yellow'],
        hoverBackgroundColor: ['#0075ED', '#00E0DB', '#00ED63', 'yellow'],
        hoverBorderColor: ['#0075ED', '#00E0DB', '#00ED63', 'yellow'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
