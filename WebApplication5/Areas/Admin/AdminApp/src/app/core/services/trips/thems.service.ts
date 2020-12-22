import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../models/trips/activity.model';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemsService {

  constructor(private http: HttpClient) { }

  getThemsList(): Observable<Activity[]>  {
    return this.http.get<Activity[]>('/api/Thems/getThemsList/');
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>('/api/Thems/updateActivity', activity);
  }
}
