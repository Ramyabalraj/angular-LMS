import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './createuser-service.service';
import { Users } from '../login/users';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {



model = new Users();
users =[];
  constructor(private createUserService:CreateUserService ) { }

ngOnInit() {
this.get();
  
  }
  get(){
      this.createUserService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
     
    })  
  }
create(){
  if(!this.model.userId){
//alert(JSON.stringify(this.model));
this.createUserService.createUser(this.model).subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
      this.get();
  
    })
  }
 else{ 
  
      this.createUserService.updateUser(this.model.userId,this.model).subscribe((data: any[])=>{
      console.log("hcgc"+data);
      this.users = data;
       this.get();
  
    })
    } 
}
edit(id){
 this.createUserService.getUser(id).subscribe((data: any[])=>{
    this.id=id;
      console.log(data);
      this.model = data;
      
  
    })  
}
 
  
  delete(id){
    this.createUserService.deleteUser(id).subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
  
    })
  }
}