import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ResourcesService {
  constructor(private httpClient: HttpClient) {}
  public resources() {
    return this.httpClient.post(
      "https://userspringboot.herokuapp.com/api/resources/getresources/",
      null
    );
  }
  
  
  public getResources() {
    return this.httpClient.get("https://userspringboot.herokuapp.com/api/resources/");
  }
 
  public create(userId, resId) {
   
    let param = new HttpParams();
     param = param.append("userId", userId);
    param = param.append("resId[]", resId);
    return this.httpClient.get(
      "https://userspringboot.herokuapp.com/api/userresources/{userId}/{resId}/",
      { params: param }
    );
  }
  public getLevel(){
     return this.httpClient.get("https://userspringboot.herokuapp.com/api/level/");
  }

 public getResId(id){
   console.log("https://userspringboot.herokuapp.com/api/resources/",id);
     return this.httpClient.get(" https://userspringboot.herokuapp.com/api/resources/"+id);
  }
 
}
