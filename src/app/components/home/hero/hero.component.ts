import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { Company } from '../../../models/company';

@Component({
  selector: 'section-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass',
})
export class HeroComponent {
  companies: Company[] = [
    {
      name: 'Nike',
      src: '../../../../assets/logos/nike.svg',
    },
    {
      name: 'Stripe',
      src: '../../../../assets/logos/stripe.svg',
    },
    {
      name: 'Disney',
      src: '../../../../assets/logos/disney.svg',
    },
    {
      name: 'Coca-Cola',
      src: '../../../../assets/logos/coca-cola.svg',
    },
    {
      name: 'Nasa',
      src: '../../../../assets/logos/nasa.svg',
    },
  ];
}
