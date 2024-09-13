import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eat-and-drink-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eat-and-drink-page.component.html',
  styleUrl: './eat-and-drink-page.component.css'
})
export class EatAndDrinkPageComponent {

  activeTab: string = 'barMenu';  // Default active tab

  // Mock data for All-Day Bar Menu and Dinner Menu
  barMenu = [
    { name: 'Pirate Punch', description: 'A fruity rum punch with a pirate twist.', price: 12.99 },
    { name: 'Fish & Chips', description: 'Crispy battered fish served with fries.', price: 15.99 },
    { name: 'Grilled Shrimp', description: 'Grilled shrimp skewers with garlic butter.', price: 18.99 }
  ];

  dinnerMenu = [
    { name: 'Steak & Lobster', description: 'Grilled steak served with a lobster tail.', price: 35.99 },
    { name: 'Lamb Chops', description: 'Tender lamb chops served with mint sauce.', price: 29.99 },
    { name: 'Seafood Platter', description: 'A selection of fresh seafood with dipping sauces.', price: 42.99 }
  ];

  // Method to switch between tabs
  selectTab(tab: string) {
    this.activeTab = tab;
  }

}
