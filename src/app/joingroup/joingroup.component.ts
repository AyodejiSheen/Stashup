import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../services/group.service';
import { StashService } from '../services/stash.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-joingroup',
  templateUrl: './joingroup.component.html',
  styleUrls: ['./joingroup.component.css']
})
export class JoingroupComponent implements OnInit {

  constructor(public router:Router, public _user:UserService, public _group:GroupService, public _stash:StashService) { }

  public users;
  public userId = this._user.userId;
  
  
  public group; 
  public stashs;

  public joinuser;


  public info = "";
  public inputcode;
  public verifycode;
  public grps;

  public auth: boolean = false;


  onSubmit(){
    this.verifycode = this.group.findIndex((grp) => grp.groupcode == this.inputcode);
    if (this.verifycode >= 0){
      this.auth = true;
      this.grps = this.group[this.verifycode];
    }else{
      this.info="Invalid group Code";
    }
  }

  onJoin(verifycode){
    let verfiyuser = this.stashs.findIndex((stash) => this.users[this.userId].Id == stash.userId && stash.stashgroup == this.inputcode);
        if(verfiyuser >= 0){
          this.info = "You have Already Joined the Group";
        }else{
          //to add new user to group
          // to Give the user a unique stash Id           
          let lastIndex = this.stashs.length - 1;         
          let lastId = this.stashs[lastIndex].stashId + 1;         
          
          this.group[this.verifycode].totalmember += 1;
          
        this.stashs.push({
          stashId:lastId,
          stashbal:0,
          stashgroup:this.group[this.verifycode].groupcode,
          userId:this.users[this.userId].Id,
          stashgroupname:this.group[this.verifycode].groupname,
          member: this.stashs[lastIndex].member
        })

        this.users[this.userId].totalgroup += 1;
      

        //saving details
        this._stash.stashlist.next(this.stashs);
        this._user.userslist.next(this.users);
        this._group.grouplist.next(this.group);
        
        this._user.userslist.subscribe(data =>{
          let details = data
          localStorage.setItem('stashmoneyUser', JSON.stringify(details));
        })

        this._stash.stashlist.subscribe(data =>{
          let details = data
          localStorage.setItem('stashes', JSON.stringify(details));
        })

        this._group.grouplist.subscribe(data =>{
          let details = data
          localStorage.setItem('stashGroup', JSON.stringify(details));
        })
        
        this.router.navigate(['/dashboard/processing'])

        let allStash = JSON.parse(localStorage.getItem("stashes"));
          let recentstash = allStash.filter((stash, i) => stash.stashgroup == this.inputcode)
          recentstash.map((recent, i) => recent.member += 1);
          console.log(recentstash)
  
          this._stash.stashlist.next(allStash);
  
          this._stash.stashlist.subscribe(data =>{
            let details = data
            localStorage.setItem('stashes', JSON.stringify(details));
          })
        

        setTimeout(() => {
          this.router.navigate(['/dashboard/joined'])
      }, 5000)
      }
  }




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
  }






















  
}
