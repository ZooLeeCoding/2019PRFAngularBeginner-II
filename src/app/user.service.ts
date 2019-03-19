import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  greetUser(): String {
    return "Hello User";
  }

  connect(): Observable<any> {
    return this.http.get("https://httpbin.org/get");
  }
}
