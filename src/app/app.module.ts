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
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateUserService } from './createuser/createuser-service.service';
import { HomeComponent } from './home/home.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesService } from './resources/resources.service';
import { SampleComponent } from './sample/sample.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule , HttpClientModule , RouterModule , BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
 MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, CreateuserComponent, HomeComponent, RegisteruserComponent, ResourcesComponent, SampleComponent],
  providers:    [LoginService,CreateUserService, ResourcesService],
  bootstrap:    [  AppComponent ]
})
export class AppModule { }
