import { Injectable } from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { GET_HEADER_TEXT } from './utility/header.config';

import { catchError } from 'rxjs/operators';
import { ResponceEntity } from './responseEntity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  forLogin(user:User):Observable<ResponceEntity>{
    return this.http.post<ResponceEntity>("http://localhost:8080/login/"+user.email+"/"+user.userPassword,GET_HEADER_TEXT)
    .pipe(catchError(this.handleError));
  }

  private handleError(errorResponce:HttpErrorResponse){
    if(errorResponce.error instanceof ErrorEvent){
    }else{
      console.error('Server Side Error',errorResponce);
    }
    return throwError('There is a problem with service');
  }
}
