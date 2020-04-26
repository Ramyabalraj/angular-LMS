import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private url = "https://userspringboot.herokuapp.com/api/users/";

  constructor(private httpClient: HttpClient) { }
 
  public sendGetRequest(){
    return this.httpClient.get("http://localhost:8080/api/users/");
  }

 public  createUser(user) {
    return this.httpClient.post(this.url, user,{
   headers: new HttpHeaders({
     'Content-Type':'application/json'
   })
     
})
  }
 public getUser(id) {
    return this.httpClient.get("http://localhost:8080/api/users/" + id);
  }
  public deleteUser(id) {
    return this.httpClient.delete(this.url + id);
  }

  public updateUser(id,user) {
    alert(JSON.stringify(user));
    const headers = { "content-type": "application/json" };
    return this.httpClient.put(this.url + id, JSON.stringify(user), {
      headers: headers
    });
  }
}