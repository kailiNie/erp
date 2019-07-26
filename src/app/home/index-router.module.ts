//路由MODULE
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home.component';
 
const routes : Routes  = [
    {path : 'home',component:HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
  exports:[RouterModule]
})
export class IndexRouterModule { }
