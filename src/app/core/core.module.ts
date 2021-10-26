import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { coreInterceptors } from './interceptors/index';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [
    //interceptors
    coreInterceptors,
  ]
})

/**
 * Chứa singleton service, base layout, những thứ khác mà cần cho ứng dụng lúc startup
 */
export class CoreModule { }
