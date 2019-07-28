import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';
import { AppCommonService } from '../common/app-common.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    validateForm: FormGroup;
    constructor(private fb: FormBuilder,
        private http:HttpClient,
        private message: NzMessageService,
        private router : Router,
        private appCommon:AppCommonService
       ) {}
        
    submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      };
      if(this.validateForm.valid){
        this.http.get("/erp/user/login")
        .subscribe((res :any)=>{  
            const { status,message } = res;
            if(status == 100){
              this.appCommon.sucMessage(message);
                // this.message.create('success', `${message}`);
                this.router.navigate(['home']);
            }else{
                this.message.create('error', `${message}`);
            }
         })
      }

    }
  
 
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      });
    }

}
