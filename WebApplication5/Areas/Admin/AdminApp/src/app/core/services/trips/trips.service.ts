import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../../models/trips/trip.model';
import { ProgramDay } from '../../models/trips/program-day';
import { PriceItem } from '../../models/trips/price-item';
import { TripFAQ } from '../../models/trips/trip-faq';
import { TripFoto } from '../../models/trips/trip-foto';
import { TripSchedule } from '../../models/trips/trip-schedule.model';
import { Activity } from '../../models/trips/activity.model';
import { Destination } from '../../models/trips/destination.model';
import { TypeOfTrip } from '../../models/trips/type-of-trip.model';

const SERVER_URL = 'http://localhost:20855/api';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  getTripsList(): Observable<Trip[]> {
    return this.http.get<Trip[]>('/api/Trips/getTripsList');
  }

  getTripById(tripId: string): Observable<Trip> {
    return this.http.get<Trip>('/api/Trips/getTripById/' + tripId);
  }

  saveTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>('/api/Trips/createTrip', trip);
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>('/api/Trips/updateTrip', trip);
  }

  deleteTrip(newsId: string): Observable<Trip[]> {
    return this.http.get<Trip[]>('/api/Trips/deleteTrip/' + newsId);
  }



  // Program Days methods
  getProgramDaysByTripId(tripId: string): Observable<ProgramDay[]>  {
    return this.http.get<ProgramDay[]>('/api/Trips/GetProgramDaysByTripId/' + tripId);
  }
  createProgramDay(programDay: ProgramDay): Observable<ProgramDay> {
    return this.http.post<ProgramDay>('/api/Trips/createProgramDay', programDay);
  }
  updateProgramDay(programDay: ProgramDay): Observable<ProgramDay> {
    return this.http.post<ProgramDay>('/api/Trips/updateProgramDay', programDay);
  }
  deleteProgramDay(programDayId: string): Observable<ProgramDay> {
    return this.http.get<ProgramDay>('/api/Trips/deleteProgramDay/' + programDayId);
  }

  // Trip prices methods
  getTripPricesByTripId(tripId: string): Observable<PriceItem[]>  {
    return this.http.get<PriceItem[]>('/api/Trips/getTripPricesByTripId/' + tripId);
  }
  createTripPrice(tripPrice: PriceItem): Observable<PriceItem> {
    return this.http.post<PriceItem>('/api/Trips/createTripPriceDesc', tripPrice);
  }
  updateTripPrice(tripPrice: PriceItem): Observable<PriceItem> {
    return this.http.post<PriceItem>('/api/Trips/updateTripPriceDesc', tripPrice);
  }
  deleteTripPrice(tripPriceId: string): Observable<PriceItem> {
    return this.http.get<PriceItem>('/api/Trips/deleteTripPriceDesc/' + tripPriceId);
  }

   // Trip FAQ methods
   getTripFAQByTripId(tripId: string): Observable<TripFAQ[]>  {
    return this.http.get<TripFAQ[]>('/api/Trips/getTripFAQByTripId/' + tripId);
  }
  createTripFAQ(tripPrice: TripFAQ): Observable<TripFAQ> {
    return this.http.post<TripFAQ>('/api/Trips/createTripFAQ', tripPrice);
  }
  updateTripFAQ(tripPrice: TripFAQ): Observable<TripFAQ> {
    return this.http.post<TripFAQ>('/api/Trips/updateTripFAQ', tripPrice);
  }
  deleteTripFAQ(tripPriceId: string): Observable<TripFAQ> {
    return this.http.get<TripFAQ>('/api/Trips/deleteTripFAQ/' + tripPriceId);
  }

  // Trip prices methods
  getTripFotosByTripId(tripId: string): Observable<TripFoto[]>  {
    return this.http.get<TripFoto[]>('/api/Trips/getTripFotosByTripId/' + tripId);
  }
  createTripFoto(tripFoto: TripFoto): Observable<TripFoto> {
    return this.http.post<TripFoto>('/api/Trips/createTripFoto', tripFoto);
  }
  updateTripFoto(tripFoto: TripFoto): Observable<TripFoto> {
    return this.http.post<TripFoto>('/api/Trips/updateTripFoto', tripFoto);
  }
  deleteTripFoto(tripFotoId: string): Observable<TripFoto> {
    return this.http.get<TripFoto>('/api/Trips/deleteTripFoto/' + tripFotoId);
  }


  // Tripschedules
  getTripSchedulesByTripId(tripId: string): Observable<TripSchedule[]>  {
    return this.http.get<TripSchedule[]>('/api/Trips/getTripSchedulesByTripId/' + tripId);
  }
  createTripSchedule(tripSchedule: TripSchedule): Observable<TripSchedule> {
    return this.http.post<TripSchedule>('/api/Trips/createTripSchedule', tripSchedule);
  }
  updateTripSchedule(tripSchedule: TripSchedule): Observable<TripSchedule> {
    return this.http.post<TripSchedule>('/api/Trips/updateTripSchedule', tripSchedule);
  }
  deleteTripSchedule(tripScheduleId: string): Observable<TripSchedule> {
    return this.http.get<TripSchedule>('/api/Trips/deleteTripSchedule/' + tripScheduleId);
  }
}
