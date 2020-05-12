import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any = {};

  constructor(public authService:AuthService, 
              private alertify: AlertifyService, 
              private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success("Logged in Successfully");
    }, error =>{
      this.alertify.error("Login Failed ");
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn(){

  return this.authService.loggedIn();
   // return !!token;// shorthand of 'if else' if token available return true, or if not false
  }

  logout(){
    localStorage.removeItem("token");
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}