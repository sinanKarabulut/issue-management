import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AppLayoutComponent, FooterComponent, HeaderComponent, SidebarComponent} from "./_layout";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {IssueComponent} from "./pages/issue/issue.component";
import {ProjectComponent} from "./pages/project/project.component";
import {ApiService} from "./services/api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BsModalService, ModalModule} from "ngx-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";

export const createTranslateLoader = (http:HttpClient) => {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    IssueComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    //translate modülünü initialize etmiş olduk
    TranslateModule.forRoot({
      loader :{
        provide : TranslateLoader,
        useFactory : createTranslateLoader,
        deps : [HttpClient]
      }
    }),
    ModalModule.forRoot()

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
