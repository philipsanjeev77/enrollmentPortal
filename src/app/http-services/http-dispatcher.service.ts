import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HttpDispatcherService {

  constructor(private _http: HttpClient) { }

  /**
   * get function
   * @param url 
   * @param params 
   * @param headers 
   */
  get(url: string,params: any={},headers={}){
    return this._http.get(url,{headers:headers,params:params});
  }

  /**
   * post function 
   * @param url 
   * @param params 
   * @param headers 
   */
  post(url: string,body:any={},headers={}){
    return this._http.post(url,body,{headers:headers});
  }

  /**
   * put function 
   * @param url 
   * @param body 
   * @param headers 
   */
  put(url: string,body:any={},headers={}){
    return this._http.put(url,body,{headers:headers});
  }


  /**
   * delete function 
   * @param url 
   * @param params 
   * @param headers 
   */
  delete(url: string,params: any= {} , headers={}){
    return this._http.delete(url,{headers:headers,params:params});
  }

}
