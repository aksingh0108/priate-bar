import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { EatAndDrinkPageComponent } from "./eat-and-drink-page/eat-and-drink-page.component";
import { WhatsOnComponent } from "./whats-on/whats-on.component";
import { FunctionsPageComponent } from "./functions-page/functions-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, EatAndDrinkPageComponent, WhatsOnComponent, FunctionsPageComponent, ContactPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pirate-bar-website-wesign-and-commissioning';
}
