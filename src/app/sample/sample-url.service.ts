import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable()
export class SampleUrlService {
url;
video;
  constructor() {this.url="";this.video=""; }


giveUrl(url){
  this.url=url;
  console.log(this.url+"hck");
  
}
getUrl(): Observable<any[]> {
    return of(this.url);
}
giveVideo(v){
  this.video=v;
  console.log(this.url+"hck");
  
}
getVideo(): Observable<any[]> {
    return of(this.video);
}

}
