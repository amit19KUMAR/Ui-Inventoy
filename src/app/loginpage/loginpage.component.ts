import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { ResponceEntity } from '../responseEntity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  ngOnInit() {
    localStorage.setItem("loggedIn","false");
  }
  user:User = new User;
  userRole: string;

  resopnseEntity:ResponceEntity


  constructor(private login:LoginService,private router:Router){}

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  onLogin(){
    this.user.email = this.loginForm.controls['email'].value;
    this.user.userPassword = this.loginForm.controls['password'].value;
    console.log(this.user);
    if(this.user.email==="" || this.user.userPassword===""){
      window.alert("Fill the Necessary Fields First");
    }
    else{
      this.login.forLogin(this.user).subscribe(
        data => {
            this.resopnseEntity = data;
            if(this.resopnseEntity.error === "false"){
              localStorage.setItem("loggedIn","true");
              localStorage.setItem("userId",JSON.stringify(this.resopnseEntity.body));
              this.router.navigate(['home']);
            } 
            else{
              window.alert(this.resopnseEntity.message)
            }
        }
      );
  
    }
   
  }
}
