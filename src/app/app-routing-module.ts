import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './ui/home/home';
import {MainLayout} from './layouts/main-layout/main-layout';
import {AuthLayout} from './layouts/auth-layout/auth-layout';
import {Login} from './ui/login/login';

const routes: Routes = [
  {
    path:"",
    component:MainLayout,
    children:[
      {path:'',component: Home},

    ]
  },
  {
    path:"auth",
    component:AuthLayout,
    children:[
      {
        path: 'login',
        component: Login
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
