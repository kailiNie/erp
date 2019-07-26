//公共module ./用于引入公共模块 以及公共服务
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
      
  ],
  providers:  [{ provide: NZ_I18N, useValue: zh_CN }],
  //导出公共服务
  exports :[
    CommonModule,
    NgZorroAntdModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AppCommonModule { }
