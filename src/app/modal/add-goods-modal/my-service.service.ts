import { Injectable } from '@angular/core';
import { AppCommonService } from 'src/app/common/app-common.service';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private commonService :AppCommonService
  ) { 
  }
     //添加商品
   addGoods = (goods) =>{
      let param = {
        path:'/erp/goods/addGood',
        method : 'post',
        bodyParam :{
          name:goods
        }
      };
    return  this.commonService.appHttp(param)
    }
}
