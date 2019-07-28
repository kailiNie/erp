import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGoodsModalComponent } from './add-goods-modal.component';
import { AppCommonModule } from 'src/app/common/app-common.module';
import { MyServiceService } from './my-service.service';
import { AppCommonService } from 'src/app/common/app-common.service';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],
  declarations: [
    AddGoodsModalComponent
  ],
  //导出可以导出组件
  exports :[
    AddGoodsModalComponent
  ],
  providers:[MyServiceService,AppCommonService]
})
export class AddGoodsModalModule { }
