import { Component, OnInit } from '@angular/core';
import { Users } from '../login/users';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Http, Headers, RequestOptions } from '@angular/http';
import { CreateUserService } from '../createuser/createuser-service.service';
import { SampleUrlService } from './sample-url.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

   
model = new Users();
users =[];
userId:number;
user:number;
fetchedHtml;
 constructor(private createUserService:CreateUserService , private router : Router, private http:Http ,private sampleUrlService:SampleUrlService) {
     
  
 }
  ngOnInit() {
    this.getUserResources();
  }
  goToLink($event){
    console.log("vQV"+$event.target.value);
    this.sampleUrlService.giveUrl($event.target.value);
     this.sampleUrlService.giveVideo("read");
    this.router.navigateByUrl("nav/link"); 
    // window.open('https://www.w3schools.com/', '_self');

}
  goToUrl($event){
    console.log("vQV"+$event.target.value);
    this.sampleUrlService.giveUrl($event.target.value);
     this.sampleUrlService.giveVideo("video");
    this.router.navigateByUrl("nav/link"); 
    // window.open('https://www.w3schools.com/', '_self');

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

}