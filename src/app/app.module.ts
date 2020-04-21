import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http'
import { LoginService } from './login/login-service.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateUserService } from './createuser/createuser-service.service';
import { HomeComponent } from './home/home.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , HttpClientModule , RouterModule.forRoot([
              {path: '', component: LoginComponent },
              {path: 'view', component: CreateuserComponent },
              {path: 'register', component:RegisteruserComponent  },
              {path: 'home', component:HomeComponent  },
            
        ])],
  declarations: [ AppComponent, HelloComponent, LoginComponent, CreateuserComponent, HomeComponent, RegisteruserComponent],
  providers: [LoginService,CreateUserService],
  bootstrap:    [   AppComponent ]
})
export class AppModule { }
