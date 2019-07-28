import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
//公共服务封装公共方法
@Injectable({
  providedIn: 'root'
})
export class AppCommonService {

  constructor( 
    private http:HttpClient,
    private message: NzMessageService) {

   

   }

  //请求默认是get请求 路径/
  public appHttp =(param?):Observable<any> =>{
        const {method = 'get',path,bodyParam=''} = param;
        if(method == 'get'){
          return  this.http.get(path);
        }else{
          return  this.http.post(path,bodyParam);
        }
     }


     //成功提升
     public sucMessage =(message) =>{
      this.message.create('success', `${message}`);
     }

     //成功提升
     public  errMessage =(message) =>{
      this.message.create('error', `${message}`);
     }
  
}
