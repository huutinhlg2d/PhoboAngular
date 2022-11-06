import { Location } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let stateUrl = this.route.snapshot.paramMap.get("stateUrl");
    
    if(stateUrl) {
      this.location.replaceState(stateUrl);
    }
  }

}
