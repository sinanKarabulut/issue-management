import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {BsModalRef, ModalModule} from "ngx-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ConfirmationComponent} from "./confirmation/confirmation.component";

@NgModule(
  {
    imports: [
      CommonModule,
      FormsModule,
      ModalModule.forRoot()
    ],
    declarations: [
      ConfirmationComponent
    ],
    entryComponents: [
      ConfirmationComponent
    ],
    exports: [
      TranslateModule,
      ConfirmationComponent,
      ReactiveFormsModule,
      ModalModule
    ],
    providers: [BsModalRef],
  })
export class SharedModule {

}
