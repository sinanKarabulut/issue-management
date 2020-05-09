import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private apiService: ApiService) {
  }

  private PROJECT_PATH = "/project";

  getAll(page) : Observable<any>{
    return this.apiService.get(this.PROJECT_PATH + "/pagination",page).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          return {};
        }
      }
    ));
  }

  getById(id): Observable<any> {
    return this.apiService.get(this.PROJECT_PATH,id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          return {};
        }
      }
      )
    );
  }

  createProject(project) : Observable<any>{
    return this.apiService.post(this.PROJECT_PATH,project).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          return {};
        }
      }
      )
    );
  }

  delete(id): Observable<any> {
    return this.apiService.delete(this.PROJECT_PATH,id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          return {};
        }
      }
      )
    );
  }

}
