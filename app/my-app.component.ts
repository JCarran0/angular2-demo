import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{ title }}</h1>
  <car-parts></car-parts>`
})
export class MyAppComponent {
  title = 'Ultra Racing';
 };