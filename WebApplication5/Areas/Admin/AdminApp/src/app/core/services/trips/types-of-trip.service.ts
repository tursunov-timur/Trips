import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeOfTrip } from '../../models/trips/type-of-trip.model';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TypesOfTripService {

  constructor(private http: HttpClient) { }

  getTypesOfTripList(): Observable<TypeOfTrip[]>  {
    return this.http.get<TypeOfTrip[]>('/api/TypesOfTrip/getTypesOfTripList/');
  }

  getTypeOfTripById(id: string): Observable<TypeOfTrip>  {
    return this.http.get<TypeOfTrip>('/api/TypesOfTrip/getTypeOfTripById/' + id);
  }

  createTypeOfTrip(activity: TypeOfTrip): Observable<TypeOfTrip> {
    return this.http.post<TypeOfTrip>('/api/TypesOfTrip/createTypeOfTrip', activity);
  }

  updateTypeOfTrip(activity: TypeOfTrip): Observable<TypeOfTrip> {
    return this.http.post<TypeOfTrip>('/api/TypesOfTrip/updateTypeOfTrip', activity);
  }

  deleteTypeOfTrip(id: string): Observable<TypeOfTrip[]> {
    return this.http.get<TypeOfTrip[]>('/api/TypesOfTrip/deleteTypeOfTrip/' + id);
  }

  getKeyValueTypesOfTripList(): Observable<KeyValue<string, string>[]>  {
    return this.http.get<KeyValue<string, string>[]>('/api/TypesOfTrip/getKeyValueTypeOfTripsList/');
  }
}
