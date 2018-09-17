import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalStorageService } from './localstorage.service';
import { SessionStorageService } from './sessionstorage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [UserService, LocalStorageService, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
