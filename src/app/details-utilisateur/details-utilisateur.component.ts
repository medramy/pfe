import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsercrudService} from '../usercrud.service';
import {user} from '../user';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-details-utilisateur',
  templateUrl: './details-utilisateur.component.html',
  styleUrls: ['./details-utilisateur.component.css']
})
export class DetailsUtilisateurComponent implements OnInit {

  id: number;
  user: user;
  constructor(private route: ActivatedRoute, private router: Router, private usercrudService: UsercrudService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.user = new user();
    this.id = this.route.snapshot.params['id'];
    this.usercrudService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['users']);
  }

}
