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
  public sendGetRequest() {
    return this.httpClient.get("http://localhost:8080/api/resources/");
  }
  public create(userId, resId) {
    //let ressId = [1, 2, 3];
    let param = new HttpParams();

    param = param.append("userId", userId);
    param = param.append("resId[]", resId);
    return this.httpClient.get(
      "http://localhost:8080/api/userresources/{userId}/{resId}/",
      { params: param }
    );
  }
}
