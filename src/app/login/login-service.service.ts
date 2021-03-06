import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public loginUser(user) {
    return this.httpClient.post(
      "https://userspringboot.herokuapp.com/api/users/login/",
      user,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }
}
