import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { HttpHeaders} from '@angular/common/http';
import {core} from './core'; 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor() { }
  constructor(private http: HttpClient) { }

  // firstClick() {
  //   return console.log('clicked');
  // }
  getUsers() {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Accept', 'application/json')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    // var headers = {
    //   // 'Authorization': 'Basic ' + btoa(username + ":" + password),
    //  'Access-Control-Allow-Origin': true,
    //  'Content-Type': 'application/json; charset=utf-8',
    //  "X-Requested-With": "XMLHttpRequest"
    //    }
     return this.http.get('https://reqres.in/api/users')
    // return this.http.get('http://localhost:8000/users/fkart',{headers : headers})
  }
}
