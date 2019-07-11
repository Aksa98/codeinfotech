import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import {moduleRouting} from './body.routing';

@NgModule({
  declarations: [ContactComponent, ProductsComponent],
  imports: [
    CommonModule,
    moduleRouting
  ]
})
export class BodyModule { }
