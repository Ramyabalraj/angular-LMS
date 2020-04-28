import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

 

  constructor(private httpClient: HttpClient) { }
  public resources(){
    return this.httpClient.post("https://userspringboot.herokuapp.com/api/resources/getresources/",null);
  }
  public sendGetRequest(){
   
    return this.httpClient.get("https://userspringboot.herokuapp.com/api/resources/");
  }
  
 
}