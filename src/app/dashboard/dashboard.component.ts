import { Component, OnInit } from '@angular/core';
import { StashService } from '../services/stash.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _user:UserService, public _stash:StashService) { }

  public users;
  public userId; 

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("stashmoneyUser"));
    this.userId = this._user.userId;
  }



}
