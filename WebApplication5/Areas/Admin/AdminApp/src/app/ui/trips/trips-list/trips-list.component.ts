import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../../core/services/trips/trips.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Trip } from '../../../core/models/trips/trip.model';
import { TripEditComponent } from '../trip-edit/trip-edit.component';
import { ConfirmModalComponent } from '../../_modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-trips',
  templateUrl: './trips-list.component.html'
})
export class TripsListComponent implements OnInit {
  trips$: Trip[];

  subscriptions: Subscription = new Subscription();

  constructor(
    private tripsService: TripsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.tripsService.getTripsList().subscribe(
      res => {
        this.trips$ = res;
      }
    ));
  }

  addNewTrip() {
    const modalRef = this.modalService.open(TripEditComponent, {size: 'xl', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      // this.trips$ = receivedEntry;
      this.tripsService.getTripsList().subscribe(
        res => {
          this.trips$ = res;
        }
      );
    });
  }

  editTrip(id: string) {
    const modalRef = this.modalService.open(TripEditComponent, {size: 'xl', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.tripId = id;
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      this.tripsService.getTripsList().subscribe(
        res => {
          this.trips$ = res;
        }
      );
    });
  }

  deleteTrip(id: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {size: 'lg'});
    modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
    modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
      if (receivedEntry === 'Yes') {
        this.tripsService.deleteTrip(id).subscribe(
          res => {
            this.trips$ = res;
          }
        );
      }
    });
  }

}
