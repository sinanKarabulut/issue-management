import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {IssueComponent} from "./pages/issue/issue.component";
import {ProjectComponent} from "./pages/project/project.component";
import {AppLayoutComponent} from "./_layout";
import {NotfoundComponent} from "./shared/notfound/notfound.component";


const routes: Routes = [

  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "issue", component: IssueComponent},
      {path: "project", component: ProjectComponent}
    ]},
  {path: '**', component: NotfoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
