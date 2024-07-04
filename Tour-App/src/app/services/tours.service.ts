import { Injectable } from '@angular/core';
import { Tour } from '../Models/tours'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private tours: Tour[] = [
    { 
      id: 1,
      name: 'Buffalo Springs - Samburu', 
      description: 'Explore the city with our guided tours.',
      price: 1000,
      startDate: new Date('2024-07-10'),
      endDate: new Date('2024-07-15'),
      location: 'Samburu, Kenya',
      imageUrl: 'assets/buffaloSprings.jpg'
    },
    { 
      id: 2,
      name: 'Camp Ndunda - Embu', 
      description: 'Relax and enjoy the beautiful scenery in the environs of Camp Ndunda.',
      price: 3500,
      startDate: new Date('2024-08-05'),
      endDate: new Date('2024-08-10'),
      location: 'Embu, Kenya',
      imageUrl: 'assets/campNdunda.jpg'
    },
    { 
      id: 3,
      name: 'Camp Ngare - Nanyuki', 
      description: 'Discover breathtaking mountain views.',
      price: 2500,
      startDate: new Date('2024-09-15'),
      endDate: new Date('2024-09-20'),
      location: 'Nanyuki, Kenya',
      imageUrl: 'assets/campNgare.jpg'
    }
  ];

  getTours(): Observable<Tour[]> {
    return of(this.tours);
  }

  getTourByName(tourName: string): Observable<Tour | null> {
    const tour = this.tours.find(t => t.name === tourName);
    return of(tour ?? null);
  }
}
