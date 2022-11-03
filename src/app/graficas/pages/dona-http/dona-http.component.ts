import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: ['#0075ED', '#00E0DB', '#00ED63', 'yellow'],
        hoverBackgroundColor: ['#0075ED', '#00E0DB', '#00ED63', 'yellow'],
        hoverBorderColor: ['#0075ED', '#00E0DB', '#00ED63', 'yellow'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private gs: GraficasService) {}

  ngOnInit(): void {
    this.gs.getUsuariosRedesSocilaes().subscribe((data) => {
      console.log(data);
      const labels = Object.keys(data);
      const values = Object.values(data);

      this.doughnutChartLabels = labels;
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets[0].data = values;
    });
  }
}
