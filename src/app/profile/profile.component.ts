import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getUser().roles == 'ROLE_ADMIN') {
      this.router.navigate(['/users']).finally(() => this.reloadPage());
    }
    else {
      this.router.navigate(['/convert']).finally(() => this.reloadPage());
    }
  }
  reloadPage() {
    window.location. reload();
  }

}
