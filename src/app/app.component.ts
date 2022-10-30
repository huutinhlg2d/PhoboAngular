import {Component, OnInit} from '@angular/core';
import {AuthHelper} from "./services/helpers/auth-helper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PhoBoUI';
  isLogged: boolean;

  constructor(
    private authHelper: AuthHelper
  ) {
  }

  ngOnInit(): void {
    this.isLogged = this.authHelper.isAuthenticated();
  }
}
