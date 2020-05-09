import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/shared/project.service";
import {Page} from "../../common/page";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  debugger;
  page = new Page();
  rows = new Array<any>();
  cols = [];

  constructor(private projectService : ProjectService) {

  }


  ngOnInit(): void {
    debugger;
    this.cols = [
      {prop: 'id', name: 'No'},
      {prop: 'projectName', name: 'Project Name', sortable: false},
      {prop: 'projectCode', name: 'Project Code', sortable: false}

    ];


    this.setPage({offset:0});

  }

  setPage(pageInfo){
    this.page.page = pageInfo.offset;
    this.projectService.getAll(this.page).subscribe(pageData =>{
      this.page.size = pageData.size;
      this.page.page = pageData.number;
      this.page.totalElements = pageData.totalElements;
      this.rows = pageData.content;
    })
  }

}
