import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-functions-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './functions-page.component.html',
  styleUrl: './functions-page.component.css'
})
export class FunctionsPageComponent {
 // Simulated package data

 packages = [
  {
    title: 'Birthday Party Package',
    description: 'Celebrate your birthday with us. Includes catering, drinks, and a dedicated event space for up to 20 guests.',
    price: 499.99,
    image: 'function1.jpg'
  },
  {
    title: 'Corporate Event Package',
    description: 'Host your next corporate gathering. We offer a professional space with catering for up to 50 guests.',
    price: 999.99,
    image: 'function2.jpg'
  },
  {
    title: 'Private Party Package',
    description: 'Our private party package includes exclusive access to our event space, catering, and bar service for up to 30 guests.',
    price: 799.99,
    image: 'function3.jpg'
  }
];
 
}
