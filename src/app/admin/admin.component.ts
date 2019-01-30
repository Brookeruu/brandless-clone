import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ItemService]
})

export class AdminComponent {

  constructor(private itemService: ItemService) { }


  submitForm(title: string, category: string, price: number) {
  var newItem: Item = new Item(title, category, price);
  this.itemService.addItem(newItem);
  }
}
