import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginOutcomeComponent } from './login-outcome/login-outcome.component';
import { UserTodosComponent } from './user-todos/user-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginOutcomeComponent,
    UserTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
