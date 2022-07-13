import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GroupService } from './group.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StashService {

  constructor(public _user:UserService,  public _group:GroupService) { }

  public users = this._user.userslist;
  public userId = this._user.userId;
  public groups = this._group.grouplist;


  public stashlist = new BehaviorSubject([]);

  public initiate: boolean = false;
  

  // public removestash(value){
  //   console.log(value)
  //   let grpIndex = this.groups.findIndex((grp) => grp.groupcode == value);
  //   // let usergrp = this.users.map((user, i) => user.groupJoined);
  //   // let usergrp = this.users.map((user, i) => {
  //   //   user.groupJoined[i].groupcode == value;
  //   // });

  //   // let usergrpIndex = usergrp.findIndex((user, i) => user[i].groupcode == value);
  //   // console.log(usergrpIndex);
  //   // let stash = setInterval(function(){
  //   //   let temp  = this;
  //   //   //to increase user stash in the group table
  //   //   temp.groups[grpIndex].groupUsers.map((user, i) => user.stash += temp.groups[grpIndex].stashamt);
  //   //   //to increase users stash and stashbal in the users table

  //   //   localStorage.setItem('stashGroup', JSON.stringify(temp.groups));
  //   // }, 10000)

  //   // let stash = setInterval(function(){
  //   // let code = temp.groups[3].groupcode;
  //   // console.log (code)
  //   // console.log(temp.groups[3].groupUsers)
  //   // console.log(temp.groups[3].groupUsers[0].stash)
  //   // temp.groups[3].groupUsers.map((user, i) => user.stash += temp.groups[3].stashamt);
  //   // // console.log(allstash);
  //   //   // let stash = 20;
  //   //   // temp.groups[3].groupUsers[0].stash = stash;
  //   //   // temp.groups[3].groupUsers[1].stash = stash;

  //   // localStorage.setItem('stashGroup', JSON.stringify(temp.groups))
  //   // }, 5000)
  
  // }






  // public stash(){
  //   // var temp = this;
  //   // console.log(temp.users[temp.userId].balance)
  //   // alert("stash deducted")
  // }

  public startStash(){
    console.log(this.initiate)
    
  }


}
