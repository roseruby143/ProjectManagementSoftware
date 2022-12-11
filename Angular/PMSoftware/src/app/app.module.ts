import { LoginComponent } from './authentication/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthModule } from './authentication/auth.module';
import { ClientModule } from './client/client.module';
import { MeetingModule } from './meetings/meeting.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login' , component: LoginComponent},
      {path: '' , redirectTo: 'login', pathMatch:'full'},
      {path: '**' , redirectTo: 'welcome', pathMatch:'full'},
    ]),
    AppRoutingModule,
    AuthModule,
    ClientModule,
    MeetingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
