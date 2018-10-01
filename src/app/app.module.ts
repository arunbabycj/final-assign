import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MatToolbarModule,MatFormFieldModule,
         MatInputModule,
         MatOptionModule,
         MatSelectModule,
         MatIconModule,
         MatButtonModule,
         MatCardModule,
         MatTableModule,
         MatDividerModule,
         MatSnackBarModule} from '@angular/material';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login/login.component';
// import { MenuComponent } from './menu/menu.component';
// import {NotfoundComponent} from './notfound/notfound.component';
// import { RegisterComponent } from './register/register.component';

import { ChatComponent } from './component/chat/chat.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { ListComponent } from './component/list/list.component';

import { IssueService } from './issue.service';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'}),
  ReactiveFormsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  FormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
