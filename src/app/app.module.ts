import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './components/auth/auth.module';
import { HomeModule } from './components/home/home.module';
import { BookingModule } from './components/booking/booking.module';
import { BaseLayoutModule } from './layouts/base-layout/base-layout.module';
import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';

import { AppComponent } from './app.component';

import { httpInterceptorProviders } from './interceptors';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BaseLayoutModule,
    LoginLayoutModule,
    AuthModule,
    FormsModule,
    BookingModule,
    HomeModule,
  ],
  providers: [
    httpInterceptorProviders, {provide: LOCALE_ID, useValue: 'en-US'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
