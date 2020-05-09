import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor(private apiService: ApiService) {
  }

  private ISSUE_PATH = "/issue";

  getAll() : Observable<any>{
    return this.apiService.get(this.ISSUE_PATH).pipe(map(
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
    return this.apiService.get(this.ISSUE_PATH,id).pipe(map(
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

  createIssue(project) : Observable<any>{
    return this.apiService.post(this.ISSUE_PATH,project).pipe(map(
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
    return this.apiService.delete(this.ISSUE_PATH,id).pipe(map(
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
