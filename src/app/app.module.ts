import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';

import { FormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- ngModel
import {HttpClientModule } from '@angular/common/http'
// The most important @NgModule decorator annotates the top-level AppModule class
@NgModule({
  declarations: [
    // every component must be declared in exactly one NgModule
    AppComponent,
    ItemsComponent,
    ItemDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    // making these available everywhere in the application
    BrowserModule,
    FormsModule,// <-- ngModel
    AppRoutingModule, // <-- <router-outlet>  
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
