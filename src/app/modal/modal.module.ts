import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/app-common.module';
import { AppCommonService } from '../common/app-common.service';
import { AddGoodsModalModule } from './add-goods-modal/add-goods-modal.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers:[AppCommonService],
  declarations: [

  ],
  exports :[
    AddGoodsModalModule
  ]
})
export class ModalModule { }
