import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodListComponent } from './good-list.component';
import { AppCommonModule } from '../common/app-common.module';
import { AppCommonService } from '../common/app-common.service';
import { GoodListService } from './good-list.service';
import { ModalModule } from '../modal/modal.module';
 
@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    ModalModule,
  ],
  declarations: [
    GoodListComponent,
     
  ],
  providers:[AppCommonService,GoodListService]
})
export class GoodListModule { }
