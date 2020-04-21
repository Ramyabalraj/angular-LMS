import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Users } from '../login/users';
import { Router } from '@angular/router'
import { CreateUserService } from '../createuser/createuser-service.service';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private createUserService:CreateUserService , private router : Router) { }
registerForm: NgForm ;
users=[];
model=new Users;
conformPassword : any;
  ngOnInit() {
  }
register(){
  alert(this.model);
 if(this.conformPassword==this.model.userPassword){
      this.createUserService.createUser(this.model).subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
      if(!this.users){
      alert("Invalid!!!");
      }
      else{
      this.router.navigateByUrl("home");
      }
  
    })
 }
else{
  alert("Type in the same conform password")
}
}
}