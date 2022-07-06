import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  // This component only receives a hero object through its hero property and displays it.
  // @Input()
  item?: Item;

  constructor(private route: ActivatedRoute, //  holds information about the route to this instance of the ItemsComponent
    private location: Location,  //  is an Angular service for interacting with the browser. 
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot
      .paramMap // is a dictionary of route parameter values extracted from the URL
      .get('id'));


    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }
}
