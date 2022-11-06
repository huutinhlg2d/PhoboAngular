import { Location } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

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
