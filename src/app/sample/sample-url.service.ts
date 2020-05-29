import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable()
export class SampleUrlService {
url;
video;
  constructor() { }


giveUrl(url){
  this.url=(url);
   
}
getUrl(): Observable<any[]> {
   console.log(this.url+"hck");
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
