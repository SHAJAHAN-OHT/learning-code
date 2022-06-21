import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfCreationModule } from './pdf-creation/pdf-creation.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfCreationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
