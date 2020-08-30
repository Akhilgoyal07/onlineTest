import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup,  FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName:new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.pattern(/[^0-9a-zA-Z]/), Validators.minLength(8)])
  })

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  signUpEventHandler()
  {
    this.router.navigateByUrl('/signup');
  }

  loginEventHandler()
  {
    this.router.navigateByUrl('/start');
  }

}
