import { Component } from '@angular/core';
import { CarPart } from './carPart';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls: ['app/car-parts.component.css']
})
export class CarPartsComponent {
  carParts: CarPart[];

  ngOnInit() {
    this.carParts = CARPARTS;
  }

  totalCarParts() {
    let sum = 0;
    for (let part of this.carParts) {
      sum += part.inStock;
    }
    return sum;
  };
};