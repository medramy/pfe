import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UsercrudService} from '../usercrud.service';
import {Router} from '@angular/router';
import {user} from '../user';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {
  users: any;
  user: any;

  constructor(private usercrudService: UsercrudService, private router: Router, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.reloadData();
    //mazelt mch sur est ce qye heka wala la donc 7atit'ha en commentaire
    //this.user=this.tokenStorage.getUser();
  }

  reloadData() {

    this.users=this.usercrudService.getAllUsers();

  }

  deleteUser(id: number) {
    this.usercrudService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getUserById(id: number){
    this.router.navigate(['details', id]);
  }
  Activate(id: number){
    this.usercrudService.Activate(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }

  }
