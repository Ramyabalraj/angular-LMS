import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
resources:[];
   constructor(private resourcesService:ResourcesService ) { }

ngOnInit() {

    this.get(); 
  }
 
  
  get(){
      this.resourcesService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.resources = data;
     
    })  
  }

}