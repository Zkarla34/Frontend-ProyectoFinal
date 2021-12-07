import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public urlLocal:string = 'http://localhost:3000'

  Post(url:string,data:{}){
    let promise = new Promise((resolve,reject) => {
      this.http.post(url,data)
      .toPromise()
      .then((res:any) => {
        console.log(res)
        resolve(res)
      })

    })
    return promise
  }
}
