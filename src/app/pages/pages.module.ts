import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './progress/progress.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../pages/shared.module';
import { PagesRouter } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonutComponent } from '../components/grafico-donut/grafico-donut.component';
import { CommonModule } from '@angular/common';




@NgModule({
    declarations: [
        DasboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonutComponent
    ],
    exports: [
        DasboardComponent,
        ProgressComponent,
        Graficas1Component,
        GraficoDonutComponent
    ],
    imports: [
        SharedModule,
        PagesRouter,
        FormsModule,
        ChartsModule,
        [CommonModule],

    ]
})
export class PagesModule {}
