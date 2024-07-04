import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Tour } from '../Models/tours'; 
import { TourService } from '../services/tours.service'; 

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourService) {} 

  ngOnInit() {
    this.tourService.getTours().subscribe((tours) => {
      this.tours = tours;
    })
  }
}
