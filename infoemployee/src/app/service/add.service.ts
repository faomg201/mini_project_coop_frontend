import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  info: any;

  constructor(private http: HttpClient) { }
  
  addinfo(info : any){
    return this.http.post<any>('http://localhost:3001/create-emp', info)
    .pipe(map(data => {
      return data;
    }));
  }

  getInfo(info: any){
    return this.http.get<any>('http://localhost:3001/getemployee',info)
    .pipe(map(data => {
      if (data) {
        this.info = data;
        console.log(this.info);
      }
      return this.info;
    }));
  }

  updateinfo(token: any, info:any,employee_id: any){
    return this.http.put<any>('http://localhost:3001/emp-update/',info)
    .pipe(map(data => {
      if (data) {        
        console.log(this.info);
      }
      return data;
    }));
  }

  delInfo(token: any,employee_id :any){
    console.log(employee_id)
    return this.http.delete<any>('http://localhost:3001/emp-delete/'+employee_id)
  }




}
