import { Component, OnInit, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';



@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.css']
})
export class GraficoDonutComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet = [];
  @Input('chartType') doughnutChartType: ChartType;


  constructor() { }

  ngOnInit() {
  }

}
