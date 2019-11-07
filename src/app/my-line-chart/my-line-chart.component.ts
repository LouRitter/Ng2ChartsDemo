import { Component, OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { NgbdModalBasic } from '../modal-basic/modal-basic.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(50,180,20,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor( public modalService: NgbModal) { }

  ngOnInit() {
  }

  private clickEvent(e:any):void {
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
