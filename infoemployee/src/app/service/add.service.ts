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
    return this.http.post<any>('http://localhost:3000/infoemployee/addinfo', info)
    .pipe(map(data => {
      return data;
    }));
  }

}
