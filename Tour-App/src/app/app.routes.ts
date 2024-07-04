import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HotelListComponent } from './hotels/hotels.component';
import { TourComponent } from './tour-list/tour-list.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './auth/login/login.component';
import { registerComponent } from ./auth/register.component
import { authGuard } from './guards/auth.guard'; 
import { AdminComponent } from './admin/admin.component';
import { ManageToursComponent } from './admin/tours/manage-tours/manage-tours.component';
import { ManageHotelsComponent } from './admin/hotels/manage-hotels/manage-hotels.component';
import { TourListComponent } from './tours/tours.component';
import { register } from 'module';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: registerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'adminTours', component: ManageToursComponent },
    { path: 'adminHotels', component: ManageHotelsComponent },
  ]},

  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'tours', component: TourListComponent, canActivate: [authGuard] },
  { path: 'hotels', component: HomeComponent, canActivate: [authGuard] },
  { path: 'booking/:type/:name', component: BookingComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

