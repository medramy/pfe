import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListUtilisateurComponent} from './list-utilisateur/list-utilisateur.component';
import {CreateUtilisateurComponent} from './create-utilisateur/create-utilisateur.component';
import {ConvertComponent} from './convert/convert.component';
import {DetailsUtilisateurComponent} from './details-utilisateur/details-utilisateur.component';
import {UpdateUtilisateurComponent} from './update-utilisateur/update-utilisateur.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';

const routes: Routes = [

  //{ path: '', redirectTo: 'utilisateur', pathMatch: 'full' },
  { path: 'users', component: ListUtilisateurComponent },
  { path: 'add', component: CreateUtilisateurComponent },
  { path: 'convert', component: ConvertComponent },
  { path: 'update/:id', component: UpdateUtilisateurComponent },
  { path: 'details/:id', component: DetailsUtilisateurComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
