import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../../../core/services/trips/destinations.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Destination } from '../../../core/models//trips/destination.model';
import { DestinationEditComponent } from '../destination-edit/destination-edit.component';
import { ConfirmModalComponent } from '../../_modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html'
})
export class DestinationsListComponent implements OnInit {

  destinations$: Destination[];

  subscriptions: Subscription = new Subscription();

  constructor(
    private destinationsService: DestinationsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.destinationsService.getDestinationsList().subscribe(
      res => {
        this.destinations$ = res;
      }
    ));
  }

  addNewDestination() {
    const modalRef = this.modalService.open(DestinationEditComponent, {size: 'xl'});
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      // this.trips$ = receivedEntry;
      this.destinationsService.getDestinationsList().subscribe(
        res => {
          this.destinations$ = res;
        }
      );
    });
  }

  editDestination(id: string) {
    const modalRef = this.modalService.open(DestinationEditComponent, {size: 'xl'});
    modalRef.componentInstance.destinationId = id;
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      this.destinationsService.getDestinationsList().subscribe(
        res => {
          this.destinations$ = res;
        }
      );
    });
  }

  deleteDestination(id: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {size: 'lg'});
    modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
    modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
      if (receivedEntry === 'Yes') {
        this.destinationsService.deleteDestination(id).subscribe(
          res => {
            this.destinations$ = res;
          }
        );
      }
    });
  }

}
