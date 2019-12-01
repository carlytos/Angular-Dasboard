import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';

import graficas from '../../../assets/files/grafica-video50.json';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: ['./graficas1.component.css']
})
export class Graficas1Component implements OnInit {


  graficos: any = graficas;

  constructor() { }

  ngOnInit() {
  }

}
