import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {NavigationComponent} from "./component/navigation/navigation.component";
import {ErrorComponent} from "./component/error/error.component";
import { FooterComponent } from './component/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ErrorComponent,
    FooterComponent,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
