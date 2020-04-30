import { Component, OnInit } from "@angular/core";
import { ResourcesService } from "./resources.service";
@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  resources: [];
  res: number[] = [];
  isChecked: boolean = false;
  resName: string;
  user: any;
  toBeAdded: number;
  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.get();
  }

  // add($event){
  //    if ($event.target.checked == true) {

  //      this.sample.push($event.target.value);
  //   console.log(this.sample);
  //    }
  // }
  checked($event) {
    if ($event.target.checked == true) {
      this.resources.forEach(x => {
        if ($event.target.value == x.resName) {
          console.log("success" + x.resId + "" + x.resName);
          this.res.push(x.resId);
          console.log(this.res);
          this.toBeAdded = this.res.length;
        }
      });
    }
    else{
       this.res = [];
    this.toBeAdded = this.res.length;
  
    }
  }
  add() {
    //this.user =(sessionStorage.getItem('user')) ;
    this.resourcesService.create(1, this.res).subscribe((data: any[]) => {
    //  console.log("data" + data);
    });
    this.res = [];
    this.toBeAdded = this.res.length;
    console.log("this.res.length:" + this.res.length);
  }
  get() {
    this.resourcesService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.resources = data;
    });
  }
}
