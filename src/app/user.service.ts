import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  greetUser(): String {
    return "Hello User";
  }
}
