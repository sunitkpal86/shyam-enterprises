export interface Listing {
id: number;
title: string;
type: 'House' | 'Apartment' | 'Plot';
transaction: 'Rent' | 'Buy' | 'Sale';
price: number; // currency units
bedrooms: number;
bathrooms: number;
areaSqFt: number;
city: string;
neighborhood?: string;
imageUrl?: string;
shortDesc?: string;
featured?: boolean;
}