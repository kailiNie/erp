import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app.router.module';
import { AppCommonModule } from './common/app-common.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
 

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoginModule,
    HomeModule,
    AppRoutingModule,
    AppCommonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
