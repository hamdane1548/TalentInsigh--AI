import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './component/navbar/navbar';
import { Home } from './ui/home/home';
import { About } from './ui/about/about';
import { Services } from './ui/services/services';
import { Contact } from './ui/contact/contact';
import { MatIconModule } from '@angular/material/icon';
import { Commentaire } from './component/commentaire/commentaire';
import { Footer } from './component/footer/footer';
import { Login } from './ui/login/login';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    About,
    Services,
    Contact,
    Commentaire,
    Footer,
    Login,
    MainLayout,
    AuthLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
