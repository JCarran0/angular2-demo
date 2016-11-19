import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent } from './my-app.component';
import { CarPartsComponent } from './car-parts.component';

@NgModule({
  declarations: [
    MyAppComponent,
    CarPartsComponent
  ],
  imports: [ BrowserModule, FormsModule ],
  bootstrap: [ MyAppComponent ]
})
class AppModule { };

platformBrowserDynamic()
  .bootstrapModule(AppModule);