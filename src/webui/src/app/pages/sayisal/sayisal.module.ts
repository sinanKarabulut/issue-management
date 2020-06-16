import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SayisalComponent } from './sayisal.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {SharedModule} from "../../shared/shared.module";
import {ProjectService} from "../../services/shared/project.service";
import {SayisalService} from "../../services/shared/sayisal.service";

@NgModule({
  declarations: [SayisalComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    SharedModule
  ],
  providers: [SayisalService]
})
export class SayisalModule { }
