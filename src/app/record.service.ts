import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Record } from './record';
import { HttpClient } from '@angular/common/http';
import { ResponceEntity } from './responseEntity';
import { GET_HEADER_TEXT } from './utility/header.config';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http:HttpClient) { }

  onLoadPendingRecords():Observable<ResponceEntity>{
    return this.http.get<ResponceEntity>("http://localhost:8080/getInventory");
  }

  forAccept(userName:string,productId:number):Observable<string>{
    return this.http.put<string>("http://localhost:8080/updateRecordStatusById/"+userName+"/"+productId,GET_HEADER_TEXT)
    .pipe(catchError(this.handleError));
  }

  forAddRecord(role:string,record:Record):Observable<ResponceEntity>{
    return this.http.post<ResponceEntity>("http://localhost:8080/addRecord/"+role,record);
  }

  private handleError(errorResponce:HttpErrorResponse){
    if(errorResponce.error instanceof ErrorEvent){
    }else{
      console.error('Server Side Error',errorResponce);
    }
    return throwError('There is a problem with service');
  }

  forLoad():Observable<Record[]>{
    return this.http.get<Record[]>("http://localhost:8080/getAllRecords")
  }

  forUpdate(role:string,record:Record):Observable<ResponceEntity>{
    return this.http.put<ResponceEntity>("http://localhost:8080/updateRecord/"+role,record);
  }

  forDelete(productId:number):Observable<ResponceEntity>{
    return this.http.delete<ResponceEntity>("http://localhost:8080/deleteRecord/"+productId);
  }
}
