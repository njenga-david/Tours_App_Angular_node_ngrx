import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tour } from '../Models/tours'; 
import { Hotel } from '../Models/hotels'; 

@Component({
  selector: 'app-housing',
  standalone: true,
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css'],
  imports: [CommonModule]
})
export class HousingComponent {
  @Input() item: Tour | Hotel | null = null;
}
