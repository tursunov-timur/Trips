(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/destinations/destinations.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/destinations/destinations.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class=\"table table-striped table-sm\">\n        <thead>\n          <tr>\n            <th scope=\"col\"># </th>\n            <th scope=\"col\">Имя</th>\n            <th scope=\"col\">Фамилия</th>\n            <th scope=\"col\">Username</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n        </tbody>\n      </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/trips/trip-edit/trip-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/trips/trip-edit/trip-edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title h2\" id=\"modal-basic-title\">Trip</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"currentTrip\">\n          <form [formGroup]=\"currentTripForm\"> \n              <div class=\"form-group\">\n                  <input class=\"form-control d-none\" formControlName=\"id\" />\n              </div>   \n              <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                      <label>Trip name:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" formControlName=\"name\" />\n                      </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <label>Trip description:</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"text\" ></textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <label>Trip url:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"url\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Start date:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"startDateStr\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>End date:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"endDateStr\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Price:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"price\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Price text</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"priceText\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Days:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"days\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Nights:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"nights\" />\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-lg-4\">\n                      <label>Event type:</label>\n                      <div class=\"form-group\">\n                          <select class=\"form-control\" formControlName=\"type\">\n                              <option [value]=\"type.key\" *ngFor=\"let type of eventTypes$\">{{type.value}}</option>\n                          </select>\n                      </div>\n                  </div> -->\n              </div>\n              <!-- <label>Text:</label>\n              <div class=\"form-group\">                 \n                  <app-ngx-editor                   \n                      [spellcheck]=\"true\" \n                      formControlName=\"text\" \n                      [config]=\"editorConfig\"\n                      [imageEndPoint]=\"uploadImageUrl\"></app-ngx-editor>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label>Created date:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" name=\"createDate\" formControlName=\"createDate\" readonly/>\n                      </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                      <label>Modification date:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" name=\"modificationDate\" formControlName=\"modificationDate\" readonly/>\n                      </div>\n                  </div>\n              </div> -->\n          </form>\n        </div>\n\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"program-tab\" data-toggle=\"tab\" href=\"#program\" role=\"tab\" aria-controls=\"program\" aria-selected=\"true\">Trip program</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#price\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Trip price</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"messages-tab\" data-toggle=\"tab\" href=\"#faq\" role=\"tab\" aria-controls=\"messages\" aria-selected=\"false\">Trip FAQ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"settings-tab\" data-toggle=\"tab\" href=\"#photos\" role=\"tab\" aria-controls=\"settings\" aria-selected=\"false\">Photos</a>\n          </li>\n        </ul>\n\n        <!-- Tab panes -->\n        <div class=\"tab-content pb-4\">\n          <div class=\"tab-pane active\" id=\"program\" role=\"tabpanel\" aria-labelledby=\"program-tab\"> \n            <div class=\"mt-4\">\n              <div *ngFor=\"let day of programDays\">\n                <div class=\"d-flex justify-content-between\">\n                  <span>Day {{day.dayNumber}}</span>\n                  <span (click)=\"deleteProgramDay(day)\"><i class=\"fas fa-trash-alt\"></i></span>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control mb-1\" [(ngModel)]=\"day.title\"/>\n                  <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"day.description\"></textarea>\n                </div>      \n              </div>    \n            </div>       \n            <button class=\"btn btn-sm btn-primary\" (click)=\"addNewDayToProgram()\">Add day description</button>\n          </div>\n          <div class=\"tab-pane\" id=\"price\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div *ngFor=\"priceItem of priceItems\">\n              \n            </div>\n          </div>\n          <div class=\"tab-pane\" id=\"faq\" role=\"tabpanel\" aria-labelledby=\"messages-tab\">222</div>\n          <div class=\"tab-pane\" id=\"photos\" role=\"tabpanel\" aria-labelledby=\"settings-tab\">333</div>\n        </div>\n\n\n        <div class=\"modal-footer pb-0\">\n          <button class=\"btn btn-outline-dark\" type=\"button\" (click)=\"saveChanges()\">Save changes</button>\n        </div>\n    </div>    \n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/trips/trips-list/trips-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/trips/trips-list/trips-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>    \n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let trip of trips$; let i = index;\">\n            <th scope=\"row\">{{ i + 1}}</th>\n            <td>{{ trip.name }}</td>\n            <td>{{ trip.text }}</td>    \n            <td class=\"text-center\">\n              <a (click)=\"editTrip(trip.id)\" class=\"cursor-pointer\"><i class=\"fas fa-pencil-alt\"></i></a>&nbsp;\n              <a (click)=\"deleteTrip(trip.id)\" class=\"cursor-pointer\"><i class=\"fas fa-trash-alt\"></i></a>\n            </td>     \n          </tr>          \n        </tbody>\n      </table>\n</div>\n<div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"addNewTrip()\">Add new trip</button>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/trips/trips-list/trips-list.component */ "./src/app/ui/trips/trips-list/trips-list.component.ts");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/trips' },
    { path: 'trips', pathMatch: 'full', component: _ui_trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_3__["TripsListComponent"] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AdminApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/trips/trips-list/trips-list.component */ "./src/app/ui/trips/trips-list/trips-list.component.ts");
/* harmony import */ var _ui_trips_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/trips/trip-edit/trip-edit.component */ "./src/app/ui/trips/trip-edit/trip-edit.component.ts");
/* harmony import */ var _ui_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/destinations/destinations.component */ "./src/app/ui/destinations/destinations.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _ui_trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_7__["TripsListComponent"],
            _ui_trips_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_8__["TripEditComponent"],
            _ui_destinations_destinations_component__WEBPACK_IMPORTED_MODULE_9__["DestinationsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        // providers: [
        //   // {provide: APP_BASE_HREF, useValue : '/Admin/AdminHome/Index/' }
        //   {provide: APP_BASE_HREF, useValue : '/' }
        // ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/models/program-day.ts":
/*!********************************************!*\
  !*** ./src/app/core/models/program-day.ts ***!
  \********************************************/
/*! exports provided: ProgramDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDay", function() { return ProgramDay; });
class ProgramDay {
}


/***/ }),

/***/ "./src/app/core/models/trip.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/trip.model.ts ***!
  \*******************************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
class Trip {
}


/***/ }),

/***/ "./src/app/core/services/trips.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/trips.service.ts ***!
  \************************************************/
/*! exports provided: TripsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsService", function() { return TripsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



const SERVER_URL = 'http://localhost:20855/api';
let TripsService = class TripsService {
    constructor(http) {
        this.http = http;
    }
    getTripsList() {
        return this.http.get('/api/Trips/getTripsList');
    }
    getTripById(tripId) {
        return this.http.get('/api/Trips/getTripById/' + tripId);
    }
    saveTrip(trip) {
        return this.http.post('/api/Trips/createTrip', trip);
    }
    updateTrip(trip) {
        return this.http.post('/api/Trips/updateTrip', trip);
    }
    deleteTrip(newsId) {
        return this.http.get('/api/Trips/deleteTrip/' + newsId);
    }
    getProgramDaysByTripId(tripId) {
        return this.http.get('/api/Trips/GetProgramDaysByTripId/' + tripId);
    }
    createProgramDay(programDay) {
        return this.http.post('/api/Trips/createProgramDay', programDay);
    }
    updateProgramDay(programDay) {
        return this.http.post('/api/Trips/updateProgramDay', programDay);
    }
    deleteProgramDay(programDayId) {
        return this.http.get('/api/Trips/deleteProgramDay/' + programDayId);
    }
};
TripsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TripsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TripsService);



/***/ }),

/***/ "./src/app/ui/destinations/destinations.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/destinations/destinations.component.ts ***!
  \***********************************************************/
/*! exports provided: DestinationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationsComponent", function() { return DestinationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DestinationsComponent = class DestinationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DestinationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-destinations',
        template: __webpack_require__(/*! raw-loader!./destinations.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/destinations/destinations.component.html")
    })
], DestinationsComponent);



/***/ }),

/***/ "./src/app/ui/trips/trip-edit/trip-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/trips/trip-edit/trip-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: TripEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripEditComponent", function() { return TripEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_trip_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/models/trip.model */ "./src/app/core/models/trip.model.ts");
/* harmony import */ var _core_models_program_day__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/models/program-day */ "./src/app/core/models/program-day.ts");
/* harmony import */ var _core_services_trips_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/trips.service */ "./src/app/core/services/trips.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let TripEditComponent = class TripEditComponent {
    constructor(tripsService, modalService, fb, cdr, modal) {
        this.tripsService = tripsService;
        this.modalService = modalService;
        this.fb = fb;
        this.cdr = cdr;
        this.modal = modal;
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.programDays = [];
        this.priceItems = [];
    }
    ngOnInit() {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US');
        this.initcurrentTrip();
        if (this.tripId) {
            this.tripsService.getTripById(this.tripId).subscribe(res => {
                this.currentTrip = res;
                this.startDateStr = datePipe.transform(this.currentTrip.startDate, 'MM/dd/yyyy');
                this.endDateStr = datePipe.transform(this.currentTrip.endDate, 'MM/dd/yyyy');
                this.loadcurrentTrip();
                this.loadProgramDays();
                this.cdr.detectChanges();
            });
        }
        else {
            this.currentTrip = new _core_models_trip_model__WEBPACK_IMPORTED_MODULE_2__["Trip"]();
        }
    }
    initcurrentTrip() {
        this.currentTripForm = this.fb.group({
            id: [''],
            name: [''],
            text: [''],
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
            seoId: [''],
            destinatioId: [''],
            activityId: [''],
            tripTypeId: ['']
        });
    }
    loadcurrentTrip() {
        this.currentTripForm = this.fb.group({
            id: [this.currentTrip.id],
            name: [this.currentTrip.name],
            text: [this.currentTrip.text],
            url: [this.currentTrip.url],
            imagePath: [this.currentTrip.imagePath],
            startDateStr: [this.startDateStr],
            endDateStr: [this.endDateStr],
            price: [this.currentTrip.price],
            priceText: [this.currentTrip.priceText],
            sale: [this.currentTrip.sale],
            hasSale: [this.currentTrip.hasSale],
            days: [this.currentTrip.days],
            nights: [this.currentTrip.nights],
            groupSize: [this.currentTrip.groupSize],
            tourDates: [this.currentTrip.tourDates],
            seoId: [this.currentTrip.seoId],
            destinatioId: [this.currentTrip.destinatioId],
            activityId: [this.currentTrip.activityId],
            tripTypeId: [this.currentTrip.tripTypeId]
        });
    }
    loadProgramDays() {
        this.tripsService.getProgramDaysByTripId(this.tripId).subscribe(res => {
            this.programDays = res;
        });
    }
    addNewDayToProgram() {
        const newProgramDay = new _core_models_program_day__WEBPACK_IMPORTED_MODULE_3__["ProgramDay"]();
        newProgramDay.dayNumber = this.programDays.length + 1;
        this.programDays.push(newProgramDay);
    }
    deleteProgramDay(programDay) {
        if (programDay.id !== '' && programDay.id !== undefined) {
            this.programDays.splice(programDay.dayNumber - 1, 1);
        }
    }
    saveProgrmDays(currentTrip) {
        if (this.currentTrip.id !== '' && this.currentTrip.id !== undefined) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.programDays.length; i++) {
                this.tripsService.updateProgramDay(this.programDays[i]).subscribe();
            }
        }
        else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.programDays.length; i++) {
                this.programDays[i].tripId = currentTrip.id;
                this.tripsService.createProgramDay(this.programDays[i]).subscribe();
            }
        }
    }
    saveChanges() {
        const newTrip = new _core_models_trip_model__WEBPACK_IMPORTED_MODULE_2__["Trip"]();
        // tslint:disable-next-line:no-string-literal
        newTrip.name = this.currentTripForm.controls.name.value;
        newTrip.text = this.currentTripForm.controls.text.value;
        newTrip.url = this.currentTripForm.controls.url.value;
        newTrip.imagePath = this.currentTripForm.controls.imagePath.value;
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
        newTrip.seoId = this.currentTripForm.controls.seoId.value;
        newTrip.destinatioId = this.currentTripForm.controls.destinatioId.value;
        newTrip.activityId = this.currentTripForm.controls.activityId.value;
        newTrip.tripTypeId = this.currentTripForm.controls.tripTypeId.value;
        if (this.currentTrip.id) {
            this.tripsService.updateTrip(newTrip).subscribe((res) => {
                this.saveProgrmDays(res);
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
        else {
            this.tripsService.saveTrip(newTrip).subscribe((res) => {
                this.saveProgrmDays(res);
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
    }
};
TripEditComponent.ctorParameters = () => [
    { type: _core_services_trips_service__WEBPACK_IMPORTED_MODULE_4__["TripsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TripEditComponent.prototype, "tripId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TripEditComponent.prototype, "updateList", void 0);
TripEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-edit',
        template: __webpack_require__(/*! raw-loader!./trip-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/trips/trip-edit/trip-edit.component.html")
    })
], TripEditComponent);



/***/ }),

/***/ "./src/app/ui/trips/trips-list/trips-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/trips/trips-list/trips-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TripsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsListComponent", function() { return TripsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_trips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips.service */ "./src/app/core/services/trips.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trip-edit/trip-edit.component */ "./src/app/ui/trips/trip-edit/trip-edit.component.ts");






let TripsListComponent = class TripsListComponent {
    constructor(tripsService, modalService) {
        this.tripsService = tripsService;
        this.modalService = modalService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.tripsService.getTripsList().subscribe(res => {
            this.trips$ = res;
        }));
    }
    addNewTrip() {
        const modalRef = this.modalService.open(_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__["TripEditComponent"], { size: 'lg' });
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            // this.trips$ = receivedEntry;
            this.tripsService.getTripsList().subscribe(res => {
                this.trips$ = res;
            });
        });
    }
    editTrip(id) {
        const modalRef = this.modalService.open(_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__["TripEditComponent"], { size: 'lg' });
        modalRef.componentInstance.tripId = id;
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            this.tripsService.getTripsList().subscribe(res => {
                this.trips$ = res;
            });
        });
    }
    deleteTrip(id) {
    }
};
TripsListComponent.ctorParameters = () => [
    { type: _core_services_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
TripsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trips',
        template: __webpack_require__(/*! raw-loader!./trips-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/trips/trips-list/trips-list.component.html")
    })
], TripsListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\timurt\Documents\Visual Studio 2017\Projects\WebApplication5\WebApplication5\Areas\Admin\AdminApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map