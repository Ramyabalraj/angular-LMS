import { Component, OnInit ,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
isDarkMode:boolean=false;
  constructor( private router : Router, private elementRef:ElementRef) { }

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
getSample(){
   this.router.navigateByUrl("nav/sample"); 
}
getHack(){
 this.router.navigateByUrl("nav/hack"); 
}
getAbout(){
 this.router.navigateByUrl("nav/about"); 
}
getMode(event: MatSlideToggleChange){
  console.log("$event.target.checked"+event.checked);
 this.isDarkMode=event.checked;
  if(this.isDarkMode==true){
 this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgba(0, 0, 0, 0.829)';
  }
  else{
 this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }
  
  
}
}