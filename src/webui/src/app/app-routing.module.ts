import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {IssueComponent} from "./pages/issue/issue.component";
import {ProjectComponent} from "./pages/project/project.component";


const routes: Routes = [
  /*{
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'dashboard', loadChildren => import ("./pages/dashboard/dashboard.module").then(m=>m.DashboardModule)},
      {path: 'issue', loadChildren: './pages/issue/issue.module#IssueModule'},
      {path: 'project', loadChildren: './pages/project/project.module#ProjectModule'}
    ]
  }*/
  {path:"",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"issue",component:IssueComponent},
  {path:"project",component:ProjectComponent}
  //{

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
