import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ConvertComponent } from './convert/convert.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { DetailsUtilisateurComponent } from './details-utilisateur/details-utilisateur.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {authInterceptorProviders} from './_helpers/auth.interceptor';



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ConvertComponent,
    CreateUtilisateurComponent,
    ListUtilisateurComponent,
    DetailsUtilisateurComponent,
    UpdateUtilisateurComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
