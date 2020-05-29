import { Component, OnInit } from "@angular/core";
import { SampleUrlService } from "../sample/sample-url.service";
@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.css"]
})
export class LinkComponent implements OnInit {
  lmsLink;
  lmsVideo;
  browser;
  css;
  constructor(private sampleUrlService: SampleUrlService) {}

  ngOnInit() {
    this.lmsLink="";
    this.lmsVideo = "";
    this.browser = "";
    this.get();
   

    this.css = "";
  }

  get() {
     
   this.sampleUrlService.getUrl().subscribe((data1: any[]) => {
      console.log(data1);
  this.lmsLink=( data1);});
   this.sampleUrlService.getVideo().subscribe((data2: any[]) => {
      console.log(data2);
  this.lmsVideo=( data2);});
  if(this.lmsVideo == "read"){
  this.browser = 'b1';
 document.querySelector(".browser2").setAttribute("src", this.lmsLink);

  }
  else if(this.lmsVideo == "video"){
 this.browser = 'b2';
 document.querySelector(".browser2").setAttribute("src", this.lmsLink);
  }
  
   else{
     alert("TRY");
   }   
    
       
    //   console.log(this.css);
    //    console.log("hres" + this.lmsLink);
    // if(this.lmsLink == ""){
    //   this.sampleUrlService.getVideo().subscribe((data2: any[]) => {
    //   console.log("hiii"+data2);
    //   this.lmsVideo = data2;
    //   this.browser = 'b2';
    // console.log("hryy" + this.browser);
    //  console.log(this.lmsVideo + "this.lmsVideo");
    //   document.querySelector(".browser2").setAttribute("src", this.lmsVideo );
       
    // });
    // }
    this.lmsLink = "";
    this.lmsVideo = "";
   
  }

 
}

// https://www.youtube.com/embed/playlist?list=PLsyeobzWxl7oZ-fxDYkOToURHhMuWD1BK - java
//https://www.youtube.com/embed/?v=Q6bY3FvBxMk&list=RDCMUC59K-uG2A5ogwIrHw4bmlEg&start_radio=1&t=0 - js
//https://www.youtube.com/embed/?v=zKkUN-mJtPQ&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl-ang js
