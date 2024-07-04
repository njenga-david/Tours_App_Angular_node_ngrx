import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Hotel } from '../Models/hotels';
import { HotelService } from '../services/hotels.service'; 

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = []

  constructor(private hotelService: HotelService) {} 

  ngOnInit() {
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels
    })
  }
}