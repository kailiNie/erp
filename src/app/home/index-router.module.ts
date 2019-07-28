//路由MODULE
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GoodListComponent } from '../good-list/good-list.component';
 
const routes : Routes  = [
    {path : 'home',component:HomeComponent,
    children :[
        {path:'goodlist',component:GoodListComponent}
    ]  
  }
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
