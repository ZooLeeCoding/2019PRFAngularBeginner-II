import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  callGreet(): String {
    return this.userService.greetUser();
  }

  buttonClick() {
    console.log(this.userService.greetUser());
    this.router.navigate(['/main', 
      {name: this.userService.greetUser()}]);
  }

}
