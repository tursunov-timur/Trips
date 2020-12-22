import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../models/trips/activity.model';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  getActivitiesList(): Observable<Activity[]>  {
    return this.http.get<Activity[]>('/api/Activities/getActivitiesList/');
  }

  getActivityById(id: string): Observable<Activity>  {
    return this.http.get<Activity>('/api/Activities/getActivityById/' + id);
  }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>('/api/Activities/createActivity', activity);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>('/api/Activities/updateActivity', activity);
  }

  deleteActivity(id: string): Observable<Activity[]> {
    return this.http.get<Activity[]>('/api/Activities/deleteActivity/' + id);
  }

  getKeyValueActivityList(): Observable<KeyValue<string, string>[]>  {
    return this.http.get<KeyValue<string, string>[]>('/api/Activities/getKeyValueActivitiesList/');
  }
}
