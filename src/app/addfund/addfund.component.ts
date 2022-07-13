import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.css']
})
export class AddfundComponent implements OnInit {

  public addfundForm:FormGroup;
  public users ;
  public userId;
  public info; 

  constructor(public _user:UserService, public form:FormBuilder ) {
      this.addfundForm = this.form.group({
        email:['', [Validators.required]],
        amount:['', [Validators.required]],
        password:['', [Validators.required]],
        date:new Date(),
        type:"credit",
      })
  }


  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("stashmoneyUser"));
    this.userId = this._user.userId;
  }

  addFund(){
    if (this.addfundForm.valid){
      let values = this.addfundForm.value;
        if (values.email != this.users[this.userId].email){
          this.info = "Invalid Email Address"
        }else if (values.password != this.users[this.userId].password){
          this.info = "Invalid Password"
        }else{
          this._user.addfund(values);
          this.info = "Transaction Successfully. " + values.amount + " added to account "
          // this.users[this.userId].balance += values.amount;
          // this.users[this.userId].transactions.push(values)
          // this.users[this.userId].notifications.push("You funded your Account with " + values.amount + " on "+ values.date);
          // localStorage.setItem('stashmoneyUser', JSON.stringify(this.users));
          this.addfundForm.controls['email'].setValue("");
          this.addfundForm.controls['amount'].setValue("");
          this.addfundForm.controls['password'].setValue("");
        }
    }else{
      console.log("INVALID")
    }
  }
  
  
  
  
  
  
  









}
