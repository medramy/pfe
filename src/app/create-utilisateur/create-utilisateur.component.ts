import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UsercrudService} from '../usercrud.service';
import {Router} from '@angular/router';
import {user} from '../user';
import {TokenStorageService} from '../_services/token-storage.service';


@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {
  user : user = new user();
  submitted = false;

  constructor(private usercrudService: UsercrudService, private router: Router, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
  }

  newUtilisateur() : void {
    this.submitted = false;
    this.user = new user();
  }

  save(){
    this.usercrudService.createUser(this.user)
      .subscribe(data=>console.log(data), error=>console.log(error));
    this.user = new user();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/users']);
  }
}
