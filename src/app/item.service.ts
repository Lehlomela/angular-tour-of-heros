import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Item } from './item';
import { MessageService } from './message.service';
import { ITEMS } from './mock-items';

@Injectable({
  // You must make this service available to the dependency injection system before Angular can inject it 
  // into the ItemsComponent by registering a provider. A provider is something that can create or deliver a service;
  // in this case, it instantiates the ItemService class to provide the service.

  // To make sure that this service can provide this service, register it with the injector,
  // which is the object that is responsible for choosing and injecting the provider where the application requires it.

  // By default, the Angular CLI command ng generate service registers a provider with the root
  //  injector for your service by including provider metadata, that is providedIn: 'root' in the @Injectable() decorator.
  providedIn: 'root'

  // When you provide the service at the root level, Angular creates a single, 
  // shared instance of ItemService and injects into any class that asks for it. Registering the provider in the @Injectable 
  // metadata also allows Angular to optimize an application by removing the service if it turns out not to be used after all.

  // to learn more about providers: https://angular.io/guide/providers
  // injectors: https://angular.io/guide/dependency-injection

})

export class ItemService {

  private customerUrl = 'http://localhost:8080/api/customers/'

  getItem(id: number) {
    // no error handling
    const item = ITEMS.find(item => item.id == id);
    this.log(`ItemService: fetched item id=${id}`);
    return of(item);
  }



  constructor(private messageService: MessageService,
    private http: HttpClient) { }


  getItems(): Observable<Item[]> {

    const items = this.http.get(this.customerUrl);
    const itemss = of(ITEMS);

    this.log('ItemService: fetched items');
    return itemss;
  }

  log(message: string): void {
    this.messageService.add(`itemService ${message}`)
  }


}
