import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ActivitiesService } from '../../../core/services/trips/activities.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Activity } from '../../../core/models/trips/activity.model';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html'
})
export class ActivityEditComponent implements OnInit {
  @Input() activityId: string;
  @Output() updateList: EventEmitter<any> = new EventEmitter();
  currentActivity: Activity;
  currentActivityForm: FormGroup;


  startDateStr: string;
  endDateStr: string;

  constructor(
    private activitiesService: ActivitiesService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    this.initcurrentActivity();
    if (this.activityId) {
      this.activitiesService.getActivityById(this.activityId).subscribe(
        res => {
          this.currentActivity = res;
          this.loadcurrentActivity();
          this.cdr.detectChanges();
        }
      );
    } else {
      this.currentActivity = new Activity();
    }
  }

  initcurrentActivity() {
    this.currentActivityForm = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      url: [''],
      parentId: [''],
      imagePath: [''],
      seoDescription: [''],
      seoKeywords: ['']
    });
  }

  loadcurrentActivity() {
    this.currentActivityForm = this.fb.group({
      id: [this.currentActivity.id],
      name: [this.currentActivity.name],
      description: [this.currentActivity.description],
      url: [this.currentActivity.url],
      imagePath: [this.currentActivity.imagePath],
      parentId: [this.currentActivity.parentId],
      seoDescription: [this.currentActivity.seoDescription],
      seoKeywords: [this.currentActivity.seoKeywords]
    });
  }

  saveChanges() {
    const newActivity = new Activity();
    // tslint:disable-next-line:no-string-literal
    newActivity.id = this.currentActivity.id;
    newActivity.name = this.currentActivityForm.controls.name.value;
    newActivity.description = this.currentActivityForm.controls.description.value;
    newActivity.url = this.currentActivityForm.controls.url.value;
    newActivity.imagePath = this.currentActivityForm.controls.imagePath.value;
    newActivity.seoDescription = this.currentActivityForm.controls.seoDescription.value;
    newActivity.seoKeywords = this.currentActivityForm.controls.seoKeywords.value;
    newActivity.parentId = this.currentActivityForm.controls.parentId.value;

    if (this.currentActivity.id) {
      this.activitiesService.updateActivity(newActivity).subscribe(
        (res: Activity) => {
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    } else {
      this.activitiesService.createActivity(newActivity).subscribe(
        (res: Activity) => {
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    }
  }
}
