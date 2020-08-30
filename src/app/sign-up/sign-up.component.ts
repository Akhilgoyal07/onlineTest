import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup,  FormControl, Validators } from '@angular/forms';
import {confirmPasswordValidator} from '../confirmPasswordValidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginForm = new FormGroup({
    userName:new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.pattern(/[^0-9a-zA-Z]/), Validators.minLength(8)]),
    email:new FormControl("", [Validators.required, Validators.email]),
    firstName:new FormControl("", Validators.required),
    confirmPassword: new FormControl("",Validators.required)
  },
  {
    validators:confirmPasswordValidator('password', 'confirmPassword')
  });

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  registerEventHandler()
  {
    this.router.navigateByUrl('/login');
  }

}
