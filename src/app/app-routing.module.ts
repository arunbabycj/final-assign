import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ChatComponent } from './chat/chat.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'register', component:HeroesComponent},
  {path:'menu', component:MenuComponent},
  {path:'chat', component:ChatComponent},
  {path:'404', component:NotfoundComponent},
  {path:'**', redirectTo:'404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
