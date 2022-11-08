import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Photographer} from "../../../models/photographer/photographer";
import {User} from "../../../models/user/user";
import {UserServiceService} from "../../../services/user-service.service";
import {UserRole} from "../../../models/user/user-role";
import {PhotographerServiceService} from "../../../services/photographer-service.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // user : User
  photographer : Photographer
  // isPhotographer : boolean

  constructor(
    // private userService : UserServiceService,
    private photoService : PhotographerServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.photoService.getPhotographerById(params['id']).subscribe(
        (response: Photographer) => {
          this.photographer = response;
        });

      //Danh cho viec mo rong neu chia man hinh cho admin
      // this.isPhotographer = this.photographer?.userRole == UserRole.Photographer;

    });

  }

}
