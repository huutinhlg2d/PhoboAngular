import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user/user";
import {AuthHelper} from "../../../services/helpers/auth-helper.service";
import {UserRole} from "../../../models/user/user-role";
import {PhotographerServiceService} from "../../../services/photographer-service.service";
import {Photographer} from "../../../models/photographer/photographer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  photographers: Photographer[];
  constructor(
    private authHelper : AuthHelper,
    private photographerService : PhotographerServiceService
  ) { }

  ngOnInit(): void {
    this.user = this.authHelper.getUser();
    this.photographerService.getAllPhotographer().subscribe(
      (response: Photographer[]) => {
      this.photographers = response;
    });
    alert(this.photographers.length);
  }

}
