import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {

  itemId: string;
  itemToDisplay: Item;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.itemId = urlParametersArray['id'];
    });
    this.itemService.getItemById(this.itemId).subscribe(dataLastEmittedFromObserver => {
      this.itemToDisplay = new Item(dataLastEmittedFromObserver.title, dataLastEmittedFromObserver.category, dataLastEmittedFromObserver.price)
      console.log(this.itemToDisplay);
  })
  }

}
