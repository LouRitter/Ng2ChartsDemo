import { Component , OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router, RouterOutlet, ActivatedRoute, RoutesRecognized } from '@angular/router';

import{routerTransition
} from "./animations"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  routerTransition
  // animation triggers go here
]
})
export class AppComponent implements OnInit{

  constructor(private router: Router, route: ActivatedRoute) { }
  private routeData;


  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild.data;
      }
    });
  }

  title = 'app';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

myswipeLeft(outlet){

  this.router.navigate([this.routeData.right]);
}
myswipeRight(outlet){
  this.router.navigate([this.routeData.left]);
}
}
