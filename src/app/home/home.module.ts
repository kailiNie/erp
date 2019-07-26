import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/app-common.module';
import { HomeComponent } from './home.component';
import { IndexRouterModule } from './index-router.module';

@NgModule({
  imports: [
    AppCommonModule,
    IndexRouterModule
  ],
  declarations: [
      HomeComponent
  ],
  exports:[
    HomeComponent,
    IndexRouterModule,
  ]
})
export class HomeModule { }
