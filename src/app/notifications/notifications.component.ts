import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public _user:UserService) { }

  public users;
  public userId; 

  public notifications;

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("stashmoneyUser"));
    this.userId = this._user.userId;
    this.notifications = this.users[this.userId].notifications

  }







}
