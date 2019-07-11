import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ProductsComponent} from './products/products.component';

const ModuleRoutes: Routes = [
    {
        path: 'contact', component: ContactComponent,
        
    },
    {
        path:'products', component : ProductsComponent,
    }
];
export const moduleRouting: ModuleWithProviders = RouterModule.forChild(ModuleRoutes)