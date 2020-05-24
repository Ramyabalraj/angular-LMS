import { Component, OnInit } from '@angular/core';
import { Users } from '../login/users';
import { Router } from '@angular/router'
import { CreateUserService } from '../createuser/createuser-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

model = new Users();
users =[];
userId:number;
user:number;
 constructor(private createUserService:CreateUserService , private router : Router) { }

  ngOnInit() {
    this.getUserResources();
  }
getUserResources(){
 this.user =(sessionStorage.getItem('user')) ;
console.log("ahvhev"+this.user);
//this.userId=this.user.userId;

  this.createUserService.getUser(this.user).subscribe((data: any[])=>{
     // console.log("hiii"+JSON.stringify(data));
      this.users.push(data);
     
    })  
}
getRes(){
 this.router.navigateByUrl("home/resources"); 
}
sample(){
   this.router.navigateByUrl("sample"); 
}
}