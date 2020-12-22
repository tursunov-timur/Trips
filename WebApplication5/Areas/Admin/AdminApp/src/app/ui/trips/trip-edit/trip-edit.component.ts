import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { TripsService } from '../../../core/services/trips/trips.service';
import { ActivitiesService } from '../../../core/services/trips/activities.service';
import { DestinationsService } from '../../../core/services/trips/destinations.service';
import { TypesOfTripService } from '../../../core/services/trips/types-of-trip.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe, KeyValue } from '@angular/common';

import { Trip } from '../../../core/models/trips/trip.model';
import { ProgramDay } from '../../../core/models/trips/program-day';
import { PriceItem } from '../../../core/models/trips/price-item';
import { TripFAQ } from '../../../core/models/trips/trip-faq';
import { TripFoto } from '../../../core/models/trips/trip-foto';
import { TripSchedule } from '../../../core/models/trips/trip-schedule.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';

declare var $: any;

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  providers: [ DatePipe ]
})
export class TripEditComponent implements OnInit, AfterViewInit {
  @Input() tripId: string;
  @Output() updateList: EventEmitter<any> = new EventEmitter();
  currentTrip: Trip;
  currentTripForm: FormGroup;

  programDays: ProgramDay[] = [];
  priceItems: PriceItem[] = [];
  tripFAQs: TripFAQ[] = [];
  tripFotos: TripFoto[] = [];
  tripSchdules: TripSchedule[] = [];

  startDateStr: string;
  endDateStr: string;
  pathToCover: string;

  activities$: KeyValue<string, string>[] = [];
  destinations$: KeyValue<string, string>[] = [];
  typesOfTrip$: KeyValue<string, string>[] = [];

  // NewItems
  tripFAQTitle: string;
  tripFAQDesqription: string;
  tripPriceTitle: string;
  tripPriceDescription: string;
  tripPriceIsIncluded: boolean;
  tripSchedule: Date;

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

afuConfig = {
  uploadAPI: {
    url: '/api/Trips/uploadImage'
  },
  hideProgressBar: true,
  hideResetBtn: true,
  hideSelectBtn: true,
  theme: 'attachPin',
  replaceTexts: {
    attachPinBtn: 'Attach Cover...',
  }
};

afuConfigPhotos = {};

  constructor(
    private tripsService: TripsService,
    private activitiesService: ActivitiesService,
    private destinationsService: DestinationsService,
    private typesOfTripService: TypesOfTripService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    public modal: NgbActiveModal,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    // tslint:disable-next-line:only-arrow-functions




    this.initcurrentTrip();
    this.loadActivities();
    this.loadDestinations();
    this.loadTypesOfTrip();
    if (this.tripId) {
      this.tripsService.getTripById(this.tripId).subscribe(
        res => {
          this.currentTrip = res;
          this.loadcurrentTrip();
          this.loadProgramDays();
          this.loadPriceItems();
          this.loadFAQItems();
          this.loadPhotos();
          this.loadSchedules();
          this.cdr.detectChanges();
          this.pathToCover = res.imagePath;
          this.afuConfigPhotos = {
            multiple: true,
            uploadAPI: {
              url: '/api/Trips/uploadTripPhotos',
              // tslint:disable-next-line:object-literal-key-quotes
              headers: {'tripId': this.tripId}
            },
            hideProgressBar: true,
            hideResetBtn: true,
            hideSelectBtn: true,
            theme: 'attachPin',
            replaceTexts: {
              attachPinBtn: 'Upload Photo...',
            }
          };
        }
      );
    } else {
      this.currentTrip = new Trip();
    }

  }

  ngAfterViewInit() {
    // $(document).ready(function() {
    //   $('#summernote').summernote();
    // });
    this.cdr.detectChanges();
  }

  initcurrentTrip() {
    this.currentTripForm = this.fb.group({
      id: [''],
      name: [''],
      content: [''],
      url: [''],
      imagePath: [''],
      startDateStr: [''],
      endDateStr: [''],
      price: [''],
      priceText: [''],
      sale: [''],
      hasSale: [''],
      days: [''],
      nights: [''],
      groupSize: [''],
      tourDates: [''],
      seoDescription: [''],
      seoKeywords: [''],
      destinationId: [''],
      activityId: [''],
      typeOfTripId: ['']
    });
  }

  loadcurrentTrip() {
    this.currentTripForm = this.fb.group({
      id: [this.currentTrip.id],
      name: [this.currentTrip.name],
      content: [this.currentTrip.content],
      url: [this.currentTrip.url],
      imagePath: [this.currentTrip.imagePath],
      startDateStr: [ this.datePipe.transform(this.currentTrip.startDate, 'yyyy-MM-dd')],
      endDateStr: [this.datePipe.transform(this.currentTrip.endDate, 'yyyy-MM-dd')],
      price: [this.currentTrip.price],
      priceText: [this.currentTrip.priceText],
      sale: [this.currentTrip.sale],
      hasSale: [this.currentTrip.hasSale],
      days: [this.currentTrip.days],
      nights: [this.currentTrip.nights],
      groupSize: [this.currentTrip.groupSize],
      tourDates: [this.currentTrip.tourDates],
      seoDescription: [this.currentTrip.seoDescription],
      seoKeywords: [this.currentTrip.seoKeywords],
      destinationId: [this.currentTrip.destinationId],
      activityId: [this.currentTrip.activityId],
      typeOfTripId: [this.currentTrip.typeOfTripId]
    });
  }

  loadActivities() {
    this.activitiesService.getKeyValueActivityList().subscribe(
      res => {
        this.activities$ = res;
      }
    );
  }
  loadDestinations() {
    this.destinationsService.getKeyValueActivityList().subscribe(
      res => {
        this.destinations$ = res;
      }
    );
  }
  loadTypesOfTrip() {
    this.typesOfTripService.getKeyValueTypesOfTripList().subscribe(
      res => {
        this.typesOfTrip$ = res;
      }
    );
  }

  loadProgramDays() {
    this.tripsService.getProgramDaysByTripId(this.tripId).subscribe(
      res => {
        this.programDays = res;
      }
    );
  }
  loadPriceItems() {
    this.tripsService.getTripPricesByTripId(this.tripId).subscribe(
      res => {
        this.priceItems = res;
      }
    );
  }
  loadFAQItems() {
    this.tripsService.getTripFAQByTripId(this.tripId).subscribe(
      res => {
        this.tripFAQs = res;
      }
    );
  }
  loadPhotos() {
    this.tripsService.getTripFotosByTripId(this.tripId).subscribe(
      res => {
        this.tripFotos = res;
      }
    );
  }
  loadSchedules() {
    this.tripsService.getTripSchedulesByTripId(this.tripId).subscribe(
      res => {
        this.tripSchdules = res;
      }
    );
  }

  imageUploaded(respose) {
     const obj = JSON.parse(respose.responseText);
     this.pathToCover = obj.imageUrl;
  }

  // Program day methods
  addNewDayToProgram() {
    const newProgramDay = new ProgramDay();
    newProgramDay.dayNumber = this.programDays.length + 1;
    this.programDays.push(newProgramDay);
  }
  deleteProgramDay(programDay: ProgramDay) {
    this.programDays.splice(programDay.dayNumber - 1, 1);
    if (programDay.id !== '' && programDay.id !== undefined) {
      this.tripsService.deleteProgramDay(programDay.id).subscribe();
    }
  }
  saveProgrmDays(currentTrip: Trip) {
    // if (this.currentTrip.id !== '' && this.currentTrip.id !== undefined) {
    //   // tslint:disable-next-line:prefer-for-of
    //     for (let i = 0; i < this.programDays.length; i++) {
    //       this.tripsService.updateProgramDay(this.programDays[i]).subscribe();
    //     }
    //   } else {
    //     // tslint:disable-next-line:prefer-for-of
    //     for (let i = 0; i < this.programDays.length; i++) {
    //       this.programDays[i].tripId = currentTrip.id;
    //       this.tripsService.createProgramDay(this.programDays[i]).subscribe();
    //     }
    // }


      // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.programDays.length; i++) {
          if (this.programDays[i].id !== '' && this.programDays[i].id !== undefined) {
            this.tripsService.updateProgramDay(this.programDays[i]).subscribe();
          } else {
            this.programDays[i].tripId = currentTrip.id;
            this.tripsService.createProgramDay(this.programDays[i]).subscribe();
          }
        }


  }

  // Price Items methods
  addNewPriceItem() {
    const newPriceItem = new PriceItem();
    newPriceItem.title = this.tripPriceTitle;
    newPriceItem.description = this.tripPriceDescription;
    newPriceItem.isIncluded = this.tripPriceIsIncluded;
    newPriceItem.sort = this.priceItems.length + 1;
    this.priceItems.push(newPriceItem);
    this.tripPriceTitle = '';
    this.tripPriceDescription = '';
    this.tripPriceIsIncluded = false;
  }
  deletePriceItem(priceItem: PriceItem) {
    this.priceItems.splice(priceItem.sort - 1, 1);
    if (priceItem.id !== '' && priceItem.id !== undefined) {
      this.tripsService.deleteTripPrice(priceItem.id).subscribe();
    }
  }
  savePriceItems(currentTrip: Trip) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.priceItems.length; i++) {
      if (this.priceItems[i].id !== '' && this.priceItems[i].id !== undefined) {
        this.tripsService.updateTripPrice(this.priceItems[i]).subscribe();
      } else {
        this.priceItems[i].tripId = currentTrip.id;
        this.tripsService.createTripPrice(this.priceItems[i]).subscribe();
      }
    }
  }


  // FAQ Items methods
  addNewFAQItem() {
    const newTripFAQ = new TripFAQ();
    newTripFAQ.title = this.tripFAQTitle;
    newTripFAQ.description = this.tripFAQDesqription;
    this.tripFAQTitle = '';
    this.tripFAQDesqription = '';
    newTripFAQ.sort = this.tripFAQs.length + 1;
    this.tripFAQs.push(newTripFAQ);
    this.cdr.detectChanges();
  }
  deleteFAQItem(tripFAQ: TripFAQ) {
    this.tripFAQs.splice(tripFAQ.sort - 1, 1);
    if (tripFAQ.id !== '' && tripFAQ.id !== undefined) {
      this.tripsService.deleteTripFAQ(tripFAQ.id).subscribe();
    }
  }
  saveFAQItems(currentTrip: Trip) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.tripFAQs.length; i++) {
      if (this.tripFAQs[i].id !== '' && this.tripFAQs[i].id !== undefined) {
        this.tripsService.updateTripFAQ(this.tripFAQs[i]).subscribe();
      } else {
        this.tripFAQs[i].tripId = currentTrip.id;
        this.tripsService.createTripFAQ(this.tripFAQs[i]).subscribe();
      }
    }
  }


  // Foto Items methods
  addNewFotoItem() {
    const newTripFoto = new TripFoto();
    newTripFoto.sort = this.tripFotos.length + 1;
    this.tripFotos.push(newTripFoto);
  }
  deleteFotoItem(tripFoto: TripFoto) {
    this.tripFotos.splice(tripFoto.sort - 1, 1);
    if (tripFoto.id !== '' && tripFoto.id !== undefined) {
      this.tripsService.deleteTripFoto(tripFoto.id).subscribe();
    }
  }
  saveFotoItems(currentTrip: Trip) {
    for (let i = 0; i < this.tripFotos.length; i++) {
      if (this.tripFotos[i].id !== '' && this.tripFotos[i].id !== undefined) {
        this.tripsService.updateTripFoto(this.tripFotos[i]).subscribe();
      } else {
        this.priceItems[i].tripId = currentTrip.id;
        this.tripsService.createTripFoto(this.tripFotos[i]).subscribe();
      }
    }
  }
  photosUploaded() {
    this.tripsService.getTripFotosByTripId(this.tripId).subscribe(
      res => {
        this.tripFotos = res;
        this.cdr.detectChanges();
      }
    );
  }

  // Schedules
  addNewScheduleItem() {
    const newTripSchedule = new TripSchedule();
    newTripSchedule.tripId = this.tripId;
    newTripSchedule.tripDate = this.tripSchedule;
    this.tripSchedule = new Date();
    this.tripSchdules.push(newTripSchedule);
    this.cdr.detectChanges();
  }
  deleteScheduleItem(tripSchdules: TripSchedule) {
    this.tripSchdules.splice(tripSchdules.sort - 1, 1);
    if (tripSchdules.id !== '' && tripSchdules.id !== undefined) {
      this.tripsService.deleteTripSchedule(tripSchdules.id).subscribe();
    }
  }
  saveScheduleItems(currentTrip: Trip) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.tripSchdules.length; i++) {
      if (this.tripSchdules[i].id !== '' && this.tripSchdules[i].id !== undefined) {
        this.tripsService.updateTripSchedule(this.tripSchdules[i]).subscribe();
      } else {
        this.tripFAQs[i].tripId = currentTrip.id;
        this.tripsService.createTripSchedule(this.tripSchdules[i]).subscribe();
      }
    }
  }

  saveChanges() {
    const newTrip = new Trip();
    // tslint:disable-next-line:no-string-literal
    newTrip.id = this.currentTripForm.controls.id.value;
    newTrip.name = this.currentTripForm.controls.name.value;
    newTrip.content = this.currentTripForm.controls.content.value;
    newTrip.url = this.currentTripForm.controls.url.value;
    newTrip.imagePath = this.pathToCover;
    newTrip.startDate = this.currentTripForm.controls.startDateStr.value;
    newTrip.endDate = this.currentTripForm.controls.endDateStr.value;
    newTrip.price = this.currentTripForm.controls.price.value;
    newTrip.priceText = this.currentTripForm.controls.priceText.value;
    newTrip.sale = this.currentTripForm.controls.sale.value;
    newTrip.hasSale = this.currentTripForm.controls.hasSale.value;
    newTrip.days = this.currentTripForm.controls.days.value;
    newTrip.nights = this.currentTripForm.controls.nights.value;
    newTrip.groupSize = this.currentTripForm.controls.groupSize.value;
    newTrip.tourDates = this.currentTripForm.controls.tourDates.value;
    newTrip.seoDescription = this.currentTripForm.controls.seoDescription.value;
    newTrip.seoKeywords = this.currentTripForm.controls.seoKeywords.value;
    newTrip.destinationId = this.currentTripForm.controls.destinationId.value;
    newTrip.activityId = this.currentTripForm.controls.activityId.value;
    newTrip.typeOfTripId = this.currentTripForm.controls.typeOfTripId.value;
    if (this.currentTrip.id) {
      this.tripsService.updateTrip(newTrip).subscribe(
        (res: Trip) => {
          this.saveProgrmDays(res);
          this.savePriceItems(res);
          this.saveFAQItems(res);
          this.saveFotoItems(res);
          this.saveScheduleItems(res);
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    } else {
      this.tripsService.saveTrip(newTrip).subscribe(
        (res: Trip) => {
          this.saveProgrmDays(res);
          this.savePriceItems(res);
          this.saveFAQItems(res);
          this.saveFotoItems(res);
          this.saveScheduleItems(res);
          this.modal.dismiss();
          this.updateList.emit();
        }
      );
    }
  }

}
