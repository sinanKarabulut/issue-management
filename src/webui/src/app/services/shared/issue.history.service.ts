import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IssueHistoryService {
  constructor(private apiService: ApiService) {
  }

  private ISSUE_HISTORY_PATH = "/issue/history";

  getAll() : Observable<any>{
    return this.apiService.get(this.ISSUE_HISTORY_PATH).pipe(map(
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
    return this.apiService.get(this.ISSUE_HISTORY_PATH,id).pipe(map(
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

  createIssueHistory(IssueHistory) : Observable<any>{
    return this.apiService.post(this.ISSUE_HISTORY_PATH,IssueHistory).pipe(map(
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
    return this.apiService.delete(this.ISSUE_HISTORY_PATH,id).pipe(map(
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
