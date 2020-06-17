import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SayisalService} from "../../services/shared/sayisal.service";
import {Page} from "../../common/page";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-sayisal',
  templateUrl: './sayisal.component.html',
  styleUrls: ['./sayisal.component.css'],
  providers: [ DatePipe ]
})
export class SayisalComponent implements OnInit {
  page = new Page();
  rows = new Array<any>();
  cols = [];
  sayisalForm: FormGroup;
  cekilisTarihi = new Date();
  postData = new Object();
  @ViewChild('tplDateCell') tplDateCell: TemplateRef<any>;

  constructor(private route: ActivatedRoute,
              private sayisalService: SayisalService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe) {

  }

  ngOnInit() {

    this.cols = [
      {prop: 'sayisalId', name: 'No'},
      {prop: 'cekilisTarihi', name: 'Çekiliş Tarihi', sortable: false},
      {prop: 'birinciNumara', name: 'Birinci Rakam', sortable: false},
      {prop: 'ikinciNumara', name: 'İkinci Rakam', sortable: false},
      {prop: 'ucuncuNumara', name: 'Üçüncü Rakam', sortable: false},
      {prop: 'dorduncuNumara', name: 'Dördüncü Rakam', sortable: false},
      {prop: 'besinciNumara', name: 'Beşinci Rakam', sortable: false},
      {prop: 'altinciNumara', name: 'Altıncı Rakam', sortable: false}
    ];

    this.sayisalForm = this.createSayisalForm();

    this.setPage({offset: 0});
  }


  get f() {
    return this.sayisalForm.controls
  }

  setPage(pageInfo) {

    this.page.page = pageInfo.offset;
    debugger;
    const formBilgi = this.sayisalForm.value;
    formBilgi.cekilisTarihi   = this.datePipe.transform(formBilgi.cekilisTarihi,  Constants.DATE_TIME_FMT);

    this.sayisalService.getAll(this.sayisalForm.value).toPromise().then(data => {
      this.setFillGrid(data.data);

    })
  }

  setFillGrid(data){
    debugger;
    this.rows = data;

    this.page.size = data.length;
    this.page.page = 1;
    this.page.totalElements = data.length;
  }
  search() {
    this.setPage({offset: 0});
  }

  createSayisalForm() {
    return this.formBuilder.group({
      cekilisTarihi: this.fromJsonDate(new Date())

    });


  }

  fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toISOString().substring(0, 10);
  }




}

export class Constants {
  static readonly DATE_FMT = 'dd/MM/yyyy';
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
}
