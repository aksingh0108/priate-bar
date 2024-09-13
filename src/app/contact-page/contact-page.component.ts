import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  onSubmit(event: Event) {
    event.preventDefault(); 
    alert("Thank you for reaching out! We'll get back to you shortly.");
  }

}
