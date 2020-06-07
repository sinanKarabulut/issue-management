
import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class SayisalService{

  private SAYISAL_PATH = "/sayisal";

  constructor(private apiService: ApiService ){
  }

  getAll(data) : Observable<any>{
    return this.apiService.get(this.SAYISAL_PATH+'/getSayisalBilgi',data).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  getById(id) : Observable<any>{
    return this.apiService.get(this.SAYISAL_PATH,id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  createUser(user) : Observable<any>{
    return this.apiService.post(this.SAYISAL_PATH ,user).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  delete(id) : Observable<any>{
    return this.apiService.delete(this.SAYISAL_PATH,id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }
}
