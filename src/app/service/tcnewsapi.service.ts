import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  //topheadlines api url

  topheadnews='https://newsapi.org/v2/top-headlines?country=in&apiKey=a605465d4ed44390ba03f1591b3b1f2e';

  // for technology
  technews= 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a605465d4ed44390ba03f1591b3b1f2e';

  //for sports

  sportsnews='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a605465d4ed44390ba03f1591b3b1f2e';
  //creting a method for top headlines
  
  tcheadlines():Observable<any>{
    return this._http.get(this.topheadnews)
  }

  // creting a method for technology news
  tcnews():Observable<any>{
    return this._http.get(this.technews)
  }

    // creting a method for sports news
    spnews():Observable<any>{
      return this._http.get(this.sportsnews)
    }
  

}

