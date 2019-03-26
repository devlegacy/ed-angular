import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { NasaApiService } from './shared/services/nasa-api.service';
import { LowerCasePipe } from './shared/pipes/lower-case.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Add http modules
import { HttpClientModule } from '@angular/common/http';
import { MarsModule } from './mars/mars.module'
// import { HttpModule } from "@angular/http"; Deprecated
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AddHeaderInterceptor } from './shared/interceptors/add-header.interceptor';
import { LogResponseInterceptor } from './shared/interceptors/log-response.interceptor';
import { HttpCacheService } from './shared/services/http-cache.service';
import { CacheInterceptor } from './shared/interceptors/cache.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LowerCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MarsModule
  ],
  providers: [
    NasaApiService,
    HttpCacheService,
    {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
