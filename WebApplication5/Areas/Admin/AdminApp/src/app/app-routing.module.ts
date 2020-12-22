import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripsListComponent } from './ui/trips/trips-list/trips-list.component';
import { DestinationsListComponent } from './ui/destinations/destinations-list/destinations-list.component';
import { ActivitiesListComponent } from './ui/activities/activities-list/activities-list.component';
import { TypesOfTripListComponent } from './ui/types-of-trip/types-of-trip-list/types-of-trip-list.component';
import { ThemsListComponent } from './ui/thems/thems-list/thems-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/trips'},
  { path: 'trips', pathMatch: 'full', component: TripsListComponent},
  { path: 'activities', pathMatch: 'full', component: ActivitiesListComponent},
  { path: 'destinations', pathMatch: 'full', component: DestinationsListComponent},
  { path: 'types-of-trip', pathMatch: 'full', component: TypesOfTripListComponent},
  { path: 'thems', pathMatch: 'full', component: ThemsListComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
