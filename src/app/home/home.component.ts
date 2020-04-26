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
user:any;
 constructor(private createUserService:CreateUserService , private router : Router) { }

  ngOnInit() {
    this.getUserResources();
  }
getUserResources(){
 this.user =(sessionStorage.getItem('user')) ;

this.userId=this.user.userId;
 alert(this.this.userId);
  this.createUserService.getUser(this.userId).subscribe((data: any[])=>{
      console.log(data);
      this.users = (data);
     
    })  
}
}