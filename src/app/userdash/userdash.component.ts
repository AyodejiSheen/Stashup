import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { StashService } from '../services/stash.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(public _user:UserService, public _group:GroupService, public _stash:StashService) { }

  public group;
  public users;
  public userId = this._user.userId; 
  public stashs;

  public transac;
  public debit;
  public credit;


  ngOnInit(): void {
    this._group.grouplist.next(JSON.parse(localStorage.getItem("stashGroup")));
    this._stash.stashlist.next(JSON.parse(localStorage.getItem("stashes")));
    this._group.grouplist.subscribe(data => {
      this.group = data;
    })
    this._user.userslist.subscribe(data => {
      this.users = data;
    })
    this._stash.stashlist.subscribe(data => {
      this.stashs = data;
    })

    console.log(this.userId)

    this.transac = this.users[this.userId].transactions;
    this.debit = this.transac.filter((trans, i) => trans.type == "debit");
    this.credit = this.transac.filter((trans, i) => trans.type == "credit");


  }





}
