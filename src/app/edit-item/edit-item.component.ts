import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  providers: [ItemService]
})

export class EditItemComponent implements OnInit {
  @Input() selectedItem;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  beginUpdatingItem(itemToUpdate){
    this.itemService.updateItem(itemToUpdate);
  }

  beginDeletingItem(itemToDelete){
   if(confirm("Are you sure you want to delete this item from the inventory?")){
     this.itemService.deleteItem(itemToDelete);
   }
 }

}
