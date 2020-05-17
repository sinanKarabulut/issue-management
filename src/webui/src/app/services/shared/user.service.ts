import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {
  }

  private USER_PATH = "/users";

  getAll() : Observable<any>{
    return this.apiService.get(this.USER_PATH).pipe(map(
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
    return this.apiService.get(this.USER_PATH,id).pipe(map(
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

  createUser(user) : Observable<any>{
    return this.apiService.post(this.USER_PATH,user).pipe(map(
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
    return this.apiService.delete(this.USER_PATH,id).pipe(map(
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
