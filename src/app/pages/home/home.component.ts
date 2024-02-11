import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/home/navbar/navbar.component';
import { HeroComponent } from '../../components/home/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
