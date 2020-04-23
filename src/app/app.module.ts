import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
import { ResourcesComponent } from './resources/resources.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule , HttpClientModule , RouterModule],
  declarations: [ AppComponent, HelloComponent, LoginComponent, CreateuserComponent, HomeComponent, RegisteruserComponent, ResourcesComponent],
  providers:    [LoginService,CreateUserService],
  bootstrap:    [  AppComponent ]
})
export class AppModule { }
