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
    first_name: new FormControl('', [Validators.required, Validators.pattern('^[ก-๙a-zA-Z.\\s]+$')]),
    last_name: new FormControl('', [Validators.required, Validators.pattern('^[ก-๙a-zA-Z.\\s]+$')]),
    nick_name: new FormControl('', [Validators.required, Validators.pattern('^[ก-๙a-zA-Z.\\s]+$')]),
    gender: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    birth_date: new FormControl('', [Validators.required]),
    hir_date: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),   
    id_card_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9\\s]{13}')]),    
    phone_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9\\s]{10}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.pattern('^[ก-๙0-9a-zA-Z.\\s]+$')]),    

    file: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required])
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
    console.log(this.infoForm.value);
    this.add.addinfo(this.infoForm.value).subscribe(
      data => {
        if(!data){
          alert('Can not signup!');
        }else{
          alert('Can signup!!Xd');

        }
      },
      err =>{
        console.log(err);
        alert('Can not signup!');
      }
    );
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
