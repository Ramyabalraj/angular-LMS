import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }
getRes(){
 this.router.navigateByUrl("nav/resources"); 
}
getHome(){
  this.router.navigateByUrl("nav"); 
}
getView(){
  this.router.navigateByUrl("nav/view"); 
}
}