import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _user:UserService) { }

  public users;
  public userId = this._user.userId; 

  ngOnInit(): void {
    this._user.userslist.subscribe(data => {
      this.users = data;
    });
    console.log(this.users)
  }

}
