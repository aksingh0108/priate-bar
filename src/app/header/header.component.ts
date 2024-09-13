import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  open=true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.open=!this.open;
  }
  onClose(){
    this.isMenuOpen = !this.isMenuOpen;
    this.open=!this.open;
  }
}
