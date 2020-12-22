import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

import { TripsListComponent } from './ui/trips/trips-list/trips-list.component';
import { TripEditComponent } from './ui/trips/trip-edit/trip-edit.component';
import { DestinationsListComponent } from './ui/destinations/destinations-list/destinations-list.component';
import { DestinationEditComponent } from './ui/destinations/destination-edit/destination-edit.component';
import { ActivitiesListComponent } from './ui/activities/activities-list/activities-list.component';
import { ActivityEditComponent } from './ui/activities/activity-edit/activity-edit.component';
import { TypesOfTripListComponent } from './ui/types-of-trip/types-of-trip-list/types-of-trip-list.component';
import { TypesOfTripEditComponent } from './ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component';
import { ConfirmModalComponent } from './ui/_modals/confirm-modal/confirm-modal.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ThemsListComponent } from './ui/thems/thems-list/thems-list.component';
import { ThemEditComponent } from './ui/thems/them-edit/them-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsListComponent,
    TripEditComponent,
    DestinationsListComponent,
    DestinationEditComponent,
    ActivitiesListComponent,
    ActivityEditComponent,
    TypesOfTripListComponent,
    TypesOfTripEditComponent,
    ConfirmModalComponent,
    ThemsListComponent,
    ThemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    AngularFileUploaderModule,
    NgxEditorModule
  ],
  // providers: [
  //   // {provide: APP_BASE_HREF, useValue : '/Admin/AdminHome/Index/' }
  //   {provide: APP_BASE_HREF, useValue : '/' }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
