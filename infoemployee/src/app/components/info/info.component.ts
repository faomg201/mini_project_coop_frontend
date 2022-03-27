import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { AddService } from '../../service/add.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  title = 'appBootstrap';


  model: any;
  public date = new Date();
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
    // file: new FormControl('', [Validators.required]),
    // photo: new FormControl('', [Validators.required])
  });

  Position: string[] = ['Web developer', 'Hardware developer', 'Mobile app developer', 'Software developer'];

  previewLoaded: boolean = false;

  constructor(private add: AddService, private router: Router) { }

  ngOnInit(): void { } 
  
  get first_name() {
    return this.infoForm.get('first_name') as FormArray;
  }

  get last_name() {
    return this.infoForm.get('last_name') as FormArray;
  }

  get email() {
    return this.infoForm.get('email') as FormArray;
  }

  get nick_name() {
    return this.infoForm.get('nick_name') as FormArray;
  }

  addinfo(){
    // console.log(this.infoForm.value);
    // console.log(this.infoForm.status);
    console.log(this.infoForm.get('photo')?.value);
    // console.log(this.infoForm.value);
    // if(this.infoForm.get('first_name')?.value !== '^[ก-๙a-zA-Z.\\s]+$'){
    if(!RegExp('^[ก-๙a-zA-Z]+$').test(this.infoForm.get('first_name')?.value)) {
      alert('ใส่ชื่อผิด กรุณากรอกใหม่')
    }
    else if(!RegExp('^[ก-๙a-zA-Z]+$').test(this.infoForm.get('last_name')?.value)){
      alert('ใส่นามสกุลผิด กรุณากรอกใหม่')
    }
    else if(!RegExp('^[ก-๙a-zA-Z]+$').test(this.infoForm.get('gender')?.value)){
      alert('กรุณาใส่เพศ')
    }
    // else if(!RegExp("Indochina Time").test(this.infoForm.get('birth_date')?.value)){
    //   alert('กรุณาใส่วันเกิด')
    // }
    // else if(!RegExp("Indochina Time").test(this.infoForm.get('hir_date')?.value)){
    //   alert('กรุณาใส่วันเริ่มทำงาน')
    // }
    // else if(!RegExp('^[0-9]').test(this.infoForm.get('salary')?.value)){
    //   alert('กรุณาใส่เงินเดือน')
    // }
    else if(!RegExp('^[0-9\\s]{13}').test(this.infoForm.get('id_card_number')?.value)){
      alert('กรุณาใส่หมายเลขบัตรประชาชนให้ถูกต้อง')
    }
    else if(!RegExp('^[0-9\\s]{10}').test(this.infoForm.get('phone_number')?.value)){
      alert('กรุณาใส่หมายเลขโทรศัพท์ให้ถูกต้อง')
    }
    else if(!RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(this.infoForm.get('email')?.value)){
      alert('ใส่อีเมลผิด กรุณากรอกใหม่')
    }
    // else if(!RegExp('^[ก-๙a-zA-Z0-9\\s]+$').test(this.infoForm.get('address')?.value)){
    //   alert('กรุณากรอกที่อยู่')
    // }
    else if(this.infoForm.status == "INVALID"){
      alert('กรุณากรอกข้อมูลให้ครบ')
    }
    else {
      alert('เพิ่มข้อมูลสำเร็จ')
      this.add.addinfo(this.infoForm.value).subscribe()
    }
    // this.add.addinfo(this.infoForm.value).subscribe(
    //   data => {
    //     if(data.status == true){
    //       alert('Can not signup!');
    //     }else{
    //       alert('Can signup!!Xd');

    //     }
    //   },
    //   err =>{
    //     console.log(err);
    //     alert('Can not signup!!');
    //   }
    // );
  }

  onChangePhoto(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.infoForm.patchValue({
          photo: reader.result
        })
      }
    }
  }
  

  resetFrom() {
    this.infoForm.reset();
    this.previewLoaded = false;
  }






}
