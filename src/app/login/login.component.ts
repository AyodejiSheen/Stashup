import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../services/group.service';
import { StashService } from '../services/stash.service';
import { UserService } from '../services/user.service';

interface details{
  email:String,
  password:String
} 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router, public _user:UserService, public _group:GroupService, public _stash:StashService) { }

  public logdetails:details = {
    email:"",
    password:""
  }

  public users; 
  public userId;
  public info;



  
  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("stashmoneyUser"));
  }
  

  userLogin(){ 
    this.userId = this.users.findIndex((user) => user.email == this.logdetails.email);
  
    if (this.userId >= 0) {
      if(this.users[this.userId].password != this.logdetails.password){
        //if password is wrong
          this.info = "Incorrect Password"
          document.getElementById('info').style.color='magenta';
            }else{                    
            //if User exists
              this.info = "Match found! preparing your dashboard"
              document.getElementById('info').style.color='white';
              //make user id available globally
              this._user.userId = this.userId;
              //navigate to dashboard
              setTimeout(() => {
                  this.router.navigate(['/loading'])
              }, 1000)
              setTimeout(() => {
              this._user.clearLogin(this.logdetails)
              this.router.navigate(['/dashboard']);
              }, 3000);
              this._group.grouplist.next(JSON.parse(localStorage.getItem("stashGroup")));
              this._stash.stashlist.next(JSON.parse(localStorage.getItem("stashes")));
              }
      } else {
        //if user is not registered
          this.info = "Match not found!"
          document.getElementById('info').style.color='magenta';
      }
  }





















}
