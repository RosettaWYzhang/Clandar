webpackJsonp([0],{

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(1194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = (function () {
    function EventModalPageModule() {
    }
    return EventModalPageModule;
}());
EventModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]
        ]
    })
], EventModalPageModule);

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventModalPage = (function () {
    function EventModalPage(navCtrl, navParams, afDB, dataProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.dataProvider = dataProvider;
        this.viewCtrl = viewCtrl;
        this.minDate = new Date().toISOString();
        this.defValue = 2;
        this.uid = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid;
        this.events = afDB.list('/events');
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.navParams.get('selectedDay')).format();
        this.startTime = preselectedDate;
        this.endTime = preselectedDate;
    }
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        this.events.push({
            organizer: this.uid,
            title: this.title,
            location: this.location,
            members: this.members,
            note: this.note,
            startTime: this.startTime,
            endTime: this.endTime,
            urgency: this.urgency,
            status: "In Progress"
        });
        this.event = {
            organizer: this.uid,
            title: this.title,
            location: this.location,
            members: this.members,
            note: this.note,
            startTime: this.startTime,
            endTime: this.endTime,
            allDay: false,
            urgency: 2
        };
        this.viewCtrl.dismiss(this.event);
    };
    return EventModalPage;
}());
EventModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-modal',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\event-modal\event-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Event Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n\n      <ion-input type="text" placeholder="Title" [(ngModel)]="title"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="person" item-start style="color:green"></ion-icon>\n\n      <ion-label>Organizer</ion-label>\n\n      <ion-select [(ngModel)]="organizer">\n\n        <ion-option value="personal">Me</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n\n      <ion-label>Start</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:white"></ion-icon>\n\n      <ion-label>End</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="locate" item-start style="color:LightSeaGreen "></ion-icon>\n\n      <ion-input type="text" placeholder="Location" [(ngModel)]="location"></ion-input>    \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="people" item-start style="color:LightPink "></ion-icon>\n\n        <ion-input type="text" placeholder="Members" [(ngModel)]="members"></ion-input>    \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="create" item-start style="color:rgb(83,184,229)"></ion-icon>\n\n      <ion-input type="text" placeholder="Add Note" [(ngModel)]="note"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n\n      <ion-label>\n\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n\n      </ion-label>\n\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col text-right>\n\n      <button ion-button round end color="secondary" (click)="save()">Save</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<!--<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Event Details</ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n \n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label>Start</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label>End</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Location" [(ngModel)]="event.location"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Members" [(ngModel)]="event.members"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Add Note" [(ngModel)]="event.note"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label>All Day?</ion-label>\n\n      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n \n\n  <button ion-button full icon-left (click)="save()">\n\n    <ion-icon name="checkmark"></ion-icon> Add Event\n\n  </button>\n\n</ion-content>-->'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\event-modal\event-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
], EventModalPage);

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map