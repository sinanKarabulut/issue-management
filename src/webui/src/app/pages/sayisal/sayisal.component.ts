import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SayisalService} from "../../services/shared/sayisal.service";
import {Page} from "../../common/page";

@Component({
  selector: 'app-sayisal',
  templateUrl: './sayisal.component.html',
  styleUrls: ['./sayisal.component.css']
})
export class SayisalComponent implements OnInit {
  page = new Page();
  rows = new Array<any>();
  cols = [];
  sayisalForm: FormGroup;
  postData = {
    test : "deneme"
  };

  database = { customers: []};

  constructor(private sayisalService : SayisalService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.cols = [
      {prop: 'sayisalId', name: 'No'},
      {prop: 'cekilisTarihi', name: 'Çekiliş Name', sortable: false}
    ];

    this.setPage({offset: 0});
  }


  get f() {
    return this.sayisalForm.controls
  }

  setPage(pageInfo) {
    debugger;

    this.page.page = pageInfo.offset;

    this.database.customers.push({
      id: 1,
      name: "faker.name.firstName() + ' ' + faker.name.lastName()",
      email: "faker.internet.email()",
      phone: "faker.phone.phoneNumber()",
      city: "faker.address.city()",
      country: "faker.address.country()",
      title: "faker.name.title()"
    });

    this.sayisalService.getAll(this.database).toPromise().then(pageData => {
      this.page.size = pageData.size;
      this.page.page = pageData.number;
      this.page.totalElements = pageData.totalElements;
      this.rows = pageData.content;
    })
  }

}
