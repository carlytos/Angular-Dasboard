import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1 = 50;
  progreso2 = 50;

  constructor() { }

  ngOnInit() {
  }

  // actualizar(event: number) {
  //   console.log('Evento: ', event);
  // }



}
