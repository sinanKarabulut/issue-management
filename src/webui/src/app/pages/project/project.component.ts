import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {ProjectService} from "../../services/shared/project.service";
import {Page} from "../../common/page";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfirmationComponent} from "../../shared/confirmation/confirmation.component";
import {UserService} from "../../services/shared/user.service";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  page = new Page();
  rows = new Array<any>();
  cols = [];
  managerOptions = [];
  modalRef: BsModalRef;
  projectForm: FormGroup;
  @ViewChild('tplProjectDeleteCell') tplProjectDeleteCell : TemplateRef<any>;

  constructor(private projectService: ProjectService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private userService : UserService) {

  }


  ngOnInit(): void {
    this.cols = [
      {prop: 'id', name: 'No'},
      {prop: 'projectName', name: 'Project Name', sortable: false},
      {prop: 'projectCode', name: 'Project Code', sortable: false},
      {prop: 'manager.nameSurname', name: 'Project Manager Name', sortable: false},
      {prop: 'id', name: 'Actions', cellTemplate : this.tplProjectDeleteCell,sortable: false}


    ];
    this.setPage({offset: 0});

    this.projectForm = this.formBuilder.group({
      'projectCode': [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      'projectName': [null, [Validators.required, Validators.minLength(4)]],
      'managerId' : [null,[Validators.required]]
    });

    this.userService.getAll().subscribe(response=>{
      this.managerOptions = response;
      console.log(response);
    });

  }

  get f() {
    return this.projectForm.controls
  }

  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
    this.projectService.getAllPageable(this.page).subscribe(pageData => {
      this.page.size = pageData.size;
      this.page.page = pageData.number;
      this.page.totalElements = pageData.totalElements;
      this.rows = pageData.content;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeAndResetModal() {
    this.projectForm.reset();
    this.modalRef.hide();
  }

  saveProject() {
    if (!this.projectForm.valid) {
      return;
    }
    this.projectService.createProject(this.projectForm.value).subscribe(
      response => {
        console.log(response);
        this.setPage(this.page);
        this.closeAndResetModal();
      }
    )

  }

  public showDeleteConfirmation(value) {
    const modal = this.modalService.show(ConfirmationComponent);
    (<ConfirmationComponent>modal.content).showConfirmation(
      'Delete Confirmation',
      "Are you sure for delete Project"
    );

    (<ConfirmationComponent>modal.content).onClose.subscribe(
      result => {
        if (result == true) {
          this.projectService.delete(value).subscribe(
            response=>{
              if(response == true){
                this.setPage({offset:0})
              }
            }
          );

        } else if (result == false) {

        }
      }
    );
  }

}
