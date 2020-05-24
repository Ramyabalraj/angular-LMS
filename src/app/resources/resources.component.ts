import { Component, OnInit ,ViewChildren, QueryList, ElementRef , Input } from "@angular/core";
import { ResourcesService } from "./resources.service";
import { ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { MatAutocompleteSelectedEvent, MatCheckboxChange } from "@angular/material";

import { map, filter, startWith } from "rxjs/operators";
@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  @ViewChildren('inputs') public inputs: ElementRef<HTMLInputElement>[];

  uncheck() {
    this.inputs.forEach(check => {
      check.nativeElement.checked = false;
    })
  }

 
 disable:boolean;
  resources: [] = [];
  viewresources: [] = [];
  level: [] = [];
  res: number[] = [];
  sresId:[]=[];
  sres: number;
  i:number=0;
  uId;
  user: any;
  rName:String;
  default: string = "All";
  toBeAdded: number;
  myControl = new FormControl();
  options: resources[] = [];
  filteredOptions: Observable<resources[]>;
  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.get();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this.filterl(value))
    );
  }
  private filterl(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  get() {

  //   this.resourcesService.resources().subscribe((data: any[]) => {
  //     console.log(data);
  //  });
    this.resourcesService.getResources().subscribe((data: any[]) => {
      console.log(data);
    
      this.resources = data;
      this.resources.forEach(x => {
        this.options.push(x.resName);
        this.viewresources.push(x);
       
     });
    });
    this.resourcesService.getLevel().subscribe((data: any[]) => {
      console.log(data);
      this.level = data;
      this.level.forEach(x => {
        this.options.push(x.levelName);
       
      });
    });
  }

  search(event: MatAutocompleteSelectedEvent) {
    alert(event.option.value);
    if (event.option.value) {
     
      this.viewresources.forEach(x => {
        if (event.option.value == x.resName) {
          console.log("success" + x.resId + "" + x.resName);
          this.sres = x.resId;
          this.resourcesService.getResId(this.sres).subscribe((data: any[]) => {
            this.resources = [];
            
            this.resources.push(data);
          
          });
        } else if (event.option.value == x.level.levelName) {
        
          this.resources = [];
          this.sres = x.resId;
          this.resourcesService.getResId(this.sres).subscribe((data: any[]) => {
            console.log("bcwh" + this.resources);
            this.resources.push(data);
            console.log(this.resources);
          });
        } else if (event.option.value == "All") {
          this.resources = [];
          this.viewresources.forEach(x => {
            this.resources.push(x);
            
          });
        }
      });
    }
  }




  checked($event) {
     //alert("checked" + event.source.value);
    
    if ($event.target.checked == true) {
     
      //  this.isChecked = !this.isChecked;
      this.viewresources.forEach(x => {
        if ($event.target.value == x.resName) {
          console.log("success" + x.resId + "" + x.resName);
          //this.res.push(x.resId);
          // this.uId=x.resId;
         this.uId= this.sresId.indexOf(x.resId);
         if(this.uId== -1){
this.res=this.sresId;
         }
         else{
            this.sresId.splice(this.uId, 1); 
this.res=this.sresId;
         }
          this.sresId.forEach(x=>{
            console.log(x+"vdgevu");
          });
          this.res.forEach(x=>{
            console.log("bx"+)
          })
          this.toBeAdded = this.res.length;
   
        }
      });
    } else {
      //this.res = [];
      this.viewresources.forEach(x => {
        if ($event.target.value == x.resName) {
          console.log("success" + x.resId + "" + x.resName);
          for (var i = 0; i < this.res.length; i++) {
            if (this.res[i] === x.resId) {
              this.res.splice(i, 1);
            }
          }
          console.log(this.res);
          this.toBeAdded = this.res.length;
        }
      });
    }
   
  }


  add() {
    this.user = sessionStorage.getItem("user");
    this.resourcesService.getUser(this.user).subscribe((data: any[]) => {
        // console.log("data" +JSON.stringify(data));
       // alert("Resources Added!!!");
       
      });
    this.resourcesService
      .create(this.user, this.res)
      .subscribe((data: any[]) => {
        //  console.log("data" + data);
        alert("Resources Added!!!");
       
      });
    
    this.res = [];
    this.toBeAdded = this.res.length;
    console.log("this.res.length:" + this.res.length);
   
 
   
   
       //this.disable=false;
    
  }
}
