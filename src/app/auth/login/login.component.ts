import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { CustomValidator } from '../../locales/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted:boolean = false;
  currentUser: any;

  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm =()=>{
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, CustomValidator.emailValidator])),
      password: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigateByUrl('dashboard');
  }

}
