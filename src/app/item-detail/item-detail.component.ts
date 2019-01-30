import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {

  itemId: number;
  itemToDisplay: Item;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = parseInt(urlParameters['id']);
    });
    this.itemToDisplay = this.itemService.getItemById(this.itemId);
  }

}
