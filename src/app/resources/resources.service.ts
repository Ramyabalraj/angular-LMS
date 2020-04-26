import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private url = "http://localhost:8080/api/resources/getresources/";

  constructor(private httpClient: HttpClient) { }
  public resources(){
    return this.httpClient.get(this.url);
  }
  public sendGetRequest(){
    return this.httpClient.get("http://localhost:8080/api/resources/");
  }
  
 
}