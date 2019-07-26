import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //自己填好LoginModule路径
    { path:'login',loadChildren:'./login/login.module#LoginModule' },
    { path:'home',loadChildren:'./home/home.module#HomeModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}