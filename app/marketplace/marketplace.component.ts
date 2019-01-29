import { Component } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent  {

  constructor(private router: Router){}

  items: Item[] = [
    new Item("Granola Bar",
             "Snacks",
             3,
             1),
    new Item("Oatmeal",
             "Breakfast",
             3,
             2),
    new Item("Almond Butter",
             "Nuts & Seed Butters",
             3,
             3),
  ];

  goToDetailPage(clickedItem: Item) {
    this.router.navigate(['items', clickedItem.id])
  };


}
