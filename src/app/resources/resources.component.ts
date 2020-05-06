import { Component, OnInit } from "@angular/core";
import { ResourcesService } from "./resources.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { MatAutocompleteSelectedEvent } from "@angular/material";

import { map,filter, startWith } from "rxjs/operators";
@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  resources: [];
  level:[]=[];
  res: number[] = [];
  resName: string;
  user: any;
  toBeAdded: number;
  myControl = new FormControl();
   options: resources[]=[];
 filteredOptions: Observable<resources[]>;
  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.get();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
         map(value => this.filterl(value))
      );
    
  }
  private filterl(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

 get() {
    this.resourcesService.getResources().subscribe((data: any[]) => {
      console.log(data);
      this.resources = data;

       this.resources.forEach(x => {
      this.options.push(x.resName);
      // this.options.push(x.levelName);
       console.log("hiii"+this.options);
       });
     
    });
    this.resourcesService.getLevel().subscribe((data: any[]) => {
      console.log(data);
      this.level = data;

       this.level.forEach(x => {
      this.options.push(x.level.levelName);
       console.log("hiii"+this.options);
       });
    });
  }
  
  

   
  
  
  

search(event: MatAutocompleteSelectedEvent) {
    alert(event.option.value);
  }


  
checked($event) {
    if ($event.target.checked == true) {
      //  this.isChecked = !this.isChecked;
      this.resources.forEach(x => {
        if ($event.target.value == x.resName) {
          console.log("success" + x.resId + "" + x.resName);
          this.res.push(x.resId);
          console.log(this.res);
          this.toBeAdded = this.res.length;
        }
      });
    } else {
      //this.res = [];
      this.resources.forEach(x => {
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
    this.resourcesService
      .create(this.user, this.res)
      .subscribe((data: any[]) => {
        //  console.log("data" + data);
      });
    alert("Resources Added!!!");
    this.res = [];
    this.toBeAdded = this.res.length;
    console.log("this.res.length:" + this.res.length);
  }
 
  
}
