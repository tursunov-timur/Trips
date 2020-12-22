import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../../models/trips/destination.model';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) { }

  getDestinationsList(): Observable<Destination[]>  {
    return this.http.get<Destination[]>('/api/Destinations/getDestinationsList/');
  }

  getDestinationById(id: string): Observable<Destination>  {
    return this.http.get<Destination>('/api/Destinations/getDestinationById/' + id);
  }

  createDestination(activity: Destination): Observable<Destination> {
    return this.http.post<Destination>('/api/Destinations/createDestination', activity);
  }

  updateDestination(activity: Destination): Observable<Destination> {
    return this.http.post<Destination>('/api/Destinations/updateDestination', activity);
  }

  deleteDestination(id: string): Observable<Destination[]> {
    return this.http.get<Destination[]>('/api/Destinations/deleteDestination/' + id);
  }

  getKeyValueActivityList(): Observable<KeyValue<string, string>[]>  {
    return this.http.get<KeyValue<string, string>[]>('/api/Destinations/getKeyValueDestinationsList/');
  }
}
