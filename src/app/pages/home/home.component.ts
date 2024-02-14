import { Component } from '@angular/core';

// Components
import { NavbarComponent } from '../../components/home/navbar/navbar.component';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { FeaturesComponent } from '../../components/home/features/features.component';
import { PricingComponent } from '../../components/home/pricing/pricing.component';
import { FooterComponent } from '../../components/home/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    PricingComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
