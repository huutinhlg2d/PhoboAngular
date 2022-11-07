import { Component, OnInit } from '@angular/core';
import {AuthHelper} from "../../../services/helpers/auth-helper.service";
import {Router} from "@angular/router";
import {User} from "../../../models/user/user";
import { Observable } from 'rxjs';
import { ResourceHepler } from 'src/app/services/helpers/resource-hepler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  isAuthenticationChanged = this.authHelper.isAuthenticationChanged() as Observable<boolean>;
  isAuthenticated: boolean;

  constructor(
    private authHelper : AuthHelper,
    private resource: ResourceHepler,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.user = this.authHelper.getUser();
    this.isAuthenticated = this.authHelper.isAuthenticated();
    this.isAuthenticationChanged.subscribe(
      (status) => this.isAuthenticated = status
    );
  }

  logOut() {
    this.authHelper.logout();
    this.router.navigateByUrl("/home");
  }

  
}
