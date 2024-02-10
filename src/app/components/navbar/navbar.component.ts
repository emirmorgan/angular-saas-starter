import { Component, HostListener } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  isSticky: boolean = false;
  isMenuOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isSticky = scrollOffset > 80;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;
    if (screenWidth >= 768) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
