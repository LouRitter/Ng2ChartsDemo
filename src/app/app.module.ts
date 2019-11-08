import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyScatterChartComponent } from './my-scatter-chart/my-scatter-chart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic/modal-basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'line', component:  MyLineChartComponent, data: { state: 'line', left:'scatter', right:'pie'} },
  { path: 'bar',      component: MyBarChartComponent,  data: { state: 'bar', left:'pie', right:'scatter'} },
  {
    path: 'pie',
    component: MyPieChartComponent,
    data: { state: 'pie', left:'line', right:'bar' }
  },
  {
    path: 'scatter',
    component: MyScatterChartComponent,
    data: { state: 'scatter', left:'bar', right:'line' }
  },{ path: '**', redirectTo: '/line', pathMatch: 'full' },
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }

       // <-- debugging purposes only
    ),
    BrowserModule,
    ChartsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ NgbdModalBasic ]

})
export class AppModule { }
