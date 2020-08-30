import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ageValidator} from '../ageValidatorControl';
import {dynamicAgeValidator} from '../dynamicAgeValidatorControl';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  loginForm = new FormGroup({
    userName:new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[0-9a-zA-Z]/), Validators.minLength(8)]),
    age : new FormControl("", dynamicAgeValidator(30, 50))
  });
  constructor() { }

  ngOnInit(): void {
  }

  loginEventHandler()
  {

  }
  signUpEventHandler()
  {

  }

}
