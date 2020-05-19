import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IssueService} from "../../services/shared/issue.service";
import {Page} from "../../common/page";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../services/shared/project.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  rows = [];
  page = new Page();
  modalRef: BsModalRef; //modal popup
  issueForm: FormGroup;
  projectOptions = [];

  constructor(private issueService: IssueService,
              private projectService: ProjectService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.issueForm = this.formBuilder.group({
      projectId: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });

    this.setPage({offset: 0});

    this.loadProjects();
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveIssue() {
    this.issueService.createIssue(this.issueForm.value).subscribe(response => {
      console.log(response);
      this.setPage({offset: 0});
      this.closeAndResetModal();
    });
  }

  get f() {
    return this.issueForm.controls
  }

  closeAndResetModal() {
    this.issueForm.reset();
    this.modalRef.hide();
  }

  private loadProjects() {
    this.projectService.getAll().subscribe(response => {
      this.projectOptions = response;
    })
  }

}
