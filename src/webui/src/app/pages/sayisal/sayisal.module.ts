import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SayisalComponent } from './sayisal.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [SayisalComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class SayisalModule { }
