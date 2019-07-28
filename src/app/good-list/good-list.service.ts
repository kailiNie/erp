import { Injectable } from '@angular/core';
import { AppCommonService } from '../common/app-common.service';

@Injectable({
  providedIn: 'root'
})
//商品列表服务
export class GoodListService {

  constructor(
    private appCommonSer : AppCommonService
  ) { }

  //查询商品列表
  public getGoodList = () =>{
    return this.appCommonSer.appHttp({path:'/erp/goods/goodsList'})
  }
   
}
