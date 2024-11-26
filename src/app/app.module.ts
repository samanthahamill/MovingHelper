import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BoxModule } from './box/box.module';
import { BoxListComponent } from './box-list/box-list.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HomeModule, BoxModule],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {}
