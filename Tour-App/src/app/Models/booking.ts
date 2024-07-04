export interface Booking {
    id: number;
    userId: number;
    tourId?: number;
    hotelId?: number;
    bookingDate: Date;
    status: string;
  }
  