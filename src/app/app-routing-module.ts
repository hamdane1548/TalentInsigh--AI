import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './ui/home/home';
import {About} from './ui/about/about';
import {Contact} from './ui/contact/contact';

const routes: Routes = [
  {path:"",component:Home},
  {path:'about', component: About },
  {path:'contact', component: Contact }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
