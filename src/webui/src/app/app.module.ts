import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AppLayoutComponent, FooterComponent, HeaderComponent, SidebarComponent} from "./_layout";
import {ApiService} from "./services/api.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {
  BsDatepickerModule,
  BsDropdownModule,
  CollapseModule,
  ModalModule,
  PaginationModule

} from "ngx-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastNoAnimation, ToastNoAnimationModule, ToastrModule} from "ngx-toastr";
import {UserService} from "./services/shared/user.service";
import {IssueHistoryService} from "./services/shared/issue.history.service";
import {NotfoundComponent} from "./shared/notfound/notfound.component";
import {ProjectModule} from "./pages/project/project.module";
import {HomeModule} from "./pages/home/home.module";
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {IssueModule} from "./pages/issue/issue.module";
import {IssueService} from "./services/shared/issue.service";
import {ProjectService} from "./services/shared/project.service";
import {JwtInterceptor} from "./security/jwt-interceptor";
import {AuthGuard} from "./security/auth-guard";
import {ErrorInterceptor} from "./security/authentication.interceptor";
import {AuthenticationService} from "./security/authentication.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SayisalModule} from "./pages/sayisal/sayisal.module";

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
    NotfoundComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxDatatableModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
      maxOpened: 1,
      autoDismiss: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ProjectModule,
    HomeModule,
    DashboardModule,
    IssueModule,
    SayisalModule
  ],
  providers: [ApiService,UserService,IssueHistoryService,IssueService,
    AuthenticationService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
