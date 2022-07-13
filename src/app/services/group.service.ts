import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(public _user:UserService, public router:Router) { }
  
  public users = this._user.userslist;
  public userId = this._user.userId;

  public grouplist = new BehaviorSubject([]);

  public newgroupCode;







  
//   //to create group 
//   public createGroup(values){
//     let logId = this._user.userId //login Id
//     if (localStorage.getItem("stashGroup") != null){
//       this.group = JSON.parse(localStorage.stashGroup);
//       let str = values.groupname.slice(0, 3);
//       let code = Math.floor((Math.random() * 8999999999)+1) + str.toUpperCase();
//       values.groupcode = code;


//       values.groupUsers.push({
//         firstname:this.users[logId].firstname,
//         lastname:this.users[logId].lastname,
//         stash:0,
//         email:this.users[logId].email,
//         member:values.member
//       });

      // this.newgroupCode.next(code);
      // this.group.push(values);
      // this.groups.next(this.group);
      // this.groups.subscribe(data => {
      //   let details = data;
      //   localStorage.setItem('stashGroup', JSON.stringify(details))
      // });

//       //adding group to users array
//       this.usersgroup(values);

      // this.users[logId].stashgroup += 1;
      // localStorage.setItem('stashUser', JSON.stringify(this.users));
      // this.router.navigate(['/dashboard/processing'])
      // setTimeout(() => {
      //   this.router.navigate(['/dashboard/group-code'])
      // }, 7000);
//     }else{
//       let str = values.groupname.slice(0, 3);
//       let code = Math.floor((Math.random() * 899999999)+1) + str.toUpperCase();
//       values.groupcode = code;

//       //adding group creator to the group
//       values.groupUsers.push({
//         firstname:this.users[logId].firstname,
//         lastname:this.users[logId].lastname,
//         stash:0,
//         email:this.users[logId].email,
//       });

//       this.newgroupCode.next(code);
//       this.group = [];
//       this.group.push(values);
//       this.groups.next(this.group);
//       this.groups.subscribe(data => {
//         let details = data;
//         localStorage.setItem('stashGroup', JSON.stringify(details));
//       });

//       //adding group to users array
//       this.usersgroup(values);

//       this.users[logId].stashgroup += 1;
      // localStorage.setItem('stashUser', JSON.stringify(this.users));
      // this.router.navigate(['/dashboard/processing'])
      // setTimeout(() => {
      //   this.router.navigate(['/dashboard/group-code'])
      // }, 7000);
//     }

//   }


// //putting group details in users array
//   public usersgroup(values){
//     let logId = this._user.userId //login Id
//       this.users[logId].groupJoined.push({
//         groupname:values.groupname,
//         groupcode:values.groupcode,
//         stash:0,
//         member: values.member,
//         type:"admin",
//       })
//   }


//   //increase member number


//   public joinGroup(values){

//     let logId = this._user.userId //login Id
    
//     this.groupslist[values].member += 1

//     //to increase group member for just join user
//     this.groupslist[values].groupUsers.push({
//       firstname:this.users[logId].firstname,
//       lastname:this.users[logId].lastname,
//       stash:0,
//       email:this.users[logId].email
//     });

//     // this.groupslist[values].groupUsers[0].member = this.groupslist[values].member
//     // to increase group member for creator
//     let creatorId = this.users[this.groupslist[values].adminId].groupJoined.findIndex((grpjd) => grpjd.groupcode == this.groupslist[values].groupcode);
    
//     this.users[this.groupslist[values].adminId].groupJoined[creatorId].member += 1;

 
//     // adding group to users array
//     this.users[logId].groupJoined.push({
//       groupname:this.groupslist[values].groupname,
//       groupcode:this.groupslist[values].groupcode,
//       stash:0,
//       member: this.groupslist[values].member,
//       type:"member",
//     })

  

    
//     localStorage.setItem('stashGroup', JSON.stringify(this.groupslist));
//     this.users[logId].stashgroup += 1;
//     localStorage.setItem('stashUser', JSON.stringify(this.users));
//     this.router.navigate(['/dashboard/processing'])
//     setTimeout(() => {
//       this.router.navigate(['/dashboard/joined'])
//     }, 7000);
//   }


























}
