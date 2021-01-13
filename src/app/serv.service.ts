import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) { }
  

  getdata(cityName:string):Observable<any>{
    return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid=094aa776d64c50d5b9e9043edd4ffd00')
    .pipe(catchError(this.handleError));
  }

  handleError(error:any){
  return throwError(error.message || 'severe error')
  }

}
