import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../../core/services/trips/activities.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Activity } from '../../../core/models//trips/activity.model';
import { ActivityEditComponent } from '../activity-edit/activity-edit.component';
import { ConfirmModalComponent } from '../../_modals/confirm-modal/confirm-modal.component';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html'
})
export class ActivitiesListComponent implements OnInit {

  activities$: Activity[];

  subscriptions: Subscription = new Subscription();

  constructor(
    private activitiesService: ActivitiesService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.activitiesService.getActivitiesList().subscribe(
      res => {
        this.activities$ = res;
      }
    ));
  }

  addNewActivity() {
    const modalRef = this.modalService.open(ActivityEditComponent, {size: 'xl'});
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      // this.trips$ = receivedEntry;
      this.activitiesService.getActivitiesList().subscribe(
        res => {
          this.activities$ = res;
        }
      );
    });
  }

  editActivity(id: string) {
    const modalRef = this.modalService.open(ActivityEditComponent, {size: 'xl'});
    modalRef.componentInstance.activityId = id;
    modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
      this.activitiesService.getActivitiesList().subscribe(
        res => {
          this.activities$ = res;
        }
      );
    });
  }

  deleteActivity(id: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {size: 'lg'});
    modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
    modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
      if (receivedEntry === 'Yes') {
        this.activitiesService.deleteActivity(id).subscribe(
          res => {
            this.activities$ = res;
          }
        );
      }
    });
  }

}
