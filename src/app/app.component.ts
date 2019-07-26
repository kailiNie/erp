import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http"
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    validateForm: FormGroup;

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
                this.message.create('success', `${message}`);
            }else{
                this.message.create('error', `${message}`);
            }
         })
      }

    }
  
    constructor(private fb: FormBuilder,
                private http:HttpClient,
                private message: NzMessageService) {}
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      });
    }
}
