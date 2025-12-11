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

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    About,
    Services,
    Contact,
    Commentaire
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
