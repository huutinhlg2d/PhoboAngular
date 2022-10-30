import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/auth/login';
import { AuthService } from 'src/app/services/auth.service';
import { AuthHelper } from 'src/app/services/helpers/auth-helper.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  get email() { return this.form.get('email'); }

  get password() { return this.form.get('password'); }

  constructor(
    private formBuilder : FormBuilder,
    private authService: AuthService,
    private authHelper: AuthHelper,
    private router: Router
  )
  {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    if (this.authHelper.isAuthenticated()){
      this.authHelper.logout();
    }
  }

  onSubmit(): void {
    console.log("submit");

      this.authService.login(this.form.value).subscribe(
        reponse => {
          console.log(reponse);
          this.authHelper.setToken(reponse)
          this.router.navigateByUrl("/").then(() => window.location.reload());
        }
      )
  }

}
