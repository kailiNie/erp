import { Component, OnInit, ViewChild } from '@angular/core';
import { AppCommonService } from '../common/app-common.service';
import { GoodListService } from './good-list.service';
import { AddGoodsModalComponent } from '../modal/add-goods-modal/add-goods-modal.component';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.css']
})
export class GoodListComponent implements OnInit {
  
  public goodList : Array<any>  = [];
  public loading : boolean = true;
  @ViewChild('goodlistmodal') goodlistmodal : AddGoodsModalComponent;

  constructor(
    private appCommonSer : AppCommonService,
    private mySer : GoodListService
  ) { }



  //初始化查询数据库商品列表
  ngOnInit() {
     this.getGoodList();
  }

  //获取商品列表
  getGoodList(){
    this.loading = true;
    this.mySer.getGoodList().subscribe(item =>{
      this.appCommonSer.sucMessage('查询商品列表成功');
      const { data } = item;
      this.goodList = data;
      this.loading = false;
    })
  }
  //刷新
  doRefresh(){
    this.getGoodList();
  }

  //添加
  doAdd(){
    this.goodlistmodal.open();
  }
  //旋转
  doSelect(item){
    item.status =  item.status == 'success' ? 'default': 'success';
  }
  //新增
  doAddGoodsModal(){
    this.getGoodList();
  };
  

}
