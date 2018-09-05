import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ChatComponent } from './chat/chat.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ChatComponent,
    NotfoundComponent,
    RegisterComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpErrorHandler,MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule {


}
