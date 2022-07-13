import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GroupService } from './group.service';
import { StashService } from './stash.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(  public router:Router) { }

  // public regdetails = [];
  // public users = new BehaviorSubject([]);

  public userId;
  public userslist =  new BehaviorSubject([]);
  

  public clearReg(userForm){
    userForm.controls['firstname'].setValue("");
    userForm.controls['lastname'].setValue("");
    userForm.controls['middlename'].setValue("");
    userForm.controls['dob'].setValue("");
    userForm.controls['jobtitle'].setValue("");
    userForm.controls['home'].setValue("");
    userForm.controls['password'].setValue("");
    userForm.controls['cpassword'].setValue("");
    userForm.controls['income'].setValue("");
    userForm.controls['gender'].setValue("");
  }

  public clearLogin(logdetails){
    logdetails.email = "";
    logdetails.password = "";
    console.log(this.userId)
    this.userslist.next(JSON.parse(localStorage.getItem("stashmoneyUser")));
    this.userslist.subscribe( data => {
      let details = data;
      console.log(details)
    }
    )
  }
  




// //registration process
//   public regUsers(values){
//     if (localStorage.getItem("stashmoneyUser") != null){
//       this.regdetails = JSON.parse(localStorage.stashUser);
//       let emailverify = this.regdetails.findIndex(
//         (user) => user.email == values.email
//       );
//       console.log(emailverify);
//       if (emailverify >= 0) {
//       alert("Email Address has already been used!");
//       }else{
//       this.regdetails.push(values);
//       this.users.next(this.regdetails);
//       this.users.subscribe(data => {
//         let details = data;
//         localStorage.setItem('stashmoneyUser', JSON.stringify(details));
//       })
//       alert("user Added");
//       setTimeout(() => {
//         this.router.navigate(['/loading'])
//         }, 2000)
//         setTimeout(() => {          
//         this.router.navigate(['/login']);
//         }, 7000);
//     }

//     }else{
//       this.regdetails = [];
//       this.regdetails.push(values);
//       this.users.next(this.regdetails);
//       this.users.subscribe(data => {
//         let details = data;

//         localStorage.setItem('stashmoneyUser', JSON.stringify(details));
//       })
      
//       alert("User Added")
//       setTimeout(() => {
//         this.router.navigate(['/loading'])
//         }, 2000)
//         setTimeout(() => {          
//         this.router.navigate(['/login']);
//         }, 7000);
//     }
// }

// // Login process  
//   public logUsers(){
  
//     // this.userId = this.userslist.findIndex((user) => user.email == values.email);
//     this.userId = 0
//     console.log(this.userId);
 
//   }

//add fund to account
  public addfund(values){
    this.userslist.subscribe( data => {
      let userslist = data;
      userslist[this.userId].balance += values.amount;
      userslist[this.userId].notifications.push("You funded your Account with " + values.amount + " on "+ values.date);

      let transDetails = {
        type:'credit',
        date: new Date().toDateString(),
        amount:values.amount,
        status:'successful',
        remark:'Fund Account'
      }

      userslist[this.userId].transactions.push(transDetails);

      localStorage.setItem('stashmoneyUser', JSON.stringify(userslist));
    })
  }

  
  
//withdraw fund from account
public withdrawFund(values){
  this.userslist.subscribe( data => {
    let userslist = data;
    userslist[this.userId].balance -= values.amount;
    userslist[this.userId].notifications.push("You withdraw " + values.amount +" from your account on "+ values.date);

    let transDetails = {
      type:'debit',
      date: new Date().toDateString(),
      amount:values.amount,
      status:'successful',
      remark:'Fund Withdraw'
    }

    userslist[this.userId].transactions.push(transDetails);

    localStorage.setItem('stashmoneyUser', JSON.stringify(userslist));
  })
}











  
}
