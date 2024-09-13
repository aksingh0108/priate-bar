import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whats-on',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whats-on.component.html',
  styleUrl: './whats-on.component.css'
})
export class WhatsOnComponent {

   // Simulated event data
   events = [
    {
      title: 'Happy Hour',
      description: 'Join us every weekday from 4 PM to 6 PM for amazing drink specials!',
      date: new Date(),
      image: 'event1.jpg'
    },
    {
      title: 'Live Music Night',
      description: 'Enjoy live music performances every Saturday from local and international artists.',
      date: new Date('2024-09-10'),
      image: 'event2.jpg'
    },
    {
      title: 'Trivia Night',
      description: 'Put your knowledge to the test every Thursday at 7 PM with our fun trivia challenges!',
      date: new Date('2024-09-15'),
      image: 'event3.jpg'
    },
    {
      title: 'Pirate Party',
      description: 'Dress up like a pirate and join us for a themed night of fun, games, and prizes!',
      date: new Date('2024-09-20'),
      image: 'event4.jpg'
    }
  ];

}
