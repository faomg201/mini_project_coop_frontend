import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage'
import { AddService } from '../../service/add.service'

@Component({
  selector: 'app-eminfo',
  templateUrl: './eminfo.component.html',
  styleUrls: ['./eminfo.component.css']
})
export class EminfoComponent implements OnInit {

  infos: any
  token: any

  constructor(public local: LocalStorageService,private add : AddService) { }

  ngOnInit(): void {
  }

  onLoading(){
    
    try {
      this.token = this.local.get('user').token
      this.add.getinfo(this.token).subscribe(
        data => {
          this.infos = data;
        },err => {
          console.log(err)
        });
    }catch (error){
      console.log(error)
    }  
}

}
