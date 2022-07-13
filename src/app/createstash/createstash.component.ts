import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GroupService } from '../services/group.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-createstash',
  templateUrl: './createstash.component.html',
  styleUrls: ['./createstash.component.css']
})
export class CreatestashComponent implements OnInit {

  public groupForm:FormGroup;
  public info; 

  public groups = new BehaviorSubject([]);
  public group;

  public stashes = new BehaviorSubject([]);
  public stash;

  public lastId;

  public users;
  public userId = this._user.userId;


  constructor(public router:Router, public _user:UserService, public form:FormBuilder, public _group:GroupService) { 

    this.groupForm = this.form.group({
      groupcode:[''],
      groupname:['', [Validators.required]],
      stashamt:['', [Validators.required]],
      groupnote:['', [Validators.required]],
      stashprd:['', [Validators.required]],
      adminname:['', [Validators.required]],
      stopdate:['', [Validators.required]],
      adminId:[''],
      totalmember:[1],
      withdrawauth:true,
    })
   }


   createGroup(){
    if (this.groupForm.valid){
      let values = this.groupForm.value;
      //for group storg
      if (localStorage.getItem("stashGroup") != null){
        this.group = JSON.parse(localStorage.stashGroup);
        //creating unique groupcode
        let str = values.groupname.slice(0, 3);
        let code = Math.floor((Math.random() * 8999999999)+1) + str.toUpperCase();
        values.groupcode = code;
        values.adminId = this.users[this.userId].Id;
        //to send group code
        this._group.newgroupCode = values.groupcode;
        //to call create stash
        this.createStash(values);

        this.users[this.userId].totalgroup += 1;

        //pushing to the real group
        this.group.push(values);
        this.groups.next(this.group);
        this.groups.subscribe(data => {
          let details = data;
          localStorage.setItem('stashGroup', JSON.stringify(details))
        });

        localStorage.setItem('stashmoneyUser', JSON.stringify(this.users));
        this.router.navigate(['/dashboard/processing'])
        setTimeout(() => {
          this.router.navigate(['/dashboard/group-code'])
        }, 7000);

      }else{
        this.group=[];
       //creating unique groupcode
        let str = values.groupname.slice(0, 3);
        let code = Math.floor((Math.random() * 8999999999)+1) + str.toUpperCase();
        values.groupcode = code;
        values.adminId = this.users[this.userId].Id;
        //to send group code
        this._group.newgroupCode = values.groupcode;

        //to call create stash
        this.createStash(values);

        this.users[this.userId].totalgroup += 1;

        this.group.push(values);
        this.groups.next(this.group);
        this.groups.subscribe(data => {
          let details = data;
          localStorage.setItem('stashGroup', JSON.stringify(details))
        });

        localStorage.setItem('stashmoneyUser', JSON.stringify(this.users));

        this.router.navigate(['/dashboard/processing'])
        setTimeout(() => {
          this.router.navigate(['/dashboard/group-code'])
        }, 7000);
      }
    }else{
      console.log("INVALID")
    }
  }






      createStash(values){
           //to push to stash group
           if (localStorage.getItem("stashGroup") != null){
            this.stash = JSON.parse(localStorage.stashes);
            //to give stash a unique Id
            if (this.stash.length > 0){
              let lastIndex = this.stash.length - 1;
              console.log(lastIndex)
              this.lastId = this.stash[lastIndex].stashId + 1;
              console.log("lastIndex "+lastIndex)
              console.log("lastId "+this.lastId)
              console.log("stash.length "+this.stash.length)
            }else{
              this.lastId = 1;
            }
           
            this.stash.push({
              stashId :this.lastId,
              stashbal:0,
              stashgroup:values.groupcode,
              userId:this.users[this.userId].Id,
              stashgroupname:values.groupname,
              member:values.totalmember
            })
            this.stashes.next(this.stash);
            this.stashes.subscribe(data => {
              let details = data;
              localStorage.setItem('stashes', JSON.stringify(details))
            });

          }else{
            console.log("array is empty")
            this.stash = [];
            this.stash.push({
              stashId :1,
              stashbal:0,
              stashgroup:values.groupcode,
              userId:this.users[this.userId].Id,
              stashgroupname:values.groupname,
              member:values.totalmember
            })
            this.stashes.next(this.stash);
            this.stashes.subscribe(data => {
              let details = data;
              localStorage.setItem('stashes', JSON.stringify(details))
            });
          }
 
      }












    

    ngOnInit(): void {
      this._user.userslist.subscribe(data => {
        this.users = data;
      });
      console.log(this.users)
    }















}


