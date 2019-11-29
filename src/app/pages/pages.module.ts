import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './progress/progress.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../pages/shared.module';
import { PagesRouter } from './pages.routes';

@NgModule({
    declarations: [
        DasboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [
        DasboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        SharedModule,
        PagesRouter
    ]
})
export class PagesModule {}
