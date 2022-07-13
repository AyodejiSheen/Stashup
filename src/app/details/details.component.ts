import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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
