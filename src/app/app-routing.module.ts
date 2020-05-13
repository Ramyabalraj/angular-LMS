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
const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "nav",
    component: NavComponent,
    children: [
      { path: "resources", component: ResourcesComponent },
      { path: "view", component: CreateuserComponent },
       { path: "", component: HomeComponent },
        { path: "sample", component: SampleComponent }
    ]
  },
  { path: "register", component: RegisteruserComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
