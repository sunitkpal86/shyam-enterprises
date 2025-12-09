import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Listing } from '../models/listing.model';

@Injectable({ providedIn: 'root' })
export class ListingService {
private data: Listing[] = [
{
id: 1,
title: 'Sunny 2BHK Apartment',
type: 'Apartment',
transaction: 'Rent',
price: 15000,
bedrooms: 2,
bathrooms: 2,
areaSqFt: 900,
city: 'Mumbai',
neighborhood: 'Andheri East',
imageUrl: 'https://picsum.photos/seed/apt1/600/400',
shortDesc: 'Furnished 2BHK close to station, amenities included.',
featured: true
},
{
id: 2,
title: 'Spacious 4 BHK House',
type: 'House',
transaction: 'Buy',
price: 12000000,
bedrooms: 4,
bathrooms: 4,
areaSqFt: 2800,
city: 'Bengaluru',
neighborhood: 'Whitefield',
imageUrl: 'https://picsum.photos/seed/house1/600/400',
shortDesc: 'Large family home with garden and parking.',
featured: false
},
{
id: 3,
title: '1BHK Cozy Studio',
type: 'Apartment',
transaction: 'Sale',
price: 3500000,
bedrooms: 1,
bathrooms: 1,
areaSqFt: 450,
city: 'Delhi',
neighborhood: 'Saket',
imageUrl: 'https://picsum.photos/seed/apt2/600/400',
shortDesc: 'Ideal for professionals, gated complex.',
featured: false
},
{
id: 4,
title: '3BHK Rooms',
type: 'Apartment',
transaction: 'Rent',
price: 12000,
bedrooms: 2,
bathrooms: 2,
areaSqFt: 850,
city: 'Delhi',
neighborhood: 'Paharganj',
imageUrl: 'https://picsum.photos/seed/apt4/600/400',
shortDesc: 'Ideal for professionals, gated complex.',
featured: false
},
{
id: 5,
title: '1BHK Rooms',
type: 'Apartment',
transaction: 'Rent',
price: 10000,
bedrooms: 1,
bathrooms: 1,
areaSqFt: 450,
city: 'Delhi',
neighborhood: 'Pahar Ganj',
imageUrl: 'https://picsum.photos/seed/apt5/600/400',
shortDesc: 'Ideal for professionals, gated complex.',
featured: false
},
{
id: 6,
title: '1RK Room',
type: 'Apartment',
transaction: 'Rent',
price: 8000,
bedrooms: 1,
bathrooms: 1,
areaSqFt: 350,
city: 'Delhi',
neighborhood: 'Pahar Ganj',
imageUrl: 'https://picsum.photos/seed/apt6/600/400',
shortDesc: 'Ideal for professionals, gated complex.',
featured: false
}
];
constructor() {}


getAll(): Observable<Listing[]> {
return of(this.data);
}


getById(id: number): Observable<Listing | undefined> {
return of(this.data.find(l => l.id === id));
}

// Add search / filter helpers
search(term: string, transaction?: string, city?: string): Observable<Listing[]> {
const t = (term || '').toLowerCase();
const res = this.data.filter(l => {
const matchesTerm = !t || l.title.toLowerCase().includes(t) || (l.neighborhood || '').toLowerCase().includes(t);
const matchesTransaction = !transaction || l.transaction === transaction;
const matchesCity = !city || l.city === city;
return matchesTerm && matchesTransaction && matchesCity;
});
return of(res);
}
}
