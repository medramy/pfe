import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsercrudService} from '../usercrud.service';
import {user} from '../user';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  id: number;
  user: user;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private usercrudService: UsercrudService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.submitted = false;
    this.user = new user();
    this.id = this.route.snapshot.params['id'];
    this.usercrudService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateUser(){
    this.usercrudService.updateUser(this.id, this.user)
      .subscribe(data=>console.log(data), error => console.log(error));
    this.user = new user();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.updateUser();
  }

  gotoList(){
    this.router.navigate(['users']);
  }
}
