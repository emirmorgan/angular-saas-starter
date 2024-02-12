import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/home/navbar/navbar.component';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { FeaturesComponent } from '../../components/home/features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
