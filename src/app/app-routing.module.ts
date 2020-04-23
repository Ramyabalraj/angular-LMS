import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { HomeComponent } from './home/home.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
 import { ResourcesComponent } from './resources/resources.component';
const routes: Routes = [
   {path: '', component: LoginComponent },
   {path: 'view', component: CreateuserComponent },
   {path: 'register', component:RegisteruserComponent  },
   {path: 'home', component:HomeComponent  },
    {path: 'resources', component:ResourcesComponent  },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes,{ enableTracing: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }