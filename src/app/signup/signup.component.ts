import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public userForm:FormGroup;
  public users = new BehaviorSubject([]);
  public user;
  public info

  constructor(public router:Router, public form: FormBuilder, public _user:UserService) {
      this.userForm = this.form.group({
        firstname : [''],
        middlename : [''],
        lastname : [''],
        dob:[''],
        gender:[''],
        home:[''],
        jobtitle:[''],
        income:[0],
        email:[''],
        password:[''],
        cpassword:[''],
        balance:[500],
        totalstashbal : [0],
        totalgroup:[0],
        notifications : [[]],
        transactions:[[]],
        Id:[0]
      })
   }



    ngOnInit(): void {

    }



    onSubmit(){
        let regdetails = this.userForm.value; 
        if (localStorage.getItem("stashmoneyUser") != null){
          this.user = JSON.parse(localStorage.stashmoneyUser);

          //Verify Email Address
          let emailverify = this.user.findIndex((user) => user.email == regdetails.email);
          if(emailverify >= 0){
            this.info = "Email Address has already been used"
            document.getElementById('info').style.color='red';
          }else{

            //to Give the user a unique Id
            let lastIndex = this.user.length - 1;
            let lastId = this.user[lastIndex].Id + 1;
            regdetails.Id = lastId;

            this.user.push(regdetails);

            this.users.next(this.user)
            this.users.subscribe(data => {
              let details = data;
              localStorage.setItem('stashmoneyUser', JSON.stringify(details))
            });

            this.info = "Registration Complete, You will be redirected to login in 5secs."
            document.getElementById('info').style.color='green';

            //to clear input details
            this._user.clearReg(this.userForm);

            setTimeout(() => {
              this.router.navigate(['/login'])
            }, 5000)
          }
        }else{
          this.user = [];
          //to give the user a unique Id
          regdetails.Id += 1;

          this.user.push(regdetails);
          this.users.next(this.user);
          this.users.subscribe(data =>{
            let details = data
            localStorage.setItem('stashmoneyUser', JSON.stringify(details));
          })
          
          this.info = "Registration Complete, You will be redirected to login in 5secs."
          document.getElementById('info').style.color='green';

          setTimeout(() => {
            this.router.navigate(['/login'])
        }, 5000)
        }
  }













}
