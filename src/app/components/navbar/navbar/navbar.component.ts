import { Component, OnInit } from '@angular/core';
import {AuthHelper} from "../../../services/helpers/auth-helper.service";
import {Router} from "@angular/router";
import {User} from "../../../models/user/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(
    private authHelper : AuthHelper,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.user = this.authHelper.getUser();
  }

  logOut() {
    this.authHelper.logout();
    this.router.navigateByUrl("/").then(() => window.location.reload());
  }
}
