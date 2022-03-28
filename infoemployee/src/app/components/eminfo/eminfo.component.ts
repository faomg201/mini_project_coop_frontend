import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage'
import { AddService } from '../../service/add.service'


import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-eminfo',
  templateUrl: './eminfo.component.html',
  styleUrls: ['./eminfo.component.css']
})
export class EminfoComponent implements OnInit {

  info: any
  token: any  

  infoForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.pattern('^[ก-๙a-zA-Z]+$')]),
    last_name: new FormControl('', [Validators.required, Validators.pattern('^[ก-๙a-zA-Z]+$')]),
    gender: new FormControl('', [Validators.required]),  
    id_card_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9\\s]{13}')]),    
    phone_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9\\s]{10}')]),
    email: new FormControl('', [Validators.required, Validators.email]),

    // address: new FormControl('', [Validators.required, Validators.pattern('^[ก-๙0-9a-zA-Z.\\s]+$')]),
    // birth_date: new FormControl('', [Validators.required]),
    // hir_date: new FormControl('', [Validators.required]),
    // salary: new FormControl('', [Validators.required]),   
    file: new FormControl('', [Validators.required]),
    images: new FormControl('', [Validators.required])
  });
  previewLoaded: boolean = false;
  constructor(public local: LocalStorageService,private add : AddService) {
    this.onLoading();
   }
  
  ngOnInit(): void { } 

 onLoading(){
    try {
      this.add.getInfo(this.info).subscribe(
        data => {
          this.info = data;
        },err => {
          console.log(err)
        });
    }catch (error){
      console.log(error)
    }
  }
  delInfo(employee_id : any){
    console.log(employee_id)
    console.log(this.infoForm.get('employee_id')?.value);
    try {
      this.add.delInfo(this,employee_id).subscribe(
        data => {
          this.info = data;
        },err => {
          console.log(err)
        });
    }catch (error){
      console.log(error)
    }
    // window.location.reload();
  }

  editInfo(employee_id : any){
    this.infoForm.get('first_name')?.setValue(this.info[0].first_name)
    this.infoForm.get('last_name')?.setValue(this.info[0].last_name)    
    this.infoForm.get('email')?.setValue(this.info[0].email)
    this.infoForm.get('phone_number')?.setValue(this.info[0].phone_number)
    console.log(this.infoForm.value)
  }

  editInfomation(){
    
  console.log(this.infoForm.value)
  try {
    this.add.updateinfo(this.token,this.infoForm.value).subscribe(
      data => {
        console.log(data)
      },err => {
        console.log(err)
      });
  }catch (error){
    console.log(error)
  }
  // window.location.reload();
  }

  onChangeImg(e : any){
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.infoForm.patchValue({
            img: reader.result
          })
      }
    }
  }

}