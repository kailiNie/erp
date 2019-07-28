import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { AppCommonService } from 'src/app/common/app-common.service';

@Component({
  selector: 'app-add-goods-modal',
  templateUrl: './add-goods-modal.component.html',
  styleUrls: ['./add-goods-modal.component.css']
})
export class AddGoodsModalComponent implements OnInit {

  goods : string;

  @Output() modalEvent = new EventEmitter();

  constructor(
    private myService : MyServiceService,
    private commonSer : AppCommonService
  ) { }

  public isVisible : boolean = false;

  ngOnInit() {

  }


  //打开module
  open(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }

  //添加商品
  handleOk(){
    this.myService.addGoods(this.goods).subscribe(item =>{
      this.commonSer.sucMessage('新增成功');
      this.modalEvent.emit('OK')
    });
  }

}
