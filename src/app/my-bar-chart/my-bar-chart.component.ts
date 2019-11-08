import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { NgbdModalBasic } from '../modal-basic/modal-basic.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor( public modalService: NgbModal) { }

  ngOnInit() {
  }

  public clickEvent(e:any):void {
  if(e.active.length > 0) {
  console.log("Index", e.active[0]._index);
  console.log("Data" , e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index]);
  console.log("Label" , e.active[0]._chart.config.data.labels[e.active[0]._index]);
  var data = {
    value: e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index],
    label: e.active[0]._chart.config.data.labels[e.active[0]._index]
    }
  this.openModal(data);

  }
  }

  openModal(data){

    const modalRef = this.modalService.open(NgbdModalBasic);
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }
}
