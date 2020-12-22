import { Component, OnInit } from '@angular/core';
import { TypesOfTripService } from '../../../core/services/trips/types-of-trip.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { TypeOfTrip } from '../../../core/models/trips/type-of-trip.model';
import { TypesOfTripEditComponent } from '../types-of-trip-edit/types-of-trip-edit.component';
import { ConfirmModalComponent } from '../../_modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-types-of-trip-list',
  templateUrl: './types-of-trip-list.component.html'
})
export class TypesOfTripListComponent implements OnInit {

  typesOfTrip$: TypeOfTrip[];

  subscriptions: Subscription = new Subscription();

  constructor(
    private typesOfTripService: TypesOfTripService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.typesOfTripService.getTypesOfTripList().subscribe(
      res => {
        this.typesOfTrip$ = res;
      }
    ));
  }

  addNewTypeOfTrip() {
    const modalRef = this.modalService.open(TypesOfTripEditComponent, {size: 'xl'});
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      // this.trips$ = receivedEntry;
      this.typesOfTripService.getTypesOfTripList().subscribe(
        res => {
          this.typesOfTrip$ = res;
        }
      );
    });
  }

  editTypeOfTrip(id: string) {
    const modalRef = this.modalService.open(TypesOfTripEditComponent, {size: 'xl'});
    modalRef.componentInstance.typesOfTripId = id;
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      this.typesOfTripService.getTypesOfTripList().subscribe(
        res => {
          this.typesOfTrip$ = res;
        }
      );
    });
  }

  deleteTypeOfTrip(id: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {size: 'lg'});
    modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
    modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
      if (receivedEntry === 'Yes') {
        this.typesOfTripService.deleteTypeOfTrip(id).subscribe(
          res => {
            this.typesOfTrip$ = res;
          }
        );
      }
    });
  }

}
