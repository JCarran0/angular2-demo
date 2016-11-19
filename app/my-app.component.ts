import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{ title }}</h1>
  <h2> Welcome back {{username}}</h2>
  Edit Name: <input type="text" [(ngModel)]="username">
  <car-parts></car-parts>`
})
export class MyAppComponent {
  title = 'Ultra Racing';
  username = 'Jared'
 };