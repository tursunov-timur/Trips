import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { TypesOfTripService } from '../../../core/services/trips/types-of-trip.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TypeOfTrip } from '../../../core/models/trips/type-of-trip.model';


@Component({
  selector: 'app-types-of-trip-edit',
  templateUrl: './types-of-trip-edit.component.html'
})
export class TypesOfTripEditComponent implements OnInit {
  @Input() typesOfTripId: string;
  @Output() updateList: EventEmitter<any> = new EventEmitter();
  currentTypesOfTrip: TypeOfTrip;
  currentTypesOfTripForm: FormGroup;


  startDateStr: string;
  endDateStr: string;

  constructor(
    private typesOfTripService: TypesOfTripService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    this.initcurrentTypesOfTrip();
    if (this.typesOfTripId) {
      this.typesOfTripService.getTypeOfTripById(this.typesOfTripId).subscribe(
        res => {
          this.currentTypesOfTrip = res;
          this.loadcurrentTypesOfTrip();
          this.cdr.detectChanges();
        }
      );
    } else {
      this.currentTypesOfTrip = new TypeOfTrip();
    }
  }

  initcurrentTypesOfTrip() {
    this.currentTypesOfTripForm = this.fb.group({
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

  loadcurrentTypesOfTrip() {
    this.currentTypesOfTripForm = this.fb.group({
      id: [this.currentTypesOfTrip.id],
      name: [this.currentTypesOfTrip.name],
      description: [this.currentTypesOfTrip.description],
      url: [this.currentTypesOfTrip.url],
      imagePath: [this.currentTypesOfTrip.imagePath],
      parentId: [this.currentTypesOfTrip.parentId],
      seoDescription: [this.currentTypesOfTrip.seoDescription],
      seoKeywords: [this.currentTypesOfTrip.seoKeywords]
    });
  }

  saveChanges() {
    const newTypesOfTrip = new TypeOfTrip();
    // tslint:disable-next-line:no-string-literal
    newTypesOfTrip.id = this.currentTypesOfTrip.id;
    newTypesOfTrip.name = this.currentTypesOfTripForm.controls.name.value;
    newTypesOfTrip.description = this.currentTypesOfTripForm.controls.description.value;
    newTypesOfTrip.url = this.currentTypesOfTripForm.controls.url.value;
    newTypesOfTrip.imagePath = this.currentTypesOfTripForm.controls.imagePath.value;
    newTypesOfTrip.seoDescription = this.currentTypesOfTripForm.controls.seoDescription.value;
    newTypesOfTrip.seoKeywords = this.currentTypesOfTripForm.controls.seoKeywords.value;
    newTypesOfTrip.parentId = this.currentTypesOfTripForm.controls.parentId.value;

    if (this.currentTypesOfTrip.id) {
      this.typesOfTripService.updateTypeOfTrip(newTypesOfTrip).subscribe(
        (res: TypeOfTrip) => {
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    } else {
      this.typesOfTripService.createTypeOfTrip(newTypesOfTrip).subscribe(
        (res: TypeOfTrip) => {
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    }
  }
}

