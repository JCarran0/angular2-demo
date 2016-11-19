import { Component } from '@angular/core';

@Component({
  selector: 'car-parts',
  template: `<p>There are {{totalCarParts()}} total parts in stock</p>
    <li *ngFor="let carPart of carParts">
      <h2>{{carPart.name | uppercase}}</h2>
      <p>{{carPart.description}}</p>
      <p>{{carPart.price | currency:'USD':true}}</p>
      <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in stock</p>
      <p *ngIf="carPart.inStock === 0">Out of stock</p>
    </li>`
})
export class CarPartsComponent {
  carParts = [
    {
      id: 1,
      name: 'Super Tires',
      description: 'These tires are the very best',
      inStock: 5,
      price: 300
    },
    {
      id: 2,
      name: 'Reinforced shocks',
      description: 'Shocks made from kryptonite',
      inStock: 4,
      price: 750
    },
    {
      id: 3,
      name: 'Padded seats',
      description: 'Super soft seats for a soft ride',
      inStock: 0,
      price: 800
    }
  ];

  totalCarParts() {
    let sum = 0;
    for (let part of this.carParts) {
      sum += part.inStock;
    }
    return sum;
  };
};