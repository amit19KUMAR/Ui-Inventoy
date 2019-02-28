import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    // localStorage.setItem("loggedIn","false");
  }

  onLogout(){
    localStorage.setItem("loggedIn","false");
    window.alert("Leaving Hah..")
    this.router.navigate([""]);
  }

  onLoggedIn(){
    if(localStorage.getItem("loggedIn")==="true"){
      return true;
    }
    else{
      return false;
    }
  }

}
