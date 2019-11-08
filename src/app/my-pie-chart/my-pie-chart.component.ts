import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { NgbdModalBasic } from '../modal-basic/modal-basic.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

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
