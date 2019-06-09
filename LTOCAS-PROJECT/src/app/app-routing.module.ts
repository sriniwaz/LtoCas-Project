import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginpageComponent } from './admin-loginpage/admin-loginpage.component';
import { HomeComponent } from './home/home.component';
import { ClientLoginpageComponent } from './client-loginpage/client-loginpage.component';
import { UserLoginpageComponent } from './user-loginpage/user-loginpage.component';

const routes: Routes =[
  { path:'home-page/admin-loginpage',component:AdminLoginpageComponent},
  { path:'home-page/client-loginpage',component:ClientLoginpageComponent},
  { path:'home-page/user-loginpage',component:UserLoginpageComponent},
  {path:'home-page',component:HomeComponent},
  {path:'',redirectTo:'/home-page',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminLoginpageComponent,HomeComponent,ClientLoginpageComponent,UserLoginpageComponent]

