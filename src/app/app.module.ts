import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoductListComponent } from './poduct-list/poduct-list.component';
import { PoductFormComponent } from './poduct-form/poduct-form.component';
import { PoductDetailsComponent } from './poduct-details/poduct-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PoductListComponent,
    PoductFormComponent,
    PoductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
