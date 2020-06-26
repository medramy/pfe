import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {any} from 'codelyzer/util/function';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertServiceService {

  public  _url = 'http://localhost:8087/fichier';
  //public  _url1 = 'http://localhost:8087/fichier1';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}
    FileConvert(u,id) {
      return this.http.post<any>(this._url+'/upload/'+id,u);
    }
    // FileDownload(u,id) {
    //   return this.http.post<any>(this._url1+'/download/'+id,u);
    // }
}
