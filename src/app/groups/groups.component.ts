import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { StashService } from '../services/stash.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(public _user:UserService, public _group:GroupService, public _stash:StashService) { }

  public users;
  public userId = this._user.userId;

  public groups;
  public admgroup;
  public mbgroup;
  public millsec;

  public stashs;  

  public auth:boolean = true;

  public stashInt:boolean = true;

  
  



  ngOnInit(): void {
    this._group.grouplist.next(JSON.parse(localStorage.getItem("stashGroup")));
    this._stash.stashlist.next(JSON.parse(localStorage.getItem("stashes")));
    
    this._group.grouplist.subscribe(data => {
      this.groups = data;
    })
    

    this._user.userslist.subscribe(data => {
      this.users = data;
    })
    this._stash.stashlist.subscribe(data => {
      this.stashs = data;
    })
    
    //to filter the admin group
    this.admgroup = this.groups.filter((group) => group.adminId == this.users[this.userId].Id)
    
    //to filter the member group
    this.mbgroup = this.stashs.filter((stash) => stash.userId == this.users[this.userId].Id);
    
  }
  



  
  
  public startStash(value, index){

    //to filter the group with the code in stash with the user in stash table
    let useringpcode = this.stashs.filter((stash) => stash.stashgroup == value);

    //to find the index of the group with the code in group table
    let gpinwthcode = this.groups.findIndex((group) => group.groupcode == value);
    let amount = this.groups[gpinwthcode].stashamt //to get the stashamt of the group


        //to get the users id in the stash table
    let usery = useringpcode.map((user, i) => user.userId)
    console.log(usery)
    console.log(this.users)

    //to get the users with the user id above from the users table
    let usersstashtotal = this.users.filter((useyr, i) => useyr.Id == usery[i]);
    console.log(usersstashtotal)

    // to get the users with the able balance to pay stash  in the user table  
    let ableusersbalance = usersstashtotal.filter((user, i) => user.balance >= amount);

    //to get the id of those user above
    let userIdbal = ableusersbalance.map((user, i) => user.Id)

    //to get those use in the stash table
    let increasestash = useringpcode.filter((stash, i) => stash.userId == userIdbal[i]); 

    //to decrease the user balance and also increase the stash in both stash table and user table
    ableusersbalance.map((user, i) => {
      user.totalstashbal += amount;
      user.balance -= amount;
      // increasestash.map((user, i) => {
      //   user.stashbal = user.stashbal + amount;
      // })
      increasestash[i].stashbal += amount;
      user.notifications.push(amount + " has been deducted from your account for " +this.groups[gpinwthcode].groupname + " stash");
    })
    
    //to send message to users with low balance in the stash table
    let unable = usersstashtotal.filter((user, i) => user.balance < amount);
    unable.map((user, i) => {
      user.notifications.push("Insufficient fund to process your stash in the group name " + this.groups[gpinwthcode].groupname);
    })

            //saving details
            this._stash.stashlist.next(this.stashs);
            this._user.userslist.next(this.users);
            this._group.grouplist.next(this.groups);
            
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

  }




public surprise(value, index){
        //to filter the group with the code in stash with the user in stash table
        let useringpcode = this.stashs.filter((stash) => stash.stashgroup == value);

        //to find the index of the group with the code in group table
        let gpinwthcode = this.groups.findIndex((group) => group.groupcode == value);
        let amount = this.groups[gpinwthcode].stashamt //to get the stashamt of the group
        let withdrawauth = this.groups[gpinwthcode].withdrawauth
     
        //to start the set time interval function 
    
        let period = this.groups[gpinwthcode].stashprd;
        let stop = this.groups[gpinwthcode].stopdate;

        console.log(stop);

        let stoppingdate = new Date(stop);

        if (period == "Daily"){
          // this.millsec = 86400000
          this.millsec = 5000
        }else if (period == "Weekly"){
          // this.millsec = 604800000
          this.millsec = 10000
        }else{
          this.millsec = 15000
          // this.millsec = 2628002880
        }


  let temp = this;
  let t;
  (function loop(){
    var now = new Date();
    if (now.toDateString() == stoppingdate.toDateString()){
      now = new Date();
      if(withdrawauth){
        temp.withdraw(value, index, withdrawauth);
      }
    }else{
      temp.startStash(value, index);
   }
    now = new Date();
    t = setTimeout(loop, temp.millsec);
  })();
}



public withdraw(value, index, withdrawauth){

if (withdrawauth){
    //to filter the group with the code in stash with the user in stash table
    let useringpcode = this.stashs.filter((stash) => stash.stashgroup == value);

    //to find the index of the group with the code in group table
    let gpinwthcode = this.groups.findIndex((group) => group.groupcode == value);
    // let amount = this.groups[gpinwthcode].stashamt //to get the stashamt of the group


        //to get the users id in the stash table
    let usery = useringpcode.map((user, i) => user.userId)
    console.log(usery)
    console.log(this.users)

    //to get the users with the user id above from the users table
    let usersstashtotal = this.users.filter((useyr, i) => useyr.Id == usery[i]);
    console.log(usersstashtotal)

    // to get the users with the able balance to pay stash  in the user table  
    // let ableusersbalance = usersstashtotal.filter((user, i) => user.balance >= amount);

    //to get the id of those user above
    // let userIdbal = ableusersbalance.map((user, i) => user.Id)

    //to get those user in the stash table
    let increasestash = useringpcode.map((stash, i) => stash.stashbal); 

    //to decrease the user balance and also increase the stash in both stash table and user table
    usersstashtotal.map((user, i) => {
      user.balance += increasestash[i];
      user.totalstashbal -= increasestash[i]
      user.totalgroup -= 1;
      user.notifications.push("You account has been credited from " +this.groups[gpinwthcode].groupname + " stash");
    })


        //to filter the admin group
        this.admgroup = this.groups.filter((group) => group.groupcode != value)
    
        //to filter the member group
        this.mbgroup = this.stashs.filter((stash) => stash.stashgroup != value);


    let newgroup = this.groups.filter((group, i) => group.groupcode != value);

    let newstash = this.stashs.filter((stash, i) => stash.stashgroup != value);


    withdrawauth = false;
    this.groups[gpinwthcode].withdrawauth = false;

                //saving details
                this._stash.stashlist.next(newstash);
                this._user.userslist.next(this.users);
                this._group.grouplist.next(newgroup);
                
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
    


}else{
  alert("you cant make withdraw Now, until stopping date")
}

}










}
