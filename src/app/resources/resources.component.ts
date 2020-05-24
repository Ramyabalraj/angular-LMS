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
  j:number=0;
ans2:[]=[];
  uniqueArray = [];
 disable:boolean;
  resources: [] = [];
  viewresources: [] = [];
  level: [] = [];
  res: number[] = [];
  sresId:[]=[];
  ans:[]=[];
  sres: number;
  i:number=0;
  uId;
  result:[]=[];
  resourcesresult:[]=[];
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
          this.res.push(x.resId);
          // this.uId=x.resId;
        this.res.forEach(x=>{
          console.log("res"+x)
;        })
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
       this.result.push(data);
       this.result.forEach(x =>{
         this.resourcesresult=x.resources;
       })
       this.resourcesresult.forEach(x =>{
         this.sresId.push(x.resId);
         //console.log("ffgg"+x.resId);
       })
       this.uniqueArray = this.removeDuplicates(this.sresId);
       console.log("thisss"+this.uniqueArray.length);
     
      });
this.res.forEach(x=>{
  console.log("bhjcL"+x);
  
})
for(var i=0;i<this.uniqueArray.length;i++){
  for(var j=0;j<this.uniqueArray.length;j++){
     console.log("vedbh"+this.res[i]);
  }
}

    // this.resourcesService
    //   .create(this.user, this.res)
    //   .subscribe((data: any[]) => {
    //     //  console.log("data" + data);
    //     alert("Resources Added!!!");
       
    //   });
    
    this.res = [];
    this.toBeAdded = this.res.length;
    console.log("this.res.length:" + this.res.length);
   
 
   
   
       //this.disable=false;
    
  }

   removeDuplicates(array) {
  let x = {};
  array.forEach(function(i) {
    if(!x[i]) {
      x[i] = true
    }
  })
  console.log(Object.keys(x));
  return Object.keys(x);
};
   
}
