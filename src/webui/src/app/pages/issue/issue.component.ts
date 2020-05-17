import { Component, OnInit } from '@angular/core';
import {IssueService} from "../../services/shared/issue.service";
import {Page} from "../../common/page";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  rows=[];
  page = new Page();

  constructor(private issueService : IssueService) { }

  ngOnInit(): void {
    this.setPage({offset: 0});

  }

  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
    this.issueService.getAll(this.page).subscribe(pageData => {
      this.page.size = pageData.size;
      this.page.page = pageData.number;
      this.page.totalElements = pageData.totalElements;
      this.rows = pageData.content;
    })
  }

}
