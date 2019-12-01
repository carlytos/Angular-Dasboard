import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // @Input('nombre') leyenda = 'Leyenda'; Es posible poner un alias a la variable de modo que al acceder desde el html
  // a esta propiedad se le llamara nombre

  @ViewChild('textoProgreso', {static: false}) textoProgreso: ElementRef;

  @Input() leyenda = 'Leyenda';
  @Input() progreso = 50;

  // tslint:disable-next-line: new-parens
  @Output() cambioValor: EventEmitter<number> = new EventEmitter;

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);

  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  onChanges(newValue: number) {

    // const elementHTML: any = document.getElementsByName('progreso')[0];

    if (newValue >= 100 ) {
      this.progreso = 100;
    } else if (newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elementHTML.value = this.progreso;

    this.textoProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

  }


  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;

    this.cambioValor.emit(this.progreso);

    this.textoProgreso.nativeElement.focus();
  }

}
