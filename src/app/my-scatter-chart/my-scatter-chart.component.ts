import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { NgbdModalBasic } from '../modal-basic/modal-basic.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-my-scatter-chart',
  templateUrl: './my-scatter-chart.component.html',
  styleUrls: ['./my-scatter-chart.component.css']
})
export class MyScatterChartComponent implements OnInit {

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3, r: 20 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor( public modalService: NgbModal) { }

  ngOnInit() {
  }

  public clickEvent(e:any):void {
  if(e.active.length > 0) {
  console.log("Index", e.active[0]._index);
  console.log("Data" , e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index]);
  console.log("Label" , e.active[0]._chart.config.data.labels[e.active[0]._index]);
  var data = {
    value: e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index].y,
    label: e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index].x,
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
