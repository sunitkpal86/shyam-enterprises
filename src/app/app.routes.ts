import { Routes } from '@angular/router';
import { ListingsComponent } from './components/listings/listings.component';
import { About } from './components/about/about';

export const routes: Routes = [
    { path : "", component: ListingsComponent},
    { path : "about", component : About}
];
