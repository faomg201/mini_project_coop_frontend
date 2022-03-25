import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-web-storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  info: any;

  constructor(private http: HttpClient, public local:LocalStorageService) { }
  
  addinfo(info : any){
    return this.http.post<any>('http://localhost:3001/create-emp', info)
    .pipe(map(data => {
      return data;
    }));
  }

  getinfo(token: any){
    const headers = {'Authorization': token}
    return this.http.get<any>('http://localhost:3001/getemployee',{headers})
    .pipe(map(data => {
      if (data) {
        this.info = data;
        console.log(this.info);
      }
      return this.info;
    }));
  }

  updateinfo(token: any,info: any){
    const headers = {'Authorization': token}
    return this.http.put<any>('http://localhost:3000/emp-update',info,{headers})
    .pipe(map(data => {
      if (data) {
      
        console.log(data);
      }
      return data;
    }));
  }

  delinfo(token: any,id :any){
    console.log(id)
    const headers = {'Authorization': token}
    return this.http.delete<any>('http://localhost:3001/emp-delete/'+id,{headers})
  }




}
