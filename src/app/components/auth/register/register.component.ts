import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private route: Router,
              private userService : UserServiceService) { }

ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      password: ['',Validators.required],
      repassword: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      avatar: ['']
    })
}

register() {
  console.log("send form");

  if (this.form.valid) {
    this.userService.register(this.form.value).subscribe(
      (data) => {
        console.log(data);

      },
      error => {
        console.log(error);

      }
    )
    this.snackBar.open("Register Successfully", "OK", {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })  }
}






}
