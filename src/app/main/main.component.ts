import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  answer = '';

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['name']);
    });
  }

  clickMe() {
    this.userService.connect().subscribe(data => {
      console.log(data);
      this.answer = data.origin;
    }, error=> {
      console.log("error", error);
    });
  }

}
