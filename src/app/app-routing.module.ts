import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./login/login.component";
import { CreateuserComponent } from "./createuser/createuser.component";
import { HomeComponent } from "./home/home.component";
import { RegisteruserComponent } from "./registeruser/registeruser.component";
import { ResourcesComponent } from "./resources/resources.component";
import { SampleComponent } from "./sample/sample.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from './about/about.component';
import { HackComponent } from './hack/hack.component';
import { LinkComponent } from './link/link.component';
const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "nav",
    component: NavComponent,
    children: [
      { path: "resources", component: ResourcesComponent },
      { path: "view", component: CreateuserComponent },
       { path: "", component: HomeComponent },
        { path: "sample", component: SampleComponent },
        { path: "hack", component: HackComponent },
        { path: "about", component: AboutComponent },
        { path: "link", component: LinkComponent }
    ]
  },
  { path: "register", component: RegisteruserComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
