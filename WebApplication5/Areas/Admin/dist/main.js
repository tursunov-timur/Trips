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

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/_modals/confirm-modal/confirm-modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/_modals/confirm-modal/confirm-modal.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h3 class=\"modal-title\">Confirm modal</h3>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <p>{{text}}</p>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"closeModal('No')\">No</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"closeModal('Yes')\">Yes</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/activities/activities-list/activities-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/activities/activities-list/activities-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    Activities List\n</ol>\n<div>    \n    <table id=\"activitys-list\" class=\"table table-hover\">\n        <thead>\n            <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let activity of activities$; let i = index;\">\n            <th scope=\"row\">{{ i + 1}}</th>\n            <td>{{ activity.name }}</td>\n            <td>{{ activity.text }}</td>    \n            <td class=\"text-center\">\n                <a (click)=\"editActivity(activity.id)\" class=\"cursor-pointer\"><i class=\"fas fa-pencil-alt\"></i></a>&nbsp;\n                <a (click)=\"deleteActivity(activity.id)\" class=\"cursor-pointer\"><i class=\"fas fa-trash-alt\"></i></a>\n            </td>     \n            </tr>          \n        </tbody>\n        </table>\n</div>\n<div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"addNewActivity()\">Add new activity</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/activities/activity-edit/activity-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/activities/activity-edit/activity-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"modal-header py-1 px-3\">\n        <h4 class=\"modal-title h4\" id=\"modal-basic-title\">Activity</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0 pb-2\">\n        <div *ngIf=\"currentActivity\">\n          <form [formGroup]=\"currentActivityForm\" id=\"currentActivityForm\"> \n              <div class=\"form-group\">\n                  <input class=\"form-control d-none\" formControlName=\"id\" />\n              </div>   \n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label>Activity name:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" formControlName=\"name\" />\n                      </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Activity url:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"url\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <label>Activity description:</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"description\" ></textarea>\n                    </div>\n                  </div>                 \n                  <div class=\"col-lg-6\">\n                    <label>Seo description</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"seoDescription\" ></textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Seo keywords</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"seoKeywords\" ></textarea>\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-lg-4\">\n                      <label>Event type:</label>\n                      <div class=\"form-group\">\n                          <select class=\"form-control\" formControlName=\"type\">\n                              <option [value]=\"type.key\" *ngFor=\"let type of eventTypes$\">{{type.value}}</option>\n                          </select>\n                      </div>\n                  </div> -->\n              </div>\n              <!-- <label>Text:</label>\n              <div class=\"form-group\">                 \n                  <app-ngx-editor                   \n                      [spellcheck]=\"true\" \n                      formControlName=\"text\" \n                      [config]=\"editorConfig\"\n                      [imageEndPoint]=\"uploadImageUrl\"></app-ngx-editor>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label>Created date:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" name=\"createDate\" formControlName=\"createDate\" readonly/>\n                      </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                      <label>Modification date:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" name=\"modificationDate\" formControlName=\"modificationDate\" readonly/>\n                      </div>\n                  </div>\n              </div> -->\n          </form>\n        </div>\n\n\n        <div class=\"modal-footer pt-2 pb-0 px-0\">\n          <button class=\"btn btn-outline-dark btn-sm\" type=\"button\" (click)=\"saveChanges()\">Save changes</button>\n        </div>\n    </div>    \n   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/destinations/destination-edit/destination-edit.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/destinations/destination-edit/destination-edit.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"modal-header py-1 px-3\">\n        <h4 class=\"modal-title h4\" id=\"modal-basic-title\">Destination</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0 pb-2\">\n        <div *ngIf=\"currentDestination\">\n          <form [formGroup]=\"currentDestinationForm\" id=\"currentDestinationForm\"> \n              <div class=\"form-group\">\n                  <input class=\"form-control d-none\" formControlName=\"id\" />\n              </div>   \n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label>Destination name:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" formControlName=\"name\" />\n                      </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Destination url:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"url\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <label>Destination description:</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"description\" ></textarea>\n                    </div>\n                  </div>                 \n                  <div class=\"col-lg-6\">\n                    <label>Seo description</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"seoDescription\" ></textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Seo keywords</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"seoKeywords\" ></textarea>\n                    </div>\n                  </div>               \n              </div>              \n          </form>\n        </div>\n\n\n        <div class=\"modal-footer pt-2 pb-0 px-0\">\n          <button class=\"btn btn-outline-dark btn-sm\" type=\"button\" (click)=\"saveChanges()\">Save changes</button>\n        </div>\n    </div>    \n   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/destinations/destinations-list/destinations-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/destinations/destinations-list/destinations-list.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    Destinations List\n</ol>\n<div>    \n    <table id=\"activitys-list\" class=\"table table-hover\">\n        <thead>\n            <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let destination of destinations$; let i = index;\">\n            <th scope=\"row\">{{ i + 1}}</th>\n            <td>{{ destination.name }}</td>\n            <td>{{ destination.text }}</td>    \n            <td class=\"text-center\">\n                <a (click)=\"editDestination(destination.id)\" class=\"cursor-pointer\"><i class=\"fas fa-pencil-alt\"></i></a>&nbsp;\n                <a (click)=\"deleteDestination(destination.id)\" class=\"cursor-pointer\"><i class=\"fas fa-trash-alt\"></i></a>\n            </td>     \n            </tr>          \n        </tbody>\n        </table>\n</div>\n<div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"addNewDestination()\">Add new destination</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/trips/trip-edit/trip-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/trips/trip-edit/trip-edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"modal-header py-1 px-3\">\n        <h4 class=\"modal-title h4\" id=\"modal-basic-title\">Trip</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0 pb-2\">\n        <div *ngIf=\"currentTrip\">\n          <form [formGroup]=\"currentTripForm\" id=\"currentTripForm\"> \n              <div class=\"form-group\">\n                  <input class=\"form-control d-none\" formControlName=\"id\" />\n              </div>   \n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label>Trip name:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" formControlName=\"name\" />\n                      </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Trip url:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"url\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <label>Trip description:</label>\n                    <div class=\"form-group\">\n                        <!-- <div id=\"summernote\"></div>  -->\n                        <angular-editor formControlName=\"content\" [config]=\"editorConfig\"></angular-editor>\n                    </div>\n                  </div>\n                  \n                  <div class=\"col-lg-6\">\n                    <label>Start date:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"startDateStr\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>End date:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"endDateStr\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Price:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"price\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Price text</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"priceText\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Days:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"days\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Nights:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"nights\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <label>Activity</label>\n                    <div class=\"form-group\">\n                        <select class=\"form-control\" formControlName=\"activityId\" >\n                          <option *ngFor=\"let activity of activities$\" [value]=\"activity.key\">{{activity.value}}</option>\n                        </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <label>Destination</label>\n                    <div class=\"form-group\">\n                        <select class=\"form-control\" formControlName=\"destinationId\" >\n                          <option *ngFor=\"let destination of destinations$\" [value]=\"destination.key\">{{destination.value}}</option>\n                        </select>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <label>Type of Trip</label>\n                    <div class=\"form-group\">\n                        <select class=\"form-control\" formControlName=\"typeOfTripId\" >\n                          <option *ngFor=\"let typeOfTrip of typesOfTrip$\" [value]=\"typeOfTrip.key\">{{typeOfTrip.value}}</option>\n                        </select>\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-lg-4\">\n                      <label>Event type:</label>\n                      <div class=\"form-group\">\n                          <select class=\"form-control\" formControlName=\"type\">\n                              <option [value]=\"type.key\" *ngFor=\"let type of eventTypes$\">{{type.value}}</option>\n                          </select>\n                      </div>\n                  </div> -->\n              </div>\n              <!-- <label>Text:</label>\n              <div class=\"form-group\">                 \n                  <app-ngx-editor                   \n                      [spellcheck]=\"true\" \n                      formControlName=\"text\" \n                      [config]=\"editorConfig\"\n                      [imageEndPoint]=\"uploadImageUrl\"></app-ngx-editor>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label>Created date:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" name=\"createDate\" formControlName=\"createDate\" readonly/>\n                      </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                      <label>Modification date:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" name=\"modificationDate\" formControlName=\"modificationDate\" readonly/>\n                      </div>\n                  </div>\n              </div> -->\n          </form>\n        </div>\n\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"program-tab\" data-toggle=\"tab\" href=\"#program\" role=\"tab\" aria-controls=\"program\" aria-selected=\"true\">Trip program</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#price\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Trip price</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"messages-tab\" data-toggle=\"tab\" href=\"#faq\" role=\"tab\" aria-controls=\"messages\" aria-selected=\"false\">Trip FAQ</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"settings-tab\" data-toggle=\"tab\" href=\"#photos\" role=\"tab\" aria-controls=\"settings\" aria-selected=\"false\">Photos</a>\n          </li>\n        </ul>\n\n        <!-- Tab panes -->\n        <div class=\"tab-content pb-2\">\n          <div class=\"tab-pane active\" id=\"program\" role=\"tabpanel\" aria-labelledby=\"program-tab\"> \n            <div class=\"mt-3\">\n              <div *ngFor=\"let day of programDays\">\n                <div class=\"d-flex justify-content-between\">\n                  <span>Day {{day.dayNumber}}</span>\n                  <span (click)=\"deleteProgramDay(day)\"><i class=\"fas fa-trash-alt\"></i></span>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control mb-1\" [(ngModel)]=\"day.title\"/>\n                  <textarea type=\"text\" [(ngModel)]=\"day.description\"></textarea>\n                </div>      \n              </div>    \n            </div>       \n            <button class=\"btn btn-sm btn-primary\" (click)=\"addNewDayToProgram()\">Add day description</button>\n          </div>\n\n          <div class=\"tab-pane\" id=\"price\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div class=\"mt-3\">\n              <div *ngFor=\"let priceItem of priceItems\">\n                <div class=\"d-flex justify-content-between\">\n                  <span>Item #{{priceItem.sort}}</span>\n                  <span (click)=\"deletePriceItem(priceItem)\"><i class=\"fas fa-trash-alt\"></i></span>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-6\">\n                          <input type=\"text\" class=\"form-control mb-1\" [(ngModel)]=\"priceItem.title\"/>\n                      </div>\n                      <div class=\"col-lg-6\">\n                          <span>is Included in price</span>\n                          <input type=\"checkbox\" class=\"mt-2 ml-2\" [(ngModel)]=\"priceItem.isIncluded\"/>\n                      </div>\n                    </div>\n                  <textarea type=\"text\" [(ngModel)]=\"priceItem.description\"></textarea>\n                </div> \n                \n              </div>\n              <button class=\"btn btn-sm btn-info\" (click)=\"addNewPriceItem()\">Add new price item</button>\n            </div>\n          </div>\n\n          <div class=\"tab-pane\" id=\"faq\" role=\"tabpanel\" aria-labelledby=\"settings-tab\">\n              <div class=\"mt-3\">\n                <div *ngFor=\"let tripFAQ of tripFAQs\">\n                  <div class=\"d-flex justify-content-between\">\n                      <span>Item #{{tripFAQ.sort}}</span>\n                      <span (click)=\"deleteFAQItem(tripFAQ)\"><i class=\"fas fa-trash-alt\"></i></span>\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control mb-1\" [(ngModel)]=\"tripFAQ.title\"/>\n                      <textarea type=\"text\" [(ngModel)]=\"tripFAQ.description\"></textarea>\n                    </div>  \n                </div>\n                <button class=\"btn btn-sm btn-secondary\" (click)=\"addNewFAQItem()\">Add new faq item</button>\n              </div>\n            </div>\n\n          <div class=\"tab-pane\" id=\"photos\" role=\"tabpanel\" aria-labelledby=\"messages-tab\">\n            <div class=\"mt-3\">\n              <div *ngFor=\"let tripFoto of tripFotos\">\n                <div class=\"d-flex justify-content-between\">\n                  <span>Item #{{tripFoto.sort}}</span>\n                  <span (click)=\"deleteFotoItem(tripFoto)\"><i class=\"fas fa-trash-alt\"></i></span>\n                </div>\n                <div class=\"form-group\">                  \n                  <input type=\"text\" class=\"form-control mb-1\" [(ngModel)]=\"tripFoto.title\"/>\n                  <textarea type=\"text\" [(ngModel)]=\"tripFoto.description\"></textarea>\n                </div>     \n              </div>\n              <button class=\"btn btn-sm btn-primary\" (click)=\"addNewFotoItem()\">Add new photo</button>  \n            </div>\n          </div>\n\n          \n        </div>\n\n\n        <div class=\"modal-footer pt-2 pb-0 px-0\">\n          <button class=\"btn btn-outline-dark btn-sm\" type=\"button\" (click)=\"saveChanges()\">Save changes</button>\n        </div>\n    </div>    \n   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/trips/trips-list/trips-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/trips/trips-list/trips-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n   Trips List\n</ol>\n<div>    \n    <table id=\"trips-list\" class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>         \n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let trip of trips$; let i = index;\">\n            <th scope=\"row\">{{ i + 1}}</th>\n            <td>{{ trip.name }}</td>           \n            <td class=\"text-center\">\n              <a (click)=\"editTrip(trip.id)\" class=\"cursor-pointer\"><i class=\"fas fa-pencil-alt\"></i></a>&nbsp;\n              <a (click)=\"deleteTrip(trip.id)\" class=\"cursor-pointer\"><i class=\"fas fa-trash-alt\"></i></a>\n            </td>     \n          </tr>          \n        </tbody>\n      </table>\n</div>\n<div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"addNewTrip()\">Add new trip</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"modal-header py-1 px-3\">\n        <h4 class=\"modal-title h4\" id=\"modal-basic-title\">TypesOfTrip</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0 pb-2\">\n        <div *ngIf=\"currentTypesOfTrip\">\n          <form [formGroup]=\"currentTypesOfTripForm\" id=\"currentTypesOfTripForm\"> \n              <div class=\"form-group\">\n                  <input class=\"form-control d-none\" formControlName=\"id\" />\n              </div>   \n              <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                      <label>Types of trip name:</label>\n                      <div class=\"form-group\">\n                          <input class=\"form-control\" formControlName=\"name\" />\n                      </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Types of trip url:</label>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" formControlName=\"url\" />\n                    </div>\n                  </div>\n                  <div class=\"col-lg-12\">\n                    <label>Types of trip description:</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"description\" ></textarea>\n                    </div>\n                  </div>                 \n                  <div class=\"col-lg-6\">\n                    <label>Seo description</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"seoDescription\" ></textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <label>Seo keywords</label>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" formControlName=\"seoKeywords\" ></textarea>\n                    </div>\n                  </div>               \n              </div>              \n          </form>\n        </div>\n\n\n        <div class=\"modal-footer pt-2 pb-0 px-0\">\n          <button class=\"btn btn-outline-dark btn-sm\" type=\"button\" (click)=\"saveChanges()\">Save changes</button>\n        </div>\n    </div>    \n   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/types-of-trip/types-of-trip-list/types-of-trip-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/types-of-trip/types-of-trip-list/types-of-trip-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    Types of Trip List\n</ol>\n<div>    \n    <table id=\"activitys-list\" class=\"table table-hover\">\n        <thead>\n            <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let typeOfTrip of typesOfTrip$; let i = index;\">\n            <th scope=\"row\">{{ i + 1}}</th>\n            <td>{{ typeOfTrip.name }}</td>\n            <td>{{ typeOfTrip.text }}</td>    \n            <td class=\"text-center\">\n                <a (click)=\"editTypeOfTrip(typeOfTrip.id)\" class=\"cursor-pointer\"><i class=\"fas fa-pencil-alt\"></i></a>&nbsp;\n                <a (click)=\"deleteTypeOfTrip(typeOfTrip.id)\" class=\"cursor-pointer\"><i class=\"fas fa-trash-alt\"></i></a>\n            </td>     \n            </tr>          \n        </tbody>\n        </table>\n</div>\n<div>\n    <button class=\"btn btn-sm btn-primary\" (click)=\"addNewTypeOfTrip()\">Add new type of trip</button>\n</div>"

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
/* harmony import */ var _ui_destinations_destinations_list_destinations_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/destinations/destinations-list/destinations-list.component */ "./src/app/ui/destinations/destinations-list/destinations-list.component.ts");
/* harmony import */ var _ui_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/activities/activities-list/activities-list.component */ "./src/app/ui/activities/activities-list/activities-list.component.ts");
/* harmony import */ var _ui_types_of_trip_types_of_trip_list_types_of_trip_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/types-of-trip/types-of-trip-list/types-of-trip-list.component */ "./src/app/ui/types-of-trip/types-of-trip-list/types-of-trip-list.component.ts");







const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/trips' },
    { path: 'trips', pathMatch: 'full', component: _ui_trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_3__["TripsListComponent"] },
    { path: 'activities', pathMatch: 'full', component: _ui_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_5__["ActivitiesListComponent"] },
    { path: 'destinations', pathMatch: 'full', component: _ui_destinations_destinations_list_destinations_list_component__WEBPACK_IMPORTED_MODULE_4__["DestinationsListComponent"] },
    { path: 'types-of-trip', pathMatch: 'full', component: _ui_types_of_trip_types_of_trip_list_types_of_trip_list_component__WEBPACK_IMPORTED_MODULE_6__["TypesOfTripListComponent"] },
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
/* harmony import */ var _ui_destinations_destinations_list_destinations_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/destinations/destinations-list/destinations-list.component */ "./src/app/ui/destinations/destinations-list/destinations-list.component.ts");
/* harmony import */ var _ui_destinations_destination_edit_destination_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/destinations/destination-edit/destination-edit.component */ "./src/app/ui/destinations/destination-edit/destination-edit.component.ts");
/* harmony import */ var _ui_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/activities/activities-list/activities-list.component */ "./src/app/ui/activities/activities-list/activities-list.component.ts");
/* harmony import */ var _ui_activities_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/activities/activity-edit/activity-edit.component */ "./src/app/ui/activities/activity-edit/activity-edit.component.ts");
/* harmony import */ var _ui_types_of_trip_types_of_trip_list_types_of_trip_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/types-of-trip/types-of-trip-list/types-of-trip-list.component */ "./src/app/ui/types-of-trip/types-of-trip-list/types-of-trip-list.component.ts");
/* harmony import */ var _ui_types_of_trip_types_of_trip_edit_types_of_trip_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component */ "./src/app/ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component.ts");
/* harmony import */ var _ui_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/_modals/confirm-modal/confirm-modal.component */ "./src/app/ui/_modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _ui_trips_trips_list_trips_list_component__WEBPACK_IMPORTED_MODULE_7__["TripsListComponent"],
            _ui_trips_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_8__["TripEditComponent"],
            _ui_destinations_destinations_list_destinations_list_component__WEBPACK_IMPORTED_MODULE_9__["DestinationsListComponent"],
            _ui_destinations_destination_edit_destination_edit_component__WEBPACK_IMPORTED_MODULE_10__["DestinationEditComponent"],
            _ui_activities_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_11__["ActivitiesListComponent"],
            _ui_activities_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_12__["ActivityEditComponent"],
            _ui_types_of_trip_types_of_trip_list_types_of_trip_list_component__WEBPACK_IMPORTED_MODULE_13__["TypesOfTripListComponent"],
            _ui_types_of_trip_types_of_trip_edit_types_of_trip_edit_component__WEBPACK_IMPORTED_MODULE_14__["TypesOfTripEditComponent"],
            _ui_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_16__["AngularEditorModule"]
        ],
        // providers: [
        //   // {provide: APP_BASE_HREF, useValue : '/Admin/AdminHome/Index/' }
        //   {provide: APP_BASE_HREF, useValue : '/' }
        // ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/models/trips/activity.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/trips/activity.model.ts ***!
  \*****************************************************/
/*! exports provided: Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
class Activity {
}


/***/ }),

/***/ "./src/app/core/models/trips/destination.model.ts":
/*!********************************************************!*\
  !*** ./src/app/core/models/trips/destination.model.ts ***!
  \********************************************************/
/*! exports provided: Destination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Destination", function() { return Destination; });
class Destination {
}


/***/ }),

/***/ "./src/app/core/models/trips/price-item.ts":
/*!*************************************************!*\
  !*** ./src/app/core/models/trips/price-item.ts ***!
  \*************************************************/
/*! exports provided: PriceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceItem", function() { return PriceItem; });
class PriceItem {
}


/***/ }),

/***/ "./src/app/core/models/trips/program-day.ts":
/*!**************************************************!*\
  !*** ./src/app/core/models/trips/program-day.ts ***!
  \**************************************************/
/*! exports provided: ProgramDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDay", function() { return ProgramDay; });
class ProgramDay {
}


/***/ }),

/***/ "./src/app/core/models/trips/trip-faq.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/trips/trip-faq.ts ***!
  \***********************************************/
/*! exports provided: TripFAQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripFAQ", function() { return TripFAQ; });
class TripFAQ {
}


/***/ }),

/***/ "./src/app/core/models/trips/trip-foto.ts":
/*!************************************************!*\
  !*** ./src/app/core/models/trips/trip-foto.ts ***!
  \************************************************/
/*! exports provided: TripFoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripFoto", function() { return TripFoto; });
class TripFoto {
}


/***/ }),

/***/ "./src/app/core/models/trips/trip.model.ts":
/*!*************************************************!*\
  !*** ./src/app/core/models/trips/trip.model.ts ***!
  \*************************************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
class Trip {
}


/***/ }),

/***/ "./src/app/core/models/trips/type-of-trip.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/models/trips/type-of-trip.model.ts ***!
  \*********************************************************/
/*! exports provided: TypeOfTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfTrip", function() { return TypeOfTrip; });
class TypeOfTrip {
}


/***/ }),

/***/ "./src/app/core/services/trips/activities.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/trips/activities.service.ts ***!
  \***********************************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let ActivitiesService = class ActivitiesService {
    constructor(http) {
        this.http = http;
    }
    getActivitiesList() {
        return this.http.get('/api/Activities/getActivitiesList/');
    }
    getActivityById(id) {
        return this.http.get('/api/Activities/getActivityById/' + id);
    }
    createActivity(activity) {
        return this.http.post('/api/Activities/createActivity', activity);
    }
    updateActivity(activity) {
        return this.http.post('/api/Activities/updateActivity', activity);
    }
    deleteActivity(id) {
        return this.http.get('/api/Activities/deleteActivity/' + id);
    }
    getKeyValueActivityList() {
        return this.http.get('/api/Activities/getKeyValueActivitiesList/');
    }
};
ActivitiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ActivitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ActivitiesService);



/***/ }),

/***/ "./src/app/core/services/trips/destinations.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/trips/destinations.service.ts ***!
  \*************************************************************/
/*! exports provided: DestinationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationsService", function() { return DestinationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let DestinationsService = class DestinationsService {
    constructor(http) {
        this.http = http;
    }
    getDestinationsList() {
        return this.http.get('/api/Destinations/getDestinationsList/');
    }
    getDestinationById(id) {
        return this.http.get('/api/Destinations/getDestinationById/' + id);
    }
    createDestination(activity) {
        return this.http.post('/api/Destinations/createDestination', activity);
    }
    updateDestination(activity) {
        return this.http.post('/api/Destinations/updateDestination', activity);
    }
    deleteDestination(id) {
        return this.http.get('/api/Destinations/deleteDestination/' + id);
    }
    getKeyValueActivityList() {
        return this.http.get('/api/Destinations/getKeyValueDestinationsList/');
    }
};
DestinationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DestinationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DestinationsService);



/***/ }),

/***/ "./src/app/core/services/trips/trips.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/trips/trips.service.ts ***!
  \******************************************************/
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
    // Program Days methods
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
    // Trip prices methods
    getTripPricesByTripId(tripId) {
        return this.http.get('/api/Trips/getTripPricesByTripId/' + tripId);
    }
    createTripPrice(tripPrice) {
        return this.http.post('/api/Trips/createTripPriceDesc', tripPrice);
    }
    updateTripPrice(tripPrice) {
        return this.http.post('/api/Trips/updateTripPriceDesc', tripPrice);
    }
    deleteTripPrice(tripPriceId) {
        return this.http.get('/api/Trips/deleteTripPriceDesc/' + tripPriceId);
    }
    // Trip FAQ methods
    getTripFAQByTripId(tripId) {
        return this.http.get('/api/Trips/getTripFAQByTripId/' + tripId);
    }
    createTripFAQ(tripPrice) {
        return this.http.post('/api/Trips/createTripFAQ', tripPrice);
    }
    updateTripFAQ(tripPrice) {
        return this.http.post('/api/Trips/updateTripFAQ', tripPrice);
    }
    deleteTripFAQ(tripPriceId) {
        return this.http.get('/api/Trips/deleteTripFAQ/' + tripPriceId);
    }
    // Trip prices methods
    getTripFotosByTripId(tripId) {
        return this.http.get('/api/Trips/getTripFotosByTripId/' + tripId);
    }
    createTripFoto(tripFoto) {
        return this.http.post('/api/Trips/createTripFoto', tripFoto);
    }
    updateTripFoto(tripFoto) {
        return this.http.post('/api/Trips/updateTripFoto', tripFoto);
    }
    deleteTripFoto(tripFotoId) {
        return this.http.get('/api/Trips/deleteTripFoto/' + tripFotoId);
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

/***/ "./src/app/core/services/trips/types-of-trip.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/trips/types-of-trip.service.ts ***!
  \**************************************************************/
/*! exports provided: TypesOfTripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesOfTripService", function() { return TypesOfTripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let TypesOfTripService = class TypesOfTripService {
    constructor(http) {
        this.http = http;
    }
    getTypesOfTripList() {
        return this.http.get('/api/TypesOfTrip/getTypesOfTripList/');
    }
    getTypeOfTripById(id) {
        return this.http.get('/api/TypesOfTrip/getTypeOfTripById/' + id);
    }
    createTypeOfTrip(activity) {
        return this.http.post('/api/TypesOfTrip/createTypeOfTrip', activity);
    }
    updateTypeOfTrip(activity) {
        return this.http.post('/api/TypesOfTrip/updateTypeOfTrip', activity);
    }
    deleteTypeOfTrip(id) {
        return this.http.get('/api/TypesOfTrip/deleteTypeOfTrip/' + id);
    }
    getKeyValueTypesOfTripList() {
        return this.http.get('/api/TypesOfTrip/getKeyValueTypeOfTripsList/');
    }
};
TypesOfTripService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TypesOfTripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TypesOfTripService);



/***/ }),

/***/ "./src/app/ui/_modals/confirm-modal/confirm-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui/_modals/confirm-modal/confirm-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let ConfirmModalComponent = class ConfirmModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.confirmText = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    closeModal(answer) {
        this.activeModal.dismiss();
        this.confirmText.emit(answer);
    }
};
ConfirmModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmModalComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ConfirmModalComponent.prototype, "confirmText", void 0);
ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-modal',
        template: __webpack_require__(/*! raw-loader!./confirm-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/_modals/confirm-modal/confirm-modal.component.html")
    })
], ConfirmModalComponent);



/***/ }),

/***/ "./src/app/ui/activities/activities-list/activities-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ui/activities/activities-list/activities-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActivitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesListComponent", function() { return ActivitiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_trips_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/activities.service */ "./src/app/core/services/trips/activities.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../activity-edit/activity-edit.component */ "./src/app/ui/activities/activity-edit/activity-edit.component.ts");
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_modals/confirm-modal/confirm-modal.component */ "./src/app/ui/_modals/confirm-modal/confirm-modal.component.ts");







let ActivitiesListComponent = class ActivitiesListComponent {
    constructor(activitiesService, modalService) {
        this.activitiesService = activitiesService;
        this.modalService = modalService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.activitiesService.getActivitiesList().subscribe(res => {
            this.activities$ = res;
        }));
    }
    addNewActivity() {
        const modalRef = this.modalService.open(_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_5__["ActivityEditComponent"], { size: 'xl' });
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            // this.trips$ = receivedEntry;
            this.activitiesService.getActivitiesList().subscribe(res => {
                this.activities$ = res;
            });
        });
    }
    editActivity(id) {
        const modalRef = this.modalService.open(_activity_edit_activity_edit_component__WEBPACK_IMPORTED_MODULE_5__["ActivityEditComponent"], { size: 'xl' });
        modalRef.componentInstance.activityId = id;
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            this.activitiesService.getActivitiesList().subscribe(res => {
                this.activities$ = res;
            });
        });
    }
    deleteActivity(id) {
        const modalRef = this.modalService.open(_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], { size: 'lg' });
        modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
        modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
            if (receivedEntry === 'Yes') {
                this.activitiesService.deleteActivity(id).subscribe(res => {
                    this.activities$ = res;
                });
            }
        });
    }
};
ActivitiesListComponent.ctorParameters = () => [
    { type: _core_services_trips_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
ActivitiesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activities-list',
        template: __webpack_require__(/*! raw-loader!./activities-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/activities/activities-list/activities-list.component.html")
    })
], ActivitiesListComponent);



/***/ }),

/***/ "./src/app/ui/activities/activity-edit/activity-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui/activities/activity-edit/activity-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ActivityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityEditComponent", function() { return ActivityEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_trips_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/activities.service */ "./src/app/core/services/trips/activities.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_models_trips_activity_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/models/trips/activity.model */ "./src/app/core/models/trips/activity.model.ts");







let ActivityEditComponent = class ActivityEditComponent {
    constructor(activitiesService, fb, cdr, modal) {
        this.activitiesService = activitiesService;
        this.fb = fb;
        this.cdr = cdr;
        this.modal = modal;
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        this.initcurrentActivity();
        if (this.activityId) {
            this.activitiesService.getActivityById(this.activityId).subscribe(res => {
                this.currentActivity = res;
                this.loadcurrentActivity();
                this.cdr.detectChanges();
            });
        }
        else {
            this.currentActivity = new _core_models_trips_activity_model__WEBPACK_IMPORTED_MODULE_6__["Activity"]();
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
        const newActivity = new _core_models_trips_activity_model__WEBPACK_IMPORTED_MODULE_6__["Activity"]();
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
            this.activitiesService.updateActivity(newActivity).subscribe((res) => {
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
        else {
            this.activitiesService.createActivity(newActivity).subscribe((res) => {
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
    }
};
ActivityEditComponent.ctorParameters = () => [
    { type: _core_services_trips_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActivityEditComponent.prototype, "activityId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ActivityEditComponent.prototype, "updateList", void 0);
ActivityEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-edit',
        template: __webpack_require__(/*! raw-loader!./activity-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/activities/activity-edit/activity-edit.component.html")
    })
], ActivityEditComponent);



/***/ }),

/***/ "./src/app/ui/destinations/destination-edit/destination-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ui/destinations/destination-edit/destination-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: DestinationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationEditComponent", function() { return DestinationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_trips_destinations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/destinations.service */ "./src/app/core/services/trips/destinations.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_models_trips_destination_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/models/trips/destination.model */ "./src/app/core/models/trips/destination.model.ts");







let DestinationEditComponent = class DestinationEditComponent {
    constructor(destinationsService, fb, cdr, modal) {
        this.destinationsService = destinationsService;
        this.fb = fb;
        this.cdr = cdr;
        this.modal = modal;
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        this.initcurrentDestination();
        if (this.destinationId) {
            this.destinationsService.getDestinationById(this.destinationId).subscribe(res => {
                this.currentDestination = res;
                this.loadcurrentDestination();
                this.cdr.detectChanges();
            });
        }
        else {
            this.currentDestination = new _core_models_trips_destination_model__WEBPACK_IMPORTED_MODULE_6__["Destination"]();
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
        const newDestination = new _core_models_trips_destination_model__WEBPACK_IMPORTED_MODULE_6__["Destination"]();
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
            this.destinationsService.updateDestination(newDestination).subscribe((res) => {
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
        else {
            this.destinationsService.createDestination(newDestination).subscribe((res) => {
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
    }
};
DestinationEditComponent.ctorParameters = () => [
    { type: _core_services_trips_destinations_service__WEBPACK_IMPORTED_MODULE_2__["DestinationsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DestinationEditComponent.prototype, "destinationId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DestinationEditComponent.prototype, "updateList", void 0);
DestinationEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-destination-edit',
        template: __webpack_require__(/*! raw-loader!./destination-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/destinations/destination-edit/destination-edit.component.html")
    })
], DestinationEditComponent);



/***/ }),

/***/ "./src/app/ui/destinations/destinations-list/destinations-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/destinations/destinations-list/destinations-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DestinationsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationsListComponent", function() { return DestinationsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_trips_destinations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/destinations.service */ "./src/app/core/services/trips/destinations.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _destination_edit_destination_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../destination-edit/destination-edit.component */ "./src/app/ui/destinations/destination-edit/destination-edit.component.ts");
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_modals/confirm-modal/confirm-modal.component */ "./src/app/ui/_modals/confirm-modal/confirm-modal.component.ts");







let DestinationsListComponent = class DestinationsListComponent {
    constructor(destinationsService, modalService) {
        this.destinationsService = destinationsService;
        this.modalService = modalService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.destinationsService.getDestinationsList().subscribe(res => {
            this.destinations$ = res;
        }));
    }
    addNewDestination() {
        const modalRef = this.modalService.open(_destination_edit_destination_edit_component__WEBPACK_IMPORTED_MODULE_5__["DestinationEditComponent"], { size: 'xl' });
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            // this.trips$ = receivedEntry;
            this.destinationsService.getDestinationsList().subscribe(res => {
                this.destinations$ = res;
            });
        });
    }
    editDestination(id) {
        const modalRef = this.modalService.open(_destination_edit_destination_edit_component__WEBPACK_IMPORTED_MODULE_5__["DestinationEditComponent"], { size: 'xl' });
        modalRef.componentInstance.destinationId = id;
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            this.destinationsService.getDestinationsList().subscribe(res => {
                this.destinations$ = res;
            });
        });
    }
    deleteDestination(id) {
        const modalRef = this.modalService.open(_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], { size: 'lg' });
        modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
        modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
            if (receivedEntry === 'Yes') {
                this.destinationsService.deleteDestination(id).subscribe(res => {
                    this.destinations$ = res;
                });
            }
        });
    }
};
DestinationsListComponent.ctorParameters = () => [
    { type: _core_services_trips_destinations_service__WEBPACK_IMPORTED_MODULE_2__["DestinationsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
DestinationsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-destinations-list',
        template: __webpack_require__(/*! raw-loader!./destinations-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/destinations/destinations-list/destinations-list.component.html")
    })
], DestinationsListComponent);



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
/* harmony import */ var _core_services_trips_trips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/trips.service */ "./src/app/core/services/trips/trips.service.ts");
/* harmony import */ var _core_services_trips_activities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/trips/activities.service */ "./src/app/core/services/trips/activities.service.ts");
/* harmony import */ var _core_services_trips_destinations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/trips/destinations.service */ "./src/app/core/services/trips/destinations.service.ts");
/* harmony import */ var _core_services_trips_types_of_trip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/trips/types-of-trip.service */ "./src/app/core/services/trips/types-of-trip.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_models_trips_trip_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/models/trips/trip.model */ "./src/app/core/models/trips/trip.model.ts");
/* harmony import */ var _core_models_trips_program_day__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/models/trips/program-day */ "./src/app/core/models/trips/program-day.ts");
/* harmony import */ var _core_models_trips_price_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/models/trips/price-item */ "./src/app/core/models/trips/price-item.ts");
/* harmony import */ var _core_models_trips_trip_faq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/models/trips/trip-faq */ "./src/app/core/models/trips/trip-faq.ts");
/* harmony import */ var _core_models_trips_trip_foto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/models/trips/trip-foto */ "./src/app/core/models/trips/trip-foto.ts");














let TripEditComponent = class TripEditComponent {
    constructor(tripsService, activitiesService, destinationsService, typesOfTripService, modalService, fb, cdr, modal) {
        this.tripsService = tripsService;
        this.activitiesService = activitiesService;
        this.destinationsService = destinationsService;
        this.typesOfTripService = typesOfTripService;
        this.modalService = modalService;
        this.fb = fb;
        this.cdr = cdr;
        this.modal = modal;
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.programDays = [];
        this.priceItems = [];
        this.tripFAQs = [];
        this.tripFotos = [];
        this.activities$ = [];
        this.destinations$ = [];
        this.typesOfTrip$ = [];
        this.editorConfig = {
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
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
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
    }
    ngOnInit() {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
        // tslint:disable-next-line:only-arrow-functions
        this.initcurrentTrip();
        this.loadActivities();
        this.loadDestinations();
        this.loadTypesOfTrip();
        if (this.tripId) {
            this.tripsService.getTripById(this.tripId).subscribe(res => {
                this.currentTrip = res;
                this.startDateStr = datePipe.transform(this.currentTrip.startDate, 'MM/dd/yyyy');
                this.endDateStr = datePipe.transform(this.currentTrip.endDate, 'MM/dd/yyyy');
                this.loadcurrentTrip();
                this.loadProgramDays();
                this.loadPriceItems();
                this.loadFAQItems();
                this.loadPhotos();
                this.cdr.detectChanges();
            });
        }
        else {
            this.currentTrip = new _core_models_trips_trip_model__WEBPACK_IMPORTED_MODULE_9__["Trip"]();
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
            seoDescription: [this.currentTrip.seoDescription],
            seoKeywords: [this.currentTrip.seoKeywords],
            destinationId: [this.currentTrip.destinationId],
            activityId: [this.currentTrip.activityId],
            typeOfTripId: [this.currentTrip.typeOfTripId]
        });
    }
    loadActivities() {
        this.activitiesService.getKeyValueActivityList().subscribe(res => {
            this.activities$ = res;
        });
    }
    loadDestinations() {
        this.destinationsService.getKeyValueActivityList().subscribe(res => {
            this.destinations$ = res;
        });
    }
    loadTypesOfTrip() {
        this.typesOfTripService.getKeyValueTypesOfTripList().subscribe(res => {
            this.typesOfTrip$ = res;
        });
    }
    loadProgramDays() {
        this.tripsService.getProgramDaysByTripId(this.tripId).subscribe(res => {
            this.programDays = res;
        });
    }
    loadPriceItems() {
        this.tripsService.getTripPricesByTripId(this.tripId).subscribe(res => {
            this.priceItems = res;
        });
    }
    loadFAQItems() {
        this.tripsService.getTripFAQByTripId(this.tripId).subscribe(res => {
            this.tripFAQs = res;
        });
    }
    loadPhotos() {
        this.tripsService.getTripFotosByTripId(this.tripId).subscribe(res => {
            this.tripFotos = res;
        });
    }
    // Program day methods
    addNewDayToProgram() {
        const newProgramDay = new _core_models_trips_program_day__WEBPACK_IMPORTED_MODULE_10__["ProgramDay"]();
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
    // Price Items methods
    addNewPriceItem() {
        const newPriceItem = new _core_models_trips_price_item__WEBPACK_IMPORTED_MODULE_11__["PriceItem"]();
        newPriceItem.sort = this.priceItems.length + 1;
        this.priceItems.push(newPriceItem);
    }
    deletePriceItem(priceItem) {
        if (priceItem.id !== '' && priceItem.id !== undefined) {
            this.priceItems.splice(priceItem.sort - 1, 1);
        }
    }
    savePriceItems(currentTrip) {
        if (this.currentTrip.id !== '' && this.currentTrip.id !== undefined) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.priceItems.length; i++) {
                this.priceItems[i].isIncluded === null ? this.priceItems[i].isIncluded = false : this.priceItems[i].isIncluded = true;
                this.tripsService.updateTripPrice(this.priceItems[i]).subscribe();
            }
        }
        else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.priceItems.length; i++) {
                this.priceItems[i].tripId = currentTrip.id;
                this.tripsService.createTripPrice(this.priceItems[i]).subscribe();
            }
        }
    }
    // FAQ Items methods
    addNewFAQItem() {
        const newTripFAQ = new _core_models_trips_trip_faq__WEBPACK_IMPORTED_MODULE_12__["TripFAQ"]();
        newTripFAQ.sort = this.tripFAQs.length + 1;
        this.tripFAQs.push(newTripFAQ);
    }
    deleteFAQItem(tripFAQ) {
        if (tripFAQ.id !== '' && tripFAQ.id !== undefined) {
            this.tripFAQs.splice(tripFAQ.sort - 1, 1);
        }
    }
    saveFAQItems(currentTrip) {
        if (this.currentTrip.id !== '' && this.currentTrip.id !== undefined) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.tripFAQs.length; i++) {
                this.tripsService.updateTripFAQ(this.tripFAQs[i]).subscribe();
            }
        }
        else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.tripFAQs.length; i++) {
                this.tripFAQs[i].tripId = currentTrip.id;
                this.tripsService.createTripFAQ(this.tripFAQs[i]).subscribe();
            }
        }
    }
    // Foto Items methods
    addNewFotoItem() {
        const newTripFoto = new _core_models_trips_trip_foto__WEBPACK_IMPORTED_MODULE_13__["TripFoto"]();
        newTripFoto.sort = this.tripFotos.length + 1;
        this.tripFotos.push(newTripFoto);
    }
    deleteFotoItem(tripFoto) {
        if (tripFoto.id !== '' && tripFoto.id !== undefined) {
            this.tripFotos.splice(tripFoto.sort - 1, 1);
        }
    }
    saveFotoItems(currentTrip) {
        if (this.currentTrip.id !== '' && this.currentTrip.id !== undefined) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.tripFotos.length; i++) {
                this.tripsService.updateTripFoto(this.tripFotos[i]).subscribe();
            }
        }
        else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.tripFotos.length; i++) {
                this.tripFotos[i].tripId = currentTrip.id;
                this.tripsService.createTripFoto(this.tripFotos[i]).subscribe();
            }
        }
    }
    saveChanges() {
        const newTrip = new _core_models_trips_trip_model__WEBPACK_IMPORTED_MODULE_9__["Trip"]();
        // tslint:disable-next-line:no-string-literal
        newTrip.id = this.currentTripForm.controls.id.value;
        newTrip.name = this.currentTripForm.controls.name.value;
        newTrip.content = this.currentTripForm.controls.content.value;
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
        newTrip.seoDescription = this.currentTripForm.controls.seoDescription.value;
        newTrip.seoKeywords = this.currentTripForm.controls.seoKeywords.value;
        newTrip.destinationId = this.currentTripForm.controls.destinationId.value;
        newTrip.activityId = this.currentTripForm.controls.activityId.value;
        newTrip.typeOfTripId = this.currentTripForm.controls.typeOfTripId.value;
        if (this.currentTrip.id) {
            this.tripsService.updateTrip(newTrip).subscribe((res) => {
                this.saveProgrmDays(res);
                this.savePriceItems(res);
                this.saveFAQItems(res);
                this.saveFotoItems(res);
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
        else {
            this.tripsService.saveTrip(newTrip).subscribe((res) => {
                this.saveProgrmDays(res);
                this.savePriceItems(res);
                this.saveFAQItems(res);
                this.saveFotoItems(res);
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
    }
};
TripEditComponent.ctorParameters = () => [
    { type: _core_services_trips_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripsService"] },
    { type: _core_services_trips_activities_service__WEBPACK_IMPORTED_MODULE_3__["ActivitiesService"] },
    { type: _core_services_trips_destinations_service__WEBPACK_IMPORTED_MODULE_4__["DestinationsService"] },
    { type: _core_services_trips_types_of_trip_service__WEBPACK_IMPORTED_MODULE_5__["TypesOfTripService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }
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
/* harmony import */ var _core_services_trips_trips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/trips.service */ "./src/app/core/services/trips/trips.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trip-edit/trip-edit.component */ "./src/app/ui/trips/trip-edit/trip-edit.component.ts");
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_modals/confirm-modal/confirm-modal.component */ "./src/app/ui/_modals/confirm-modal/confirm-modal.component.ts");







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
        const modalRef = this.modalService.open(_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__["TripEditComponent"], { size: 'xl' });
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            // this.trips$ = receivedEntry;
            this.tripsService.getTripsList().subscribe(res => {
                this.trips$ = res;
            });
        });
    }
    editTrip(id) {
        const modalRef = this.modalService.open(_trip_edit_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__["TripEditComponent"], { size: 'xl' });
        modalRef.componentInstance.tripId = id;
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            this.tripsService.getTripsList().subscribe(res => {
                this.trips$ = res;
            });
        });
    }
    deleteTrip(id) {
        const modalRef = this.modalService.open(_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], { size: 'lg' });
        modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
        modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
            if (receivedEntry === 'Yes') {
                this.tripsService.deleteTrip(id).subscribe(res => {
                    this.trips$ = res;
                });
            }
        });
    }
};
TripsListComponent.ctorParameters = () => [
    { type: _core_services_trips_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
TripsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trips',
        template: __webpack_require__(/*! raw-loader!./trips-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/trips/trips-list/trips-list.component.html")
    })
], TripsListComponent);



/***/ }),

/***/ "./src/app/ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TypesOfTripEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesOfTripEditComponent", function() { return TypesOfTripEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_trips_types_of_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/types-of-trip.service */ "./src/app/core/services/trips/types-of-trip.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_models_trips_type_of_trip_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/models/trips/type-of-trip.model */ "./src/app/core/models/trips/type-of-trip.model.ts");







let TypesOfTripEditComponent = class TypesOfTripEditComponent {
    constructor(typesOfTripService, fb, cdr, modal) {
        this.typesOfTripService = typesOfTripService;
        this.fb = fb;
        this.cdr = cdr;
        this.modal = modal;
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        this.initcurrentTypesOfTrip();
        if (this.typesOfTripId) {
            this.typesOfTripService.getTypeOfTripById(this.typesOfTripId).subscribe(res => {
                this.currentTypesOfTrip = res;
                this.loadcurrentTypesOfTrip();
                this.cdr.detectChanges();
            });
        }
        else {
            this.currentTypesOfTrip = new _core_models_trips_type_of_trip_model__WEBPACK_IMPORTED_MODULE_6__["TypeOfTrip"]();
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
        const newTypesOfTrip = new _core_models_trips_type_of_trip_model__WEBPACK_IMPORTED_MODULE_6__["TypeOfTrip"]();
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
            this.typesOfTripService.updateTypeOfTrip(newTypesOfTrip).subscribe((res) => {
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
        else {
            this.typesOfTripService.createTypeOfTrip(newTypesOfTrip).subscribe((res) => {
                this.modal.dismiss();
                this.updateList.emit();
            });
        }
    }
};
TypesOfTripEditComponent.ctorParameters = () => [
    { type: _core_services_trips_types_of_trip_service__WEBPACK_IMPORTED_MODULE_2__["TypesOfTripService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TypesOfTripEditComponent.prototype, "typesOfTripId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TypesOfTripEditComponent.prototype, "updateList", void 0);
TypesOfTripEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-types-of-trip-edit',
        template: __webpack_require__(/*! raw-loader!./types-of-trip-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component.html")
    })
], TypesOfTripEditComponent);



/***/ }),

/***/ "./src/app/ui/types-of-trip/types-of-trip-list/types-of-trip-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ui/types-of-trip/types-of-trip-list/types-of-trip-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TypesOfTripListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesOfTripListComponent", function() { return TypesOfTripListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_trips_types_of_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/trips/types-of-trip.service */ "./src/app/core/services/trips/types-of-trip.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _types_of_trip_edit_types_of_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types-of-trip-edit/types-of-trip-edit.component */ "./src/app/ui/types-of-trip/types-of-trip-edit/types-of-trip-edit.component.ts");
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_modals/confirm-modal/confirm-modal.component */ "./src/app/ui/_modals/confirm-modal/confirm-modal.component.ts");







let TypesOfTripListComponent = class TypesOfTripListComponent {
    constructor(typesOfTripService, modalService) {
        this.typesOfTripService = typesOfTripService;
        this.modalService = modalService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.typesOfTripService.getTypesOfTripList().subscribe(res => {
            this.typesOfTrip$ = res;
        }));
    }
    addNewTypeOfTrip() {
        const modalRef = this.modalService.open(_types_of_trip_edit_types_of_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__["TypesOfTripEditComponent"], { size: 'xl' });
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            // this.trips$ = receivedEntry;
            this.typesOfTripService.getTypesOfTripList().subscribe(res => {
                this.typesOfTrip$ = res;
            });
        });
    }
    editTypeOfTrip(id) {
        const modalRef = this.modalService.open(_types_of_trip_edit_types_of_trip_edit_component__WEBPACK_IMPORTED_MODULE_5__["TypesOfTripEditComponent"], { size: 'xl' });
        modalRef.componentInstance.typesOfTripId = id;
        modalRef.componentInstance.updateList.subscribe((receivedEntry) => {
            this.typesOfTripService.getTypesOfTripList().subscribe(res => {
                this.typesOfTrip$ = res;
            });
        });
    }
    deleteTypeOfTrip(id) {
        const modalRef = this.modalService.open(_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], { size: 'lg' });
        modalRef.componentInstance.text = 'Are you sure, you want to delete current item?';
        modalRef.componentInstance.confirmText.subscribe((receivedEntry) => {
            if (receivedEntry === 'Yes') {
                this.typesOfTripService.deleteTypeOfTrip(id).subscribe(res => {
                    this.typesOfTrip$ = res;
                });
            }
        });
    }
};
TypesOfTripListComponent.ctorParameters = () => [
    { type: _core_services_trips_types_of_trip_service__WEBPACK_IMPORTED_MODULE_2__["TypesOfTripService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
TypesOfTripListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-types-of-trip-list',
        template: __webpack_require__(/*! raw-loader!./types-of-trip-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/types-of-trip/types-of-trip-list/types-of-trip-list.component.html")
    })
], TypesOfTripListComponent);



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