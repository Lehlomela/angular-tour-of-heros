
/// this component (items) was created using the command -- ng generate component items
import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

/*
 * @Component is a decorator function that specifies the metadata for the component ...? 
 */
@Component({
  selector: 'app-items', 	// The component's CSS element selector.??
  // ans: matches the name of the HTML element that identifies this component within a parent component's template
  templateUrl: './items.component.html', // The location of the component's template file.
  styleUrls: ['./items.component.css'] // The location of the component's private CSS styles.
})

export /* always export the component class so you can import it elsewhere */class ItemsComponent implements OnInit {

  // item: Item = {
  // id: 1,
  // name: "Napa Cabernet",
  // decription: "is concentrated and shows a purple color with ruby hues."
  // }


  selectedItem?: Item;

  items: Item[] = [];

  // The parameter simultaneously defines a private ItemsService property and identifies it as a ItemsService injection site.
  // When Angular creates a ItemsComponent, the Dependency Injection system sets the ItemsService parameter
  // to the singleton instance of ItemsService.
  constructor(private itemService: ItemService, private messageService: MessageService) {


    // Reserve the constructor for minimal initialization such as wiring constructor parameters to properties.
    // The constructor shouldn't do anything. 
    // It certainly shouldn't call a function that makes HTTP requests to a remote server.


  }


  getItems(): void {
    // The ItemsService must wait for the server to respond, getItems() cannot return immediately with Items data,
    // and the browser will not block while the service waits.
    this.itemService.getItems().subscribe(items => this.items = items);
    // This awaits for the Observable to emit the array of items — which could happen now or several minutes from now.
    // The subscribe() method passes the emitted array to the callback, which sets the component's items property.



  }


  ngOnInit(): void {
    // good place to put initialization logic
    this.getItems();
  }

  // onSelect(item: Item): void {
  // this.messageService.add(`ItemsComponent: selected item id=${item.id}`);
  // this.selectedItem = item;
  // }

}
