import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

import graficas from '../../../assets/files/grafica-video50.json';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: ['./graficas1.component.css']
})
export class Graficas1Component implements OnInit {


  public doughnutChartType: ChartType = 'doughnut';

  graficos: any = graficas;

  constructor() { }

  ngOnInit() {
  }

}
