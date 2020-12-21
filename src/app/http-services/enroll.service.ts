import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpDispatcherService } from './http-dispatcher.service';
import { Routes } from '../locales/api-routes';
import { AppConstant } from '../locales/app-constants';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private dispacherService : HttpDispatcherService) { 
  }

  public handleError(operation: String,data:object) {
    return (error: HttpErrorResponse) => {
        let errMsg = `error in ${operation}() data ${data}`;
        return Observable.throw(error);
    }
  }

  /* getEnrollees */
  getEnrollees(){
    console.log(`${AppConstant.API_BASE_URL.enrollee}${Routes.Enrollment.getEnrollees}`)
    return this.dispacherService.get(`${AppConstant.API_BASE_URL.enrollee}${Routes.Enrollment.getEnrollees}`)
    .pipe(map(data => {
        return data;
    }), catchError(this.handleError('getEnrollees',{})));
  }

    /* Update Enrollee */
    updateEnrollee(id:string,name:string,status:boolean){
      let formatRoute = Routes.Enrollment.updateEnrollee.replace(":id",id)
      return this.dispacherService.put(`${AppConstant.API_BASE_URL.enrollee}${formatRoute}`,
      {id:id, name:name,active:status})
      .pipe(map(data => {
          return data;
      }), catchError(this.handleError('updateEnrollee',{name,status})));
    }

  /* getEnrollee */
  getEnrollee(id:string){
    let formatRoute = Routes.Enrollment.getEnrollee.replace(":id",id)
    return this.dispacherService.get(`${AppConstant.API_BASE_URL.enrollee}${formatRoute}`)
    .pipe(map(data => {
        return data;
    }), catchError(this.handleError('getEnrollee',{id})));
  }

}
