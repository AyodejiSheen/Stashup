import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-withdrawfund',
  templateUrl: './withdrawfund.component.html',
  styleUrls: ['./withdrawfund.component.css']
})
export class WithdrawfundComponent implements OnInit {

  public withdrawForm:FormGroup;
  public users;
  public userId;
  public info; 

  constructor(public _user:UserService, public form:FormBuilder ) {
      this.withdrawForm = this.form.group({
        email:['', [Validators.required]],
        amount:['', [Validators.required]],
        password:['', [Validators.required]],
        date:new Date(),
        type:"debit",
      })
  }


  withdrawFund(){
    if (this.withdrawForm.valid){
      let values = this.withdrawForm.value;
        if (values.email != this.users[this.userId].email){
          this.info = "Invalid Email Address"
        }else if (values.password != this.users[this.userId].password){
          this.info = "Invalid Password" 
        }else if (values.amount < 1000){
          this.info = "You cannot withdraw less than 1000" 
        }else if(values.amount > this.users[this.userId].balance ) {
          this.info = "Insufficent Fund to process transaction"
        }
        else{
          this._user.withdrawFund(values)
          this.info = "Transaction Successfully. " + values.amount + " withdrawn from account "
        }
    }else{
      console.log("INVALID")
    }
  }





  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("stashmoneyUser"));
    this.userId = this._user.userId;
  }

}
