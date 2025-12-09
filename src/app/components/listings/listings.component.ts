import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/listing.model';
import { ListingService } from '../../services/listing.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
selector: 'app-listings',
imports : [FormsModule, CommonModule],
templateUrl: './listings.component.html',
styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
all: Listing[] = [];
filtered: Listing[] = [];
searchTerm = '';
transactionFilter: 'Rent' | 'Buy' | 'Sale' | '' = '';
selectedCity = '';
cities: string[] = [];
selectedListing?: Listing;


constructor(private listingService: ListingService) {}


ngOnInit(): void {
this.listingService.getAll().subscribe(data => {
this.all = data;
this.filtered = data;
this.cities = Array.from(new Set(data.map(d => d.city)));
});
}


applyFilters() {
const term = this.searchTerm.trim();
this.listingService.search(term, this.transactionFilter || undefined, this.selectedCity || undefined)
.subscribe(r => this.filtered = r);
}


clearFilters() {
this.searchTerm = '';
this.transactionFilter = '' as any;
this.selectedCity = '';
this.filtered = this.all;
}


openDetail(listing: Listing) {
this.selectedListing = listing;
// Use Bootstrap modal via template-driven markup
}
}