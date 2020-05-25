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
 import {MatCardModule} from '@angular/material/card';
 import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateUserService } from './createuser/createuser-service.service';
import { HomeComponent } from './home/home.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesService } from './resources/resources.service';
import { SampleComponent } from './sample/sample.component';
import { NavComponent } from './nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutComponent } from './about/about.component';
import { HackComponent } from './hack/hack.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule , HttpClientModule , RouterModule , BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatButtonModule,
    FormsModule,MatCheckboxModule,
    MatCardModule,MatSidenavModule,
    MatSlideToggleModule,
 MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, CreateuserComponent, HomeComponent, RegisteruserComponent, ResourcesComponent, SampleComponent, NavComponent, AboutComponent, HackComponent],
  providers:    [LoginService,CreateUserService, ResourcesService],
  bootstrap:    [  AppComponent ]
})
export class AppModule { }
