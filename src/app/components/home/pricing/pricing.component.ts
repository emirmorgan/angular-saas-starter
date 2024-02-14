import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.sass',
})
export class PricingComponent {
  isAnnually: boolean = false;
  plusPrice: number = 10;
  proPrice: number = 25;

  getDiscountedPrice(price: number): number {
    return this.isAnnually ? price * 0.8 : price;
  }
}
