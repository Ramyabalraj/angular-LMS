import { Component, OnInit } from "@angular/core";
import { ResourcesService } from "./resources.service";
@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  resources: [];
  res: [];
  isChecked: boolean = false;
  resName: string;
  user: any;
  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.get();
  }

  add($event) {
    if ($event.target.checked == true) {
      this.resources.forEach(x => {
        if ($event.target.value == x.resName) {
          console.log("success" + x.resId + "" + x.resName);
          //this.user =(sessionStorage.getItem('user')) ;
          this.res = x;
          this.resourcesService
            .create(2, this.res.resId)
            .subscribe((data: any[]) => {
              console.log("data" + data);
            });
        }
      });
    }
  }
  get() {
    this.resourcesService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.resources = data;
    });
  }
}
