import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyScatterChartComponent } from './my-scatter-chart/my-scatter-chart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic/modal-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLineChartComponent,
    MyBarChartComponent,
    MyPieChartComponent,
    MyScatterChartComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ NgbdModalBasic ]

})
export class AppModule { }
