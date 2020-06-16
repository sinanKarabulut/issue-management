import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SayisalService} from "../../services/shared/sayisal.service";
import {Page} from "../../common/page";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sayisal',
  templateUrl: './sayisal.component.html',
  styleUrls: ['./sayisal.component.css']
})
export class SayisalComponent implements OnInit {
  page = new Page();
  rows = [];
  cols = [];
  sayisalForm: FormGroup;
  cekilisTarihi = new Date();
  postData = new Object();
  @ViewChild('tplDateCell') tplDateCell: TemplateRef<any>;

  constructor(private route: ActivatedRoute,
              private sayisalService: SayisalService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.cols = [
      {prop: 'sayisalId', name: 'No'},
      {prop: 'cekilisTarihi', name: 'Çekiliş Name', sortable: false},
      {prop: 'birinciNumara', name: 'Birinci Rakam', sortable: false}
    ];

    this.sayisalForm = this.createSayisalForm();

    this.setPage({offset: 0});
  }


  get f() {
    return this.sayisalForm.controls
  }

  setPage(pageInfo) {

    this.page.page = pageInfo.offset;

    this.sayisalService.getAll(this.sayisalForm.value).toPromise().then(data => {
      this.setFillGrid(data.data);
      /*this.page.size = data.size;
      this.page.page = data.number;
      this.page.totalElements = data.totalElements;
      this.rows = data.content;*/
    })
  }

  setFillGrid(data){
    var jsonObject : any = JSON.parse(data);
    this.rows = JSON.parse(jsonObject);
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
