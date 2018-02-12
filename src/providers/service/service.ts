import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import  'rxjs/add/operator/map' ;


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
  searchRepo(data:any){
    let headers= new Headers;
    headers.append('Content-Type','application/json');
    return this.http.get("https://api.github.com/search/repositories?q="+data.keyword+"+language:"+data.lang).map((res: Response) => res.json());
  }
}
