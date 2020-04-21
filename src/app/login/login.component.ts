import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-service.service';
import { Users } from './users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

model = new Users();
users =[];
  constructor(private loginService:LoginService, private router : Router ) { }

  ngOnInit() {
    
  }

login(){
  alert(JSON.stringify(this.model));
  this.loginService.loginUser(this.model).subscribe((data: any[])=>{
      console.log("login details"+data);
      this.users = data;
      if(!this.users){
      alert("Invalid!!!");
      }
      else{
 this.router.navigateByUrl("home");
      }
      
    })  
}
 

 register()
 {
    this.router.navigateByUrl("register");
 }
}