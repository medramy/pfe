import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;
   user: any;

  constructor(private userService: UserService,
              private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      data => {

        this.content = data;
        console.log(this.content)
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }

    );
    this.user=this.tokenStorage.getUser();
    console.log(this.user)
  }
}
