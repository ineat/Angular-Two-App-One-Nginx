import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';

@NgModule({
  declarations: [AppComponent, RouteOneComponent, RouteTwoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
