import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
 
import { AppCommonModule } from '../common/app-common.module';
import { IndexRouterModule } from './index-router.module';
@NgModule({
  imports: [
    AppCommonModule,
    IndexRouterModule,
  ],
  declarations: [
     LoginComponent
  ],
  exports : [
    LoginComponent,
    IndexRouterModule
  ],
})
export class LoginModule { }
