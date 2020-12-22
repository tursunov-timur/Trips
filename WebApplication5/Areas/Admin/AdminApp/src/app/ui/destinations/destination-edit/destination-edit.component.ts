import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DestinationsService } from '../../../core/services/trips/destinations.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Destination } from '../../../core/models/trips/destination.model';

@Component({
  selector: 'app-destination-edit',
  templateUrl: './destination-edit.component.html'
})
export class DestinationEditComponent implements OnInit {
  @Input() destinationId: string;
  @Output() updateList: EventEmitter<any> = new EventEmitter();
  currentDestination: Destination;
  currentDestinationForm: FormGroup;


  startDateStr: string;
  endDateStr: string;

  constructor(
    private destinationsService: DestinationsService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    this.initcurrentDestination();
    if (this.destinationId) {
      this.destinationsService.getDestinationById(this.destinationId).subscribe(
        res => {
          this.currentDestination = res;
          this.loadcurrentDestination();
          this.cdr.detectChanges();
        }
      );
    } else {
      this.currentDestination = new Destination();
    }
  }

  initcurrentDestination() {
    this.currentDestinationForm = this.fb.group({
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

  loadcurrentDestination() {
    this.currentDestinationForm = this.fb.group({
      id: [this.currentDestination.id],
      name: [this.currentDestination.name],
      description: [this.currentDestination.description],
      url: [this.currentDestination.url],
      imagePath: [this.currentDestination.imagePath],
      parentId: [this.currentDestination.parentId],
      seoDescription: [this.currentDestination.seoDescription],
      seoKeywords: [this.currentDestination.seoKeywords]
    });
  }

  saveChanges() {
    const newDestination = new Destination();
    // tslint:disable-next-line:no-string-literal
    newDestination.id = this.currentDestination.id;
    newDestination.name = this.currentDestinationForm.controls.name.value;
    newDestination.description = this.currentDestinationForm.controls.description.value;
    newDestination.url = this.currentDestinationForm.controls.url.value;
    newDestination.imagePath = this.currentDestinationForm.controls.imagePath.value;
    newDestination.seoDescription = this.currentDestinationForm.controls.seoDescription.value;
    newDestination.seoKeywords = this.currentDestinationForm.controls.seoKeywords.value;
    newDestination.parentId = this.currentDestinationForm.controls.parentId.value;

    if (this.currentDestination.id) {
      this.destinationsService.updateDestination(newDestination).subscribe(
        (res: Destination) => {
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    } else {
      this.destinationsService.createDestination(newDestination).subscribe(
        (res: Destination) => {
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    }
  }
}
