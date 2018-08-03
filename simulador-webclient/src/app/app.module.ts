import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { TokenInjectionService } from './services/token-injection.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInjectionService,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
