webpackJsonp([20],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutProvider = (function () {
    function LogoutProvider(app, loading) {
        this.app = app;
        this.loading = loading;
        console.log("Initializing Logout Provider");
    }
    LogoutProvider.prototype.setApp = function (app) {
        this.app = app;
    };
    LogoutProvider.prototype.doLogout = function () {
        var _this = this;
        this.loading.load();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut().then(function (success) {
            _this.app.getRootNav().popToRoot().then(function () {
                _this.loading.dismiss();
                document.location.href = 'index.html';
            });
        });
    };
    return LogoutProvider;
}());
LogoutProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingProvider */]])
], LogoutProvider);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageModalPage = (function () {
    function ImageModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImageModalPage.prototype.ionViewDidLoad = function () {
        this.image = this.navParams.get('img');
    };
    ImageModalPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return ImageModalPage;
}());
ImageModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-image-modal',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/image-modal/image-modal.html"*/'<ion-content>\n  <div class="content" (click)="close()" tappable>\n    <img src={{image}}/>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/image-modal/image-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], ImageModalPage);

//# sourceMappingURL=image-modal.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_request_modal_request_modal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the Calendar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CalendarPage = (function () {
    function CalendarPage(navCtrl, modalCtrl, alertCtrl, popoverCtrl, asCtrl, afDB, dataProvider, app, ionicCalendar) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.asCtrl = asCtrl;
        this.afDB = afDB;
        this.dataProvider = dataProvider;
        this.app = app;
        this.ionicCalendar = ionicCalendar;
        this.date = new Date(Date.now());
        this.eventSource = [];
        this.selectedDay = new Date();
        this.dd = new Date();
        //t = this.dd.getTime()+1000*60*60*24;
        this.calendar = {
            mode: 'month',
            currentDate: new Date(this.dd)
        };
        this.uid = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid;
        this.email = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.email;
        this.events = afDB.list('/events', {
            query: {
                orderByChild: 'organizer',
                equalTo: this.uid
            }
        });
        this.tasks = afDB.list('/tasks', {
            query: {
                orderByChild: 'email',
                equalTo: this.email
            }
        });
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.email);
        console.log("calendarPage");
        //console.log(new Date(this.t));
        this.loadEvents();
        setTimeout(function () { return _this.today(); }, 100);
        setTimeout(function () { return _this.today(); }, 200);
        setTimeout(function () { return _this.today(); }, 300);
        setTimeout(function () { return _this.today(); }, 400);
        //this.today();
        //console.log(this.events);
        /*[
            {
                "startTime": new Date("2017-08-27T23:49:31+08:00"),
                "endTime": new Date("2017-08-28T23:49:31+08:00"),
                "title": "test",
                "note": "test",
                "urgency": "test",
                "location": "test",
                "members": "test",
                "organizer": "test"
            },
            {
                "startTime": new Date("2017-10-27T23:49:31+08:00"),
                "endTime": new Date("2017-11-27T23:59:31+08:00"),
                "title": "due",
                "allDay": true,
                "note": "test",
                "urgency": "test",
                "userId": "test"
            }

        ];*/
    };
    CalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
        console.log("Today");
    };
    CalendarPage.prototype.loadEvents = function () {
        var _this = this;
        this.eventsToShow = [];
        this.eventSource = [];
        this.afDB.list('/accounts/' + this.uid + '/events').subscribe(function (eventIds) {
            var eids = eventIds;
            if (eventIds) {
                for (var _i = 0, eventIds_1 = eventIds; _i < eventIds_1.length; _i++) {
                    var eventId = eventIds_1[_i];
                    console.log(eventId);
                    _this.dataProvider.getEventByEID(eventId.$value).subscribe(function (event) {
                        _this.eventsToShow.push({
                            "startTime": new Date(event.startTime),
                            "endTime": new Date(event.endTime),
                            "title": event.title,
                            "note": event.note,
                            "urgency": event.urgency,
                            "location": event.location,
                            "members": event.members,
                            "organizer": event.organizer,
                            "eid": event.$key
                        });
                    });
                }
            }
        });
        console.log(this.events);
        this.events.subscribe(function (events) {
            events.forEach(function (event) {
                var testEvent = {
                    "startTime": new Date(event.startTime),
                    "endTime": new Date(event.endTime),
                    "title": event.title,
                    "note": event.note,
                    "urgency": event.urgency,
                    "location": event.location,
                    "members": event.members,
                    "organizer": event.organizer,
                    "eid": event.$key
                };
                var hasEvent = false;
                if (_this.eventsToShow.length > 0) {
                    for (var i = 0; i < _this.eventsToShow.length; i++) {
                        if (_this.eventsToShow[i].eid === testEvent.eid) {
                            hasEvent = true;
                            break;
                        }
                    }
                }
                if (hasEvent === false) {
                    _this.eventsToShow.push(testEvent);
                }
                console.log(testEvent);
                console.log(_this.eventsToShow);
            });
        });
        this.tasks.subscribe(function (tasks) {
            tasks.forEach(function (task) {
                var testTask = {
                    "startTime": new Date(task.due),
                    "endTime": new Date(task.due),
                    "title": task.name + " due",
                    "allDay": true,
                    "note": task.note,
                    "urgency": task.urgency,
                    "userId": _this.uid,
                    "tid": task.$key
                };
                var hasTask = false;
                if (_this.eventsToShow.length > 0) {
                    for (var i = 0; i < _this.eventsToShow.length; i++) {
                        if (_this.eventsToShow[i].tid === testTask.tid) {
                            hasTask = true;
                            break;
                        }
                    }
                }
                if (hasTask == false) {
                    _this.eventsToShow.push(testTask);
                }
                console.log(testTask);
                console.log(_this.eventsToShow);
            });
        });
        console.log(this.eventsToShow);
        this.eventSource = this.eventsToShow;
        console.log(this.eventSource);
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalendarPage.prototype.isSameDay = function (date1, date2) {
        var d1 = date1;
        var d2 = date2;
        if (d1.getDate() == d2.getDate()
            && d1.getMonth() == d2.getMonth()
            && d1.getFullYear() == d2.getFullYear()) {
            return true;
        }
        else
            return false;
    };
    CalendarPage.prototype.dateInRange = function (date, sdate, edate) {
        var d = date;
        var sd = sdate;
        var ed = edate;
        if (d.getTime() > sd.getTime()
            && d.getTime() < ed.getTime()
            && (!this.isSameDay(d, sd))
            && (!this.isSameDay(d, ed))) {
            return true;
        }
        else
            return false;
    };
    CalendarPage.prototype.more = function () {
        var _this = this;
        var isAdmin = false;
        this.dataProvider.getUser(this.uid).subscribe(function (user) {
            if (user.adminedClubs) {
                isAdmin = true;
            }
        });
        if (isAdmin) {
            var actionSheet = this.asCtrl.create({
                title: 'Actions',
                buttons: [
                    /*{
                    text: 'Reload Events',
                    handler: () => {
                        this.loadEvents();
                        console.log('Events loaded');
                    }
                    },*/ {
                        text: 'View My Event Requests',
                        handler: function () {
                            _this.viewRequests();
                            console.log('View My Event Invitations');
                        }
                    }, {
                        text: 'Add New Event',
                        handler: function () {
                            _this.addEvent();
                            console.log('New Event Added');
                        }
                    } /*,{
                    text: 'View My Timeline',
                    handler: () =>{
                        console.log('Timeline displayed');
                    }
                    }*/,
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.asCtrl.create({
                title: 'Actions',
                buttons: [
                    {
                        text: 'Load Events',
                        handler: function () {
                            _this.loadEvents();
                            console.log('Events loaded');
                        }
                    }, {
                        text: 'View My Event Requests',
                        handler: function () {
                            _this.viewRequests();
                            console.log('View My Event Invitations');
                        }
                    }, {
                        text: 'View My Timeline',
                        handler: function () {
                            console.log('Timeline displayed');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    CalendarPage.prototype.popover = function (myEvent) {
        var pop = this.popoverCtrl.create(PopPage);
        pop.present({
            ev: myEvent
        });
    };
    CalendarPage.prototype.addEvent = function () {
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
    };
    CalendarPage.prototype.viewRequests = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_request_modal_request_modal__["a" /* RequestModalPage */]);
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.eventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_6_moment__(event.startTime).format('llll');
        var end = __WEBPACK_IMPORTED_MODULE_6_moment__(event.endTime).format('llll');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: '<br>From:<br>' + start + '<br><br>To:<br>' + end
                + '<br><br>Location: ' + event.location
                + '<br><br>Members: ' + event.members
                + '<br><br>Note: ' + event.note
                + '<br><br>Urgency: ' + event.urgency,
            buttons: ['OK']
        });
        alert.present();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/calendar/calendar.html"*/'<!-- source: http://www.codeexpertz.com/blog/mobile/ionic-2-calendar -->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{viewTitle | date: \'MMM yyyy\'}}</ion-title>\n        <ion-buttons end>\n            <button class="back" ion-button icon-only (click)="more()">\n                <ion-icon name="more"></ion-icon>\n            </button>\n            <!--<button ion-button (click)="loadEvents()" style="font-size:16px">Load Events</button>-->\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n\n    <ion-buttons class="bottom-buttons">\n        <button ion-button (click)="changeMode(\'month\')">M</button>\n        <button ion-button (click)="changeMode(\'week\')">W</button>\n        <!--<button ion-button (click)="changeMode(\'day\')">D</button>-->\n        <button style="float:right" ion-button [disabled]="isToday" (click)="today()">Today</button>\n    </ion-buttons>\n\n    <calendar [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              (onTitleChanged)="onViewTitleChanged($event)"\n              (onTimeSelected)="onTimeSelected($event)"\n              [weekviewNormalEventTemplate]="weekEvents"\n              [monthviewEventDetailTemplate]="monthEventDetail"\n              step="15">\n    </calendar>\n\n    <ng-template #monthEventDetail let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n      <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n        <ion-item *ngFor="let event of selectedDate?.events" (click)="eventSelected(event)">\n          <span *ngIf="isSameDay(event.startTime,event.endTime)&&(!event.allDay)" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'HH:mm\'}} - {{event.endTime|date: \'HH:mm\'}}</span>\n          <span *ngIf="this.isSameDay(this.selectedDay,event.startTime)&&!isSameDay(event.startTime,event.endTime)" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'HH:mm\'}} - 24:00</span>\n          <span *ngIf="this.isSameDay(this.selectedDay,event.endTime)&&!isSameDay(event.startTime,event.endTime)" class="monthview-eventdetail-timecolumn">00:00 - {{event.endTime|date: \'HH:mm\'}}</span>\n          <span *ngIf="this.dateInRange(this.selectedDay,event.startTime,event.endTime)||event.allDay" class="monthview-eventdetail-timecolumn">All day</span>\n          <span class="event-detail"> | {{event.title}}</span>\n        </ion-item>\n        <ion-item *ngIf="selectedDate?.events.length==0">\n          <div class="no-events-label">{{noEventsLabel}}</div>\n        </ion-item>\n      </ion-list>\n    </ng-template>\n    \n    <ng-template #weekEvents let-displayEvent="displayEvent">\n      <div class="calendar-event-inner"       \n      [style.top]="(37*displayEvent.startOffset/hourParts)+\'px\'"\n      [style.left]="100/displayEvent.overlapNumber*displayEvent.position+\'%\'"\n      [style.width]="100+\'%\'"\n      [style.height]="37*(displayEvent.endIndex - displayEvent.startIndex) - 4 + \'px\'">\n        {{displayEvent.event.title}}\n      </div>\n    </ng-template>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/calendar/calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
], CalendarPage);

var PopPage = (function () {
    function PopPage() {
    }
    return PopPage;
}());
PopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'popover',
        template: "\n    <ion-content>\n        <ion-list class=\"popover-page\">\n            <button ion-item detail-none>Load Events</button>\n\n            <button ion-item detail-none>Add New Event</button>\n\n            <button ion-item detail-none class=\"timeline\">View My Timeline</button>\n        </ion-list>\n    </ion-content>\n    "
    }),
    __metadata("design:paramtypes", [])
], PopPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TdlistPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TdlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TdlistPage = (function () {
    function TdlistPage(navCtrl, menuController, modalCtrl, ASCtrl, platform, app, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.modalCtrl = modalCtrl;
        this.ASCtrl = ASCtrl;
        this.platform = platform;
        this.app = app;
        this.afDB = afDB;
        this.myDate = new Date().toISOString();
        this.date = __WEBPACK_IMPORTED_MODULE_4_moment__();
        length = 2;
        this.taskPage = __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* Tasks */];
        this.email = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
        this.tasks = afDB.list('/tasks', {
            query: {
                orderByChild: 'email',
                equalTo: this.email
            }
        });
        var source = __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].interval(150);
        source.subscribe(function (x) {
            _this.date = __WEBPACK_IMPORTED_MODULE_4_moment__();
        });
    }
    TdlistPage.prototype.gotoTaskPage = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* Tasks */]);
    };
    TdlistPage.prototype.collapse = function (taskID, hide) {
        this.tasks.update(taskID, {
            hide: false
        });
    };
    TdlistPage.prototype.hiding = function (taskID, hide) {
        this.tasks.update(taskID, {
            hide: true
        });
    };
    TdlistPage.prototype.edit = function (task) {
        console.log("edit");
        var modal = this.modalCtrl.create(TaskModalPage, {
            tid: task.$key,
            tdue: task.due,
            tdueIn: task.dueIn,
            temail: task.email,
            tname: task.name,
            tnote: task.note,
            treminder: task.reminder,
            turgency: task.urgency
        });
        console.log("tid: " + task.$key +
            ",tdue: " + task.due +
            ",temail: " + task.email +
            ",tname: " + task.name +
            ",tnote: " + task.note +
            ",treminder: " + task.reminder +
            ",turgency: " + task.urgency);
        modal.present();
    };
    TdlistPage.prototype.isBefore = function (time) {
        if (__WEBPACK_IMPORTED_MODULE_4_moment__(time, "YYYY-MM-DD HH:mm").isBefore(this.date))
            return true;
        else
            return false;
    };
    TdlistPage.prototype.more = function (task) {
        var _this = this;
        if (task.finished == false) {
            this.actionSheet = this.ASCtrl.create({
                title: 'Actions',
                buttons: [
                    {
                        text: 'Delete',
                        role: 'destructive',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            console.log('Delete clicked');
                            _this.tasks.remove(task.$key);
                            console.log('Task deleted');
                        }
                    },
                    {
                        text: 'Mark as finished',
                        icon: !this.platform.is('ios') ? 'checkmark' : null,
                        handler: function () {
                            console.log('Marked');
                            _this.tasks.update(task.$key, {
                                finished: true
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
        }
        else {
            this.actionSheet = this.ASCtrl.create({
                title: 'Actions',
                buttons: [
                    {
                        text: 'Delete',
                        role: 'destructive',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            console.log('Delete clicked');
                            _this.tasks.remove(task.$key);
                            console.log('Task deleted');
                        }
                    },
                    {
                        text: 'Mark as in progress',
                        icon: !this.platform.is('ios') ? 'checkmark' : null,
                        handler: function () {
                            console.log('Marked');
                            _this.tasks.update(task.$key, {
                                finished: false
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
        }
        this.actionSheet.present();
    };
    TdlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TdlistPage');
    };
    return TdlistPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
], TdlistPage.prototype, "nav", void 0);
TdlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tdlist',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tdlist/tdlist.html"*/'<!--\n  Generated template for the TdlistPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>   \n    <ion-title>To-do List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item class="head">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-9>\n          <h1 style="color:RGB(255,120,82)">{{myDate | date:\'EEEE, d\'}}</h1>\n          <span>{{myDate | date:\'MMMM, yyyy\'}}</span>\n        </ion-col>\n        <ion-col class="button" col-3>\n          <ion-buttons end>\n            <button (click)="gotoTaskPage()" ion-button clear icon-only>\n              <ion-icon name="add" class="add"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item>\n    <h1>In Progress</h1>\n  </ion-item>\n\n  <ng-container *ngFor="let task of tasks | async">\n    <ion-card *ngIf="task.finished==false">\n      <ion-card-content style="margin-bottom: -20px">\n        <ion-card-title>\n          {{task.name}}\n        </ion-card-title>\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n        <p>Urgency: {{task.urgency}}</p>\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col text-left *ngIf="task.hide==true" col-4>\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-left *ngIf="task.hide==false" col-4>\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-center col-4>\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'create\'></ion-icon>\n            Edit\n          </button>\n        </ion-col>\n        <ion-col text-right col-4>\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n            <ion-icon name=\'more\'></ion-icon>\n            More\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ng-container>\n\n  <ion-item>\n    <h1>Completed</h1>\n  </ion-item>\n\n  <ng-container *ngFor="let task of tasks | async">\n    <ion-card *ngIf="task.finished==true">\n      <ion-card-content style="margin-bottom: -20px">\n        <ion-card-title>\n          {{task.name}}\n        </ion-card-title>\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n        <p>Urgency: {{task.urgency}}</p>\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col *ngIf="task.hide==true" col-4>\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col *ngIf="task.hide==false" col-4>\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-center col-4>\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'create\'></ion-icon>\n            Edit\n          </button>\n        </ion-col>\n        <ion-col text-right col-4>\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n            <ion-icon name=\'more\'></ion-icon>\n            More\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tdlist/tdlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], TdlistPage);

var TaskModalPage = (function () {
    function TaskModalPage(navParams, viewCtrl, afDB) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afDB = afDB;
        this.email = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
        this.tname = this.navParams.get('tname');
        this.tdue = this.navParams.get('tdue');
        this.tnote = this.navParams.get('tnote');
        this.treminder = this.navParams.get('treminder');
        this.turgency = this.navParams.get('turgency');
        this.tid = this.navParams.get('tid');
        this.tasks = afDB.list('/tasks', {
            query: {
                orderByChild: 'email',
                equalTo: this.email
            }
        });
    }
    TaskModalPage.prototype.save = function () {
        this.tasks.update(this.tid, {
            name: this.tname,
            due: this.tdue,
            note: this.tnote,
            reminder: this.treminder,
            urgency: this.turgency
        });
        console.log("tid: " + this.tid +
            ",tdue: " + this.tdue +
            ",temail: " + this.email +
            ",tname: " + this.tname +
            ",tnote: " + this.tnote +
            ",treminder: " + this.treminder +
            ",turgency: " + this.turgency);
        this.viewCtrl.dismiss();
    };
    TaskModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return TaskModalPage;
}());
TaskModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Edit\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)=\"dismiss()\">\n          <span ion-text color=\"secondary\" showWhen=\"ios\">Cancel</span>\n          <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"content\">\n    <ion-list> \n      <ion-item>\n        <ion-icon name=\"bookmark\" item-start style=\"color:orange\"></ion-icon>\n        <ion-input [(ngModel)]=\"tname\" type=\"text\" placeholder=\"{{tname}}\"></ion-input>\n      </ion-item>      \n\n      <ion-item>\n        <ion-icon name=\"calendar\" item-start style=\"color:Salmon\"></ion-icon>\n        <ion-label>Due</ion-label>\n        <ion-datetime [(ngModel)]=\"tdue\" placeholder=\"{{tdue}}\" displayFormat=\"YYYY-MM-DD HH:mm\" pickerFormat=\"DDD DD MMMM YYYY HH:mm\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"calendar\" item-start style=\"color:rgb(83,184,229)\"></ion-icon>\n        <h2 class=\"titles\" style=\"background-color:rgb(83,184,229)\">Add Note</h2>\n        <ion-input [(ngModel)]=\"tnote\" placeholder=\"{{tnote}}\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-toggle [(ngModel)]=\"treminder\" color=\"secondary\" checked=\"{{treminder}}\" style=\"margin-left:-10px\"></ion-toggle>\n        <ion-label>\n          <h2>Reminder</h2>\n        </ion-label>\n        <ion-icon name=\"alarm\" item-start style=\"color:MediumSeaGreen\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"alert\" item-start style=\"color:red;\"></ion-icon>\n        <ion-label>\n          <h2 class=\"titles\" style=\"background-color:red;padding: 10px 8px;border-radius: 8px;color:white\">Urgency</h2>\n        </ion-label>\n        <ion-range [(ngModel)]=\"turgency\" color=\"danger\" min=\"1\" max=\"4\" step=\"1\" snaps=\"true\" style=\"margin-top:-20px\"></ion-range>\n      </ion-item>\n    </ion-list>\n\n    <div style=\"text-align:center\">\n      <button ion-button round end color=\"secondary\" (click)=\"save()\">Save</button>\n    </div>\n  </ion-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], TaskModalPage);

//# sourceMappingURL=tdlist.js.map

/***/ }),

/***/ 1163:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_testing_testing__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, angularfire, fb, data) {
        var _this = this;
        this.angularfire = angularfire;
        this.fb = fb;
        this.data = data;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_testing_testing__["a" /* Testing */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.fb.getToken().then(function (token) {
                console.log(token);
                localStorage.setItem('pushToken', token);
                if (__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser != null || __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser != undefined) {
                    // update token
                    _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).update({
                        pushToken: token
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
            _this.fb.onTokenRefresh().subscribe(function (token) {
                console.log(token);
                localStorage.setItem('pushToken', token);
                if (__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser != null || __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser != undefined) {
                    // update token
                    _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).update({
                        pushToken: token
                    });
                }
            });
            _this.fb.hasPermission().then(function (data) {
                if (data.isEnabled != true) {
                    _this.fb.grantPermission().then(function (data) {
                        console.log(data);
                    });
                }
            });
            _this.fb.onNotificationOpen().subscribe(function (data) {
                console.log(data);
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FriendPipe = (function () {
    function FriendPipe() {
    }
    // FriendPipe
    // Filter friend by name or username.
    FriendPipe.prototype.transform = function (friends, search) {
        if (!friends) {
            return;
        }
        else if (!search) {
            return friends;
        }
        else {
            var term_1 = search.toLowerCase();
            return friends.filter(function (friend) { return friend.name.toLowerCase().indexOf(term_1) > -1 || friend.email.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    return FriendPipe;
}());
FriendPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'friendFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], FriendPipe);

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    // SearchPipe
    // Filter user search results for name or username excluding the excludedIds.
    SearchPipe.prototype.transform = function (accounts, data) {
        var excludedIds = data[0];
        var term = data[1];
        if (!accounts) {
            return;
        }
        else if (!excludedIds) {
            return accounts;
        }
        else if (excludedIds && !term) {
            return accounts.filter(function (account) { return excludedIds.indexOf(account.userId) == -1; });
        }
        else {
            term = term.toLowerCase();
            return accounts.filter(function (account) { return excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.email.toLowerCase().indexOf(term) > -1); });
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'searchFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SearchPipe);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConversationPipe = (function () {
    function ConversationPipe() {
    }
    // ConversationPipe
    // Filter conversation based on friend's name or username.
    ConversationPipe.prototype.transform = function (conversations, search) {
        if (!conversations) {
            return;
        }
        else if (!search) {
            return conversations;
        }
        else {
            var term_1 = search.toLowerCase();
            return conversations.filter(function (conversation) { return conversation.friend.name.toLowerCase().indexOf(term_1) > -1 || conversation.friend.username.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    return ConversationPipe;
}());
ConversationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'conversationFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ConversationPipe);

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    // DateFormatPipe
    // Show moment.js dateFormat for time elapsed.
    DateFormatPipe.prototype.transform = function (date, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(date)).fromNow();
    };
    return DateFormatPipe;
}());
DateFormatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'DateFormat'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DateFormatPipe);

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClubPipe = (function () {
    function ClubPipe() {
    }
    // GroupPipe
    // Filter group by name
    ClubPipe.prototype.transform = function (clubs, search) {
        if (!clubs) {
            return;
        }
        else if (!search) {
            return clubs;
        }
        else {
            var term_1 = search.toLowerCase();
            return clubs.filter(function (club) { return club.name.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    return ClubPipe;
}());
ClubPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'clubFilter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ClubPipe);

//# sourceMappingURL=club.js.map

/***/ }),

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the MemberPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var MemberPipe = (function () {
    function MemberPipe() {
    }
    // FriendPipe
    // Filter member by name or username.
    MemberPipe.prototype.transform = function (members, search) {
        if (!members) {
            return;
        }
        else if (!search) {
            return members;
        }
        else {
            var term_1 = search.toLowerCase();
            return members.filter(function (member) { return member.name.toLowerCase().indexOf(term_1) > -1 || member.email.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    return MemberPipe;
}());
MemberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'memberFilter',
    })
], MemberPipe);

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the EventPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var EventPipe = (function () {
    function EventPipe() {
    }
    EventPipe.prototype.transform = function (events, search) {
        if (!events) {
            return;
        }
        else if (!search) {
            return events;
        }
        else {
            var term_1 = search.toLowerCase();
            return events.filter(function (event) { return event.title.toLowerCase().indexOf(term_1) > -1 || event.club.toLowerCase().indexOf(term_1) > -1; });
        }
    };
    return EventPipe;
}());
EventPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'eventFilter',
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], EventPipe);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    // SearchPeoplePage
    // This is the page where the user can search for other users and send a friend request.
    function SearchPage(navCtrl, navParams, dataProvider, loadingProvider, alertCtrl, angularfire, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.angularfire = angularfire;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.loadingProvider.load();
        this.searchUser = '';
        // Get all users.
        this.dataProvider.getUsers().subscribe(function (accounts) {
            _this.loadingProvider.dismiss();
            _this.accounts = accounts;
            _this.dataProvider.getCurrentUser().subscribe(function (account) {
                // Add own userId as exludedIds.
                _this.excludedIds = [];
                _this.account = account;
                if (_this.excludedIds.indexOf(account.$key) == -1) {
                    _this.excludedIds.push(account.$key);
                }
                // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
                if (account.friends) {
                    account.friends.forEach(function (friend) {
                        if (_this.excludedIds.indexOf(friend) == -1) {
                            _this.excludedIds.push(friend);
                        }
                    });
                }
                // Get requests of the currentUser.
                _this.dataProvider.getRequests(account.$key).subscribe(function (requests) {
                    _this.requestsSent = requests.requestsSent;
                    _this.friendRequests = requests.friendRequests;
                });
            });
        });
    };
    // Back
    SearchPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Get the status of the user in relation to the logged in user.
    SearchPage.prototype.getStatus = function (user) {
        // Returns:
        // 0 when user can be requested as friend.
        // 1 when a friend request was already sent to this user.
        // 2 when this user has a pending friend request.
        if (this.requestsSent) {
            for (var i = 0; i < this.requestsSent.length; i++) {
                if (this.requestsSent[i] == user.$key) {
                    return 1;
                }
            }
        }
        if (this.friendRequests) {
            for (var j = 0; j < this.friendRequests.length; j++) {
                if (this.friendRequests[j] == user.$key) {
                    return 2;
                }
            }
        }
        return 0;
    };
    // Send friend request.
    SearchPage.prototype.sendFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Cancel friend request sent.
    SearchPage.prototype.cancelFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Accept friend request.
    SearchPage.prototype.acceptFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Reject Request',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Accept Request',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // View user.
    SearchPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>Search People</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!-- No other users to send friend request right now. -->\n  <div class="empty-list" *ngIf="accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))">\n    <h1><ion-icon name="md-search"></ion-icon></h1>\n    <p>We can\'t find new users right now</p>\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n  <ion-list class="avatar-list" *ngIf="accounts && accounts.length > 0">\n    <ion-searchbar *ngIf="accounts.length != excludedIds.length" [(ngModel)]="searchUser" placeholder="Search for name or email" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let account of accounts | searchFilter: [excludedIds, searchUser]" no-lines tappable (click)="viewUser(account.$key)">\n      <ion-fab middle right>\n        <!-- Show appropriate buttons depending on the status of this user in relation to the current user. -->\n        <!-- // Returns:\n        // 0 when user can be requested as friend.\n        // 1 when a friend request was already sent to this user.\n        // 2 when this user has a pending friend request. -->\n        <button color="mainColor" ion-fab mini tappable (click)="sendFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 0">\n          <ion-icon name="md-add-circle" class="success"></ion-icon>\n        </button>\n        <button color="mainColor" ion-fab mini tappable (click)="cancelFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 1">\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n        </button>\n        <button color="mainColor" ion-fab mini tappable (click)="acceptFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 2">\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{account.img}}">\n      </ion-avatar>\n      <h2>{{account.name}}</h2>\n      <p>{{account.email}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__club_info_club_info__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the EventInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventInfoPage = (function () {
    // ClubInfoPage
    // This is the page where the user can view club information, change club information, add members, and leave/delete club.
    function EventInfoPage(navCtrl, navParams, dataProvider, loadingProvider, modalCtrl, alertCtrl, alertProvider, firebaseProvider, angularfire, imageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
        this.angularfire = angularfire;
        this.imageProvider = imageProvider;
        this.event = '';
    }
    EventInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventId = this.navParams.get('eventId');
        this.clubMembers = [];
        this.uid = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid;
        this.subscription = this.dataProvider.getEventByEID(this.eventId).subscribe(function (event) {
            if (event.$exists()) {
                _this.loadingProvider.load();
                _this.event = event;
                _this.clubId = event.club;
                if (event.organizer) {
                    var organizerId = event.organizer;
                    _this.dataProvider.getUser(organizerId).subscribe(function (organizer) {
                        _this.organizer = organizer;
                    });
                }
                if (event.members) {
                    event.members.forEach(function (memberId) {
                        _this.dataProvider.getUser(memberId).subscribe(function (member) {
                            _this.addUpdateOrRemoveMember(member);
                        });
                    });
                }
                _this.loadingProvider.dismiss();
            }
            else {
                _this.navCtrl.popToRoot();
            }
        });
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
        this.dataProvider.getClub(this.clubId).subscribe(function (club) {
            _this.club = club;
            var clubMembersIds = club.members;
            if (clubMembersIds) {
                for (var i = 0; i < clubMembersIds.length; i++) {
                    _this.dataProvider.getUser(clubMembersIds[i]).subscribe(function (user) {
                        _this.clubMembers.push(user);
                    });
                }
            }
        });
        this.dataProvider.getEventRequests(this.eventId).subscribe(function (request) {
            _this.eventRequestsSent = request.eventRequestsSent;
        });
        console.log('ionViewDidLoad EventInfoPage');
    };
    EventInfoPage.prototype.isOrganizer = function () {
        if (this.uid == this.organizer.$key) {
            return true;
        }
        else
            return false;
    };
    EventInfoPage.prototype.back = function () {
        this.subscription.unsubscribe();
        this.navCtrl.pop();
    };
    EventInfoPage.prototype.setName = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Event Name',
            message: "Please enter a new club name.",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Event Name',
                    value: this.event.title
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        if (_this.event.title != name) {
                            _this.loadingProvider.load();
                            // Update event on database.
                            _this.dataProvider.getEventByEID(_this.eventId).update({
                                title: name,
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showEventUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.setTime = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Event Time',
            message: "Please enter a new start time and end time.",
            inputs: [
                {
                    name: 'startTime',
                    placeholder: 'New Start Time',
                    type: 'date',
                    value: this.event.startTime
                },
                {
                    name: 'endTime',
                    placeholder: 'New End Time',
                    type: 'date',
                    value: this.event.endTime
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var startTime = data["startTime"];
                        var endTime = data["endTime"];
                        if (_this.event.startTime != startTime || _this.event.endTime != endTime) {
                            _this.loadingProvider.load();
                            // Update event on database.
                            _this.dataProvider.getEventByEID(_this.eventId).update({
                                startTime: startTime,
                                endTime: endTime
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showEventUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.setLocation = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Event Location',
            message: "Please enter a new event location.",
            inputs: [
                {
                    name: 'location',
                    placeholder: 'Event Location',
                    value: this.event.location
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var location = data["location"];
                        if (_this.event.location != location) {
                            _this.loadingProvider.load();
                            // Update event on database.
                            _this.dataProvider.getEventByEID(_this.eventId).update({
                                location: location,
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showEventUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.setNote = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Event Note',
            message: "Please enter a new event note.",
            inputs: [
                {
                    name: 'note',
                    placeholder: 'Event Note',
                    value: this.event.note
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var note = data["note"];
                        if (_this.event.note != note) {
                            _this.loadingProvider.load();
                            // Update event on database.
                            _this.dataProvider.getEventByEID(_this.eventId).update({
                                note: note,
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showEventUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.setUrgency = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Event Urgenvy',
            message: "Please enter a new event urgency(From 1 to 4).",
            inputs: [
                {
                    name: 'urgency',
                    placeholder: 'Event Urgency',
                    value: this.event.urgency
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var urgency = data["urgency"];
                        if (_this.event.urgency != urgency && (_this.event.urgency == 1 || _this.event.urgency == 2 || _this.event.urgency == 3 || _this.event.urgency == 4)) {
                            _this.loadingProvider.load();
                            // Update event on database.
                            _this.dataProvider.getEventByEID(_this.eventId).update({
                                urgency: urgency,
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showEventUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Check if user exists in the club then add/update user.
    // If the user has already left the club, remove user from the list.
    EventInfoPage.prototype.addUpdateOrRemoveMember = function (member) {
        if (this.event) {
            if (this.event.members.indexOf(member.$key) > -1) {
                // User exists in the club.
                if (!this.members) {
                    this.members = [member];
                }
                else {
                    var index = -1;
                    for (var i = 0; i < this.members.length; i++) {
                        if (this.members[i].$key == member.$key) {
                            index = i;
                        }
                    }
                    // Add/Update User.
                    if (index > -1) {
                        this.members[index] = member;
                    }
                    else {
                        this.members.push(member);
                    }
                }
            }
            else {
                // User already left the club, remove member from list.
                var ind = -1;
                for (var j = 0; j < this.members.length; j++) {
                    if (this.members[j].$key == member.$key) {
                        ind = j;
                    }
                }
                if (ind > -1) {
                    this.members.splice(ind, 1);
                }
            }
        }
    };
    EventInfoPage.prototype.viewUser = function (userId) {
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != userId)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    EventInfoPage.prototype.viewOrganizer = function (userId) {
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != userId) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
        }
    };
    EventInfoPage.prototype.viewClub = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__club_info_club_info__["a" /* ClubInfoPage */], { clubId: this.clubId });
    };
    EventInfoPage.prototype.inviteStatus = function (memberId, eventId) {
        var _this = this;
        // 0 when user can be invited.
        // 1 when an invitation has already been sent to this user.
        this.dataProvider.getEventRequests(eventId).subscribe(function (requests) {
            _this.eventRequestsSent = requests.eventRequestsSent;
        });
        if (this.eventRequestsSent) {
            for (var i = 0; i < this.eventRequestsSent.length; i++) {
                if (this.eventRequestsSent[i] == memberId) {
                    return 1;
                }
            }
        }
        return 0;
    };
    // Send friend request.
    EventInfoPage.prototype.invite = function (member) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Send Event Invitations',
            message: 'Do you want to send event invitations to selected club members?',
            buttons: [
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendEventRequest(member.$key, _this.eventId);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.removeFromInvitation = function (member) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Event Request Pending',
            message: 'Do you want to delete your event invitation to <b>' + member.name + '</b>?',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelEventRequest(member.$key, _this.eventId);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.delete = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this event?',
            buttons: [
                {
                    text: 'Delete',
                    handler: function (data) {
                        var itemObservable = _this.angularfire.object('/events/' + _this.eventId);
                        itemObservable.remove();
                        console.log(_this.club);
                        console.log(_this.eventId);
                        var eventsUpdated;
                        _this.dataProvider.getClub(_this.clubId).subscribe(function (club) {
                            eventsUpdated = club.events;
                        });
                        eventsUpdated.splice(eventsUpdated.indexOf(_this.eventId), 1);
                        _this.dataProvider.getClub(_this.clubId).update({
                            events: eventsUpdated
                        });
                        _this.angularfire.object('/requests/' + _this.eventId).remove();
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.join = function () {
        this.alert = this.alertCtrl.create({
            title: 'Ask to Join the Event',
            message: 'Please contact the organizer for event invitation',
            buttons: [
                {
                    text: 'OK'
                }
            ]
        }).present();
    };
    EventInfoPage.prototype.joinedEvent = function () {
        if (this.members) {
            for (var i = 0; i < this.members.length; i++) {
                if (this.members[i].$key == this.uid) {
                    return true;
                }
            }
        }
        return false;
    };
    EventInfoPage.prototype.quit = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Quit',
            message: 'Are you sure you want to quit this event?',
            buttons: [
                {
                    text: 'Quit',
                    handler: function (data) {
                        _this.loadingProvider.load();
                        // Remove member from club.
                        _this.members.splice(_this.members.indexOf(_this.user.$key), 1);
                        // Update club on database.
                        _this.dataProvider.getEventByEID(_this.eventId).update({
                            members: _this.members
                        }).then(function (success) {
                            // Remove club from user's club list.
                            var eventsUpdated;
                            _this.dataProvider.getUser(_this.uid).subscribe(function (user) {
                                eventsUpdated = user.events;
                            });
                            eventsUpdated.splice(eventsUpdated.indexOf(_this.eventId), 1);
                            _this.dataProvider.getUser(_this.uid).update({
                                events: eventsUpdated
                            });
                        }).catch(function (error) {
                            _this.alertProvider.showErrorMessage('club/error-leave-club');
                        });
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    return EventInfoPage;
}());
EventInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-info',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/event-info/event-info.html"*/'<!--\n  Generated template for the EventInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title *ngIf="event">{{event.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!-- Event Info -->\n  <div *ngIf="event">\n    <ion-list>\n      <ion-list-header>\n        Event Info\n      </ion-list-header>\n      <ion-item no-lines class="title">\n        <ion-avatar item-left>\n          <img src="https://firebasestorage.googleapis.com/v0/b/clandar-2e188.appspot.com/o/E.png?alt=media&token=edea099a-74a6-4a5b-8c83-559ae0e6c9b2"/>\n        </ion-avatar>\n        <h2 tappable (click)="setName()" *ngIf="isOrganizer()">{{event.title}}</h2>\n        <h2 tappable *ngIf="!(isOrganizer())">{{event.title}}</h2>\n        <p tappable (click)="setTime()">Start at: {{event.startTime | date: \'d MMM yyyy, EEE, HH:mm\'}}</p>\n        <p tappable (click)="setTime()">End at: {{event.startTime | date: \'d MMM yyyy, EEE, HH:mm\'}}</p>\n      </ion-item>\n      <ion-list-header>\n        Details\n      </ion-list-header>\n      <ion-item class="info" no-lines *ngIf="isOrganizer()">\n        <p class="location" tappable (click)="setLocation()">Location:  {{event.location}}</p>\n      </ion-item>\n      <ion-item class="info" no-lines *ngIf="!(isOrganizer())">\n        <p class="location" tappable>Location:  {{event.location}}</p>\n      </ion-item>\n      <ion-item class="info" no-lines *ngIf="isOrganizer()">\n        <p class="note" tappable (click)="setNote()">Note:  {{event.note}}</p>\n      </ion-item>\n      <ion-item class="info" no-lines *ngIf="!(isOrganizer())">\n        <p class="note" tappable>Note:  {{event.note}}</p>\n      </ion-item>     \n      <ion-item class="info" no-lines *ngIf="isOrganizer()">\n        <p class="urgency" tappable (click)="setUrgency()">Urgency: {{event.urgency}}</p>\n      </ion-item>\n      <ion-item class="info" no-lines *ngIf="!(isOrganizer())">\n        <p class="urgency" tappable>Urgency:  {{event.urgency}}</p>\n      </ion-item>       \n\n      <ion-list-header>\n        Event Members <span *ngIf="event.members&&eventRequestsSent">({{event.members.length}}/{{eventRequestsSent.length}})</span>\n      </ion-list-header>\n      <ion-item *ngFor="let member of members" (click)="viewUser(member.$key)">\n        <ion-avatar item-left>\n          <img src="{{member.img}}" />\n        </ion-avatar>\n        <h2>{{member.name}}</h2>\n        <p>{{member.email}}</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngIf="clubMembers&&clubMembers.length>0">\n      <ion-list-header>\n        Club Members\n      </ion-list-header>\n      <ng-container *ngFor="let member of clubMembers">\n        <ion-item *ngIf="!joinedEvent()" (click)="viewUser(member.$key)">\n          <ion-fab middle right>\n            <button color="mainColor" ion-fab mini tappable (click)="invite(member); $event.stopPropagation();" *ngIf="inviteStatus(member.userId,this.eventId)==0"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n            <button color="mainColor" ion-fab mini tappable (click)="removeFromInvitation(member); $event.stopPropagation();" *ngIf="inviteStatus(member.userId,this.eventId)==1"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n          </ion-fab>\n          <ion-avatar item-left>\n            <img src="{{member.img}}" />\n          </ion-avatar>\n          <h2>{{member.name}}</h2>\n          <p>{{member.email}}</p>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n\n    <ion-list>  \n      <ion-list-header>\n        Organizer Info\n      </ion-list-header>\n      <ion-item (click)="viewOrganizer(organizer.$key)" tappable>\n        <ion-avatar item-start>\n          <img src="{{organizer.img}}" />\n        </ion-avatar>\n        <h2>{{organizer.name}}</h2>\n      </ion-item>      \n      <ion-item (click)="viewClub()" tappable>\n        <ion-avatar item-start>\n          <img src="{{club.img}}" />\n        </ion-avatar>\n        <h2>{{club.name}}</h2>\n        <p>{{club.date | DateFormat}}</p>\n      </ion-item>\n    </ion-list>    \n\n    <ion-list>  \n      <ion-list-header>\n        More\n      </ion-list-header>\n      <ion-item no-lines tappable *ngIf="isOrganizer()" (click)="delete()">\n        Delete this event\n      </ion-item>\n      <!-- When there\'s only one member left, allow deleting of club. -->\n      <ion-item no-lines tappable *ngIf="!isOrganizer()&&joinedEvent()" (click)="quit()">\n        Quit this event\n      </ion-item>\n      <ion-item no-lines tappable *ngIf="!joinedEvent()&&!isOrganizer()" (click)="join()">\n        Ask to join this event\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/event-info/event-info.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */]) === "function" && _k || Object])
], EventInfoPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=event-info.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__searcher_searcher__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tdlist_tdlist__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conversation_conversation__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, angularfire, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_6__tdlist_tdlist__["b" /* TdlistPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_8__conversation_conversation__["a" /* ConversationPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__searcher_searcher__["a" /* Searcher */];
        this.tab5 = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        this.createUserData();
        console.log('ionViewDidLoad TabsPage');
        this.tabRef.select(0);
    };
    // Create userData on the database if it doesn't exist yet.
    TabsPage.prototype.createUserData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref('accounts/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid).once('value')
            .then(function (account) {
            // No database data yet, create user data on database
            if (!account.val()) {
                _this.loadingProvider.load();
                var user = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser;
                var userId, name, provider, img, email;
                var providerData = user.providerData[0];
                userId = user.uid;
                // Get name from Firebase user.
                if (user.displayName || providerData.displayName) {
                    name = user.displayName;
                    name = providerData.displayName;
                }
                else {
                    name = "newUser";
                }
                // Set default username based on name and userId.
                var username = name.replace(/ /g, '') + userId.substring(0, 8);
                // Get provider from Firebase user.
                if (providerData.providerId == 'password') {
                    provider = "Firebase";
                }
                else if (providerData.providerId == 'facebook.com') {
                    provider = "Facebook";
                }
                else if (providerData.providerId == 'google.com') {
                    provider = "Google";
                }
                // Get photoURL from Firebase user.
                if (user.photoURL || providerData.photoURL) {
                    img = user.photoURL;
                    img = providerData.photoURL;
                }
                else {
                    img = "https://firebasestorage.googleapis.com/v0/b/clandar-2e188.appspot.com/o/profile.png?alt=media&token=22fd850b-d8bd-4926-80a4-c87b9032a938";
                }
                // Get email from Firebase user.
                email = user.email;
                // Set default description.
                var description = "No description yet :(";
                // Insert data on our database using AngularFire.
                _this.angularfire.object('/accounts/' + userId).set({
                    userId: userId,
                    name: name,
                    username: username,
                    provider: provider,
                    img: img,
                    email: email,
                    description: description,
                    dateCreated: new Date().toString()
                }).then(function () {
                    _this.loadingProvider.dismiss();
                });
            }
        });
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-tabs #myTabs>\n      <ion-tab tabIcon=\"calendar\" tabTitle=\"Calendar\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabIcon=\"list\" tabTitle=\"To-do List\" [root]=\"tab2\"></ion-tab>\n      <ion-tab tabIcon=\"chatbubbles\" tabTitle=\"Conversation\" [root]=\"tab3\"></ion-tab>\n      <ion-tab tabIcon=\"aperture\" tabTitle=\"Clan\" [root]=\"tab4\"></ion-tab>  \n      <ion-tab tabIcon=\"settings\" tabTitle=\"Settings\" [root]=\"tab5\"></ion-tab>          \n    </ion-tabs>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__information_information__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, app, logoutProvider, dataProvider, loadingProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.logoutProvider.setApp(app);
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingProvider.load();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.dismiss();
            _this.user = user;
            console.log(_this.user);
            //console.log(this.user["userId"]);
            console.log(_this.user["userId"]);
        });
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.gotoInfo = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__information_information__["a" /* InformationPage */]);
    };
    SettingsPage.prototype.gotoContacts = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__contacts_contacts__["a" /* ContactsPage */]);
    };
    SettingsPage.prototype.doLogout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Logout',
                    handler: function (data) {
                        // Log the user out.
                        _this.logoutProvider.doLogout();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* Login */]);
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="settings-content">\n  <div *ngIf="user">\n    <img src="assets/img/regLogo.png" id="bg">\n    <p></p>\n    <ion-list>\n      <ion-item (click)=\'gotoInfo()\'>\n        <ion-avatar item-left>\n          <img src=\'{{user.img}}\'>\n        </ion-avatar>\n        <h2>{{user.name}}</h2>\n        <p>{{user.description}}</p>\n        <ion-icon name="arrow-forward" item-right style="color:gray"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <ion-list full>\n      <ion-item>\n        <button (click)=\'gotoContacts()\' ion-button full>My Contacts</button>\n      </ion-item>\n      <!--<ion-item>\n        <button (click)=\'gotoHomePage()\' ion-button full>Sync with System Calendar</button>\n      </ion-item>-->\n      <ion-item>\n        <button (click)=\'share()\' ion-button full>Invite Your Friends :)</button>\n      </ion-item>\n      <!--<ion-item>\n          <ion-toggle color="secondary" checked="false"></ion-toggle>\n          <ion-label>\n            <h6 class="titles">Allow others to view my calendar</h6>\n          </ion-label>\n      </ion-item>-->\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <button (click)=\'doLogout()\' ion-button full>Log Out</button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__["a" /* LogoutProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams, formBuilder, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        authService.setNavCtrl(navCtrl);
        this.loginForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_5__validation__["a" /* Validator */].emailValidator,
            password: __WEBPACK_IMPORTED_MODULE_5__validation__["a" /* Validator */].passwordValidator
        });
    }
    Login.prototype.login = function () {
        console.log('process login');
        /*let loader = this.loadingCtrl.create({
          content: "Logging in..."
        });
        loader.present();*/
        this.authService.emailLogin(this.loginForm.value["email"], this.loginForm.value["password"]);
    };
    Login.prototype.register = function () {
        console.log("go to register page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    Login.prototype.forgetPassword = function () {
        var _this = this;
        console.log(this.loginForm.value["email"]);
        this.alert = this.alertCtrl.create({
            title: 'Reset Password',
            message: 'Please Enter Your Email Address',
            inputs: [
                {
                    name: 'Email',
                    placeholder: ''
                }
            ],
            buttons: [
                {
                    text: 'Confirm',
                    handler: function (data) {
                        var email = data["Email"];
                        _this.authService.sendPasswordReset(email);
                        _this.loginForm.reset();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/login/login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="login-content">\n  <!--<ion-row class="logo-row">-->\n    <!--<ion-col></ion-col>-->\n      <img src="assets/img/loginLogo1.jpg" id="bg">\n  <!--</ion-row>-->\n  <h6 style="text-align:center;color:black">Together, We make life simpler</h6>\n  <div class="login-box">\n    <form [formGroup]="loginForm">\n      <div class="login-form">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n              <ion-item style="background-color:whitesmoke">\n                <ion-icon name="person" item-left></ion-icon>\n                <ion-input formControlName="email" type="text" placeholder="Email" name="email"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:whitesmoke">\n                <ion-icon name="lock" item-left></ion-icon>\n                <ion-input formControlName="password" type="password" placeholder="Password" name="password"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <div class="login-button">\n          <button ion-button full color="white" (click)="login()" class="submit-btn" [disabled]="!loginForm.valid">Login</button>\n          <button ion-button full color="white" (click)="register()" class="submit-btn" style="background:lightsalmon; font-size: 0.9em;">Register</button>\n          <button ion-button outline color="white" (click)="forgetPassword()" class="forget-btn">Forget Password?</button>\n          <!--<button ion-button outline color="white" class="oauth-btn"   (click)="oauth()">OAuth2 Login</button>\n          <button ion-button outline color="white" (click)="gotoSearchPatientPage()">Search Patient</button>-->\n          </div>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_club_new_club__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clubs_clubs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__club_club__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_info_event_info__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the Searcher page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Searcher = (function () {
    function Searcher(navCtrl, platform, navParams, dataProvider, loadingProvider, imageProvider, afDB, app) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.imageProvider = imageProvider;
        this.afDB = afDB;
        this.app = app;
        this.clan = "club";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
        this.uid = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid;
    }
    Searcher.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchClub = "";
        this.searchEvent = "";
        this.events = [];
        this.allEvents = [];
        this.organizedEvents = [];
        console.log('ionViewDidLoad Searcher');
        this.dataProvider.getClubs().subscribe(function (clubIds) {
            console.log(clubIds);
            if (clubIds.length > 0) {
                if (_this.clubs && _this.clubs.length > clubIds.length) {
                    // User left/deleted a group, clear the list and add or update each group again.
                    _this.clubs = [];
                }
                clubIds.forEach(function (clubId) {
                    _this.dataProvider.getClub(clubId.$key).subscribe(function (club) {
                        if (club.$exists()) {
                            // Get group's unreadMessagesCount
                            club.unreadMessagesCount = club.messages.length - clubId.messagesRead;
                            // Get group's last active date
                            club.date = club.messages[club.messages.length - 1].date;
                            _this.addOrUpdateClub(club);
                        }
                    });
                });
                _this.loadingProvider.dismiss();
            }
            else {
                _this.clubs = [];
                _this.loadingProvider.dismiss();
            }
        });
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.clubs) {
                    that.clubs.forEach(function (club) {
                        var date = club.date;
                        club.date = new Date(date);
                    });
                }
            }, 60000);
        }
        this.dataProvider.getUser(this.uid).subscribe(function (user) {
            if (user.events) {
                var eids = user.events;
                for (var i = 0; i < eids.length; i++) {
                    _this.dataProvider.getEventByEID(eids[i]).subscribe(function (event) {
                        _this.events.push(event);
                    });
                }
            }
        });
        this.afDB.list('/events', {
            query: {
                orderByChild: 'organizer',
                equalTo: this.uid
            }
        }).subscribe(function (events) {
            _this.organizedEvents = events;
        });
        this.afDB.list('/events').subscribe(function (events) {
            _this.allEvents = events;
        });
    };
    Searcher.prototype.getStatus = function (event) {
        //0: organizer 1: participater 2: can join
        if (event.organizer === this.uid) {
            return 0;
        }
        else if (this.joinedEvent(event)) {
            return 1;
        }
        else
            return 2;
    };
    Searcher.prototype.joinedEvent = function (event) {
        if (event.members) {
            for (var i = 0; i < event.members.length; i++) {
                if (event.members[i] == this.uid) {
                    return true;
                }
            }
        }
        return false;
    };
    Searcher.prototype.viewEvent = function (eventId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__event_info_event_info__["a" /* EventInfoPage */], { eventId: eventId });
    };
    Searcher.prototype.addOrUpdateClub = function (club) {
        if (!this.clubs) {
            this.clubs = [club];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.clubs.length; i++) {
                if (this.clubs[i].$key == club.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.clubs[index] = club;
            }
            else
                this.clubs.push(club);
        }
    };
    Searcher.prototype.newClub = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__new_club_new_club__["a" /* NewClubPage */]);
    };
    Searcher.prototype.joinClub = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__clubs_clubs__["a" /* ClubsPage */]);
    };
    Searcher.prototype.viewClub = function (clubId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__club_club__["a" /* ClubPage */], { "clubId": clubId });
    };
    Searcher.prototype.hasUnreadMessages = function (club) {
        if (club.unreadMessagesCount > 0) {
            return 'club bold';
        }
        else
            return 'club';
    };
    return Searcher;
}());
Searcher = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searcher',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/searcher/searcher.html"*/'<!--\n  Generated template for the Searcher page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Clan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=\'content\' no-padding>\n  <div padding>\n    <ion-segment [(ngModel)]="clan"  color="mainColor">\n      <ion-segment-button value="club">\n        Clubs\n      </ion-segment-button>\n      <ion-segment-button value="event">\n        Events\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="clan">\n    <div no-border  *ngSwitchCase="\'club\'">\n      <div class="empty-list" *ngIf="clubs && clubs.length <= 0">\n        <h1><ion-icon name="md-chatbubbles"></ion-icon></h1>\n        <p style="color:gray">You haven\'t joined any club yet.</p>\n        <div class="operation">\n          <button class="operation" ion-button icon-left tappable (click)="newClub()"><ion-icon name="md-add"></ion-icon>Create a club</button>\n          <button class="operation" ion-button icon-left tappable (click)="joinClub()"><ion-icon name="person"></ion-icon>Join a club</button>\n        </div>\n  </div>\n      \n    \n      <ion-list *ngIf="clubs && clubs.length > 0">\n        <div class="operation">\n          <button class="operation" ion-button tappable (click)="newClub()">Create a club</button> \n          <button class="operation" ion-button tappable (click)="joinClub()">Join a club</button>  \n        </div>              \n        <ion-searchbar [(ngModel)]="searchClub" placeholder="Search for your club" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n        <span *ngFor="let club of clubs | clubFilter: searchClub">\n          <ion-item (click)="viewClub(club.$key)" tappable>\n            <ion-avatar [ngClass]=hasUnreadMessages(club) item-start>\n              <img src="{{club.img}}" />\n            </ion-avatar>\n            <h2>{{club.name}}</h2>\n            <p>{{club.date | DateFormat}}</p>\n            <ion-note item-end><ion-badge color="danger" *ngIf="club.unreadMessagesCount > 0">{{club.unreadMessagesCount}}</ion-badge></ion-note>\n          </ion-item>\n        </span>\n      </ion-list>\n    </div>\n\n    <div no-border  *ngSwitchCase="\'event\'">\n      <ion-list *ngIf="organizedEvents&&organizedEvents.length>0">\n        <ion-list-header>\n          Organized By Me\n        </ion-list-header>\n        <ng-container *ngFor="let event of organizedEvents">\n          <ion-item (click)="viewEvent(event.$key)" tappable>\n            <h2>{{event.title}}</h2>\n            <p>{{event.startTime}} -- {{event.endTime}}</p>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n      <ion-list *ngIf="events&&events.length>0">\n        <ion-list-header>\n          Participated Events\n        </ion-list-header>\n        <ng-container *ngFor="let event of events">\n          <ion-item (click)="viewEvent(event.$key)" tappable>\n            <h2>{{event.title}}</h2>\n            <p style="font-size:15px;">{{event.startTime | date: \'d MMM, EEE, HH:mm\'}} - {{event.endTime | date: \'d MMM, EEE, HH:mm\'}}</p>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n      <ion-list *ngIf="allEvents&&allEvents.length>0">\n        <ion-list-header>\n          Event Square\n        </ion-list-header>\n        <ion-searchbar [(ngModel)]="searchEvent" placeholder="Search for events" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n        <ng-container *ngFor="let event of allEvents | eventFilter:searchEvent">\n          <ion-item (click)="viewEvent(event.$key)" tappable>\n            <h2>{{event.title}} <span *ngIf="getStatus(event)==0">(Organized By Me)</span><span *ngIf="getStatus(event)==1">(Participated)</span></h2>\n            <p style="font-size:15px;">{{event.startTime | date: \'d MMM, EEE, HH:mm\'}} - {{event.endTime | date: \'d MMM, EEE, HH:mm\'}}</p>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/searcher/searcher.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _h || Object])
], Searcher);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=searcher.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Tasks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tasks = (function () {
    function Tasks(navCtrl, navParams, alertCtrl, dataProvider, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataProvider = dataProvider;
        this.afDB = afDB;
        this.minDate = new Date().toISOString();
        this.maxDate = "2100-12-31";
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.navParams.get('selectedDay')).format();
        this.due = preselectedDate;
        this.email = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
        this.reminder = false;
        this.urgency = 2;
        this.tasks = afDB.list('/tasks', {
            query: {
                orderByChild: 'email',
                equalTo: this.email
            }
        });
    }
    Tasks.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tasks');
    };
    Tasks.prototype.save = function () {
        if (this.note == undefined) {
            var alert = this.alertCtrl.create({
                title: 'Note is empty',
                subTitle: 'Please fill in the note',
                buttons: ['Dismiss']
            });
            alert.present();
        }
        else if (this.name == undefined) {
            var alert = this.alertCtrl.create({
                title: 'Name is empty',
                subTitle: 'Please fill in the name',
                buttons: ['Dismiss']
            });
            alert.present();
        }
        else {
            this.tasks.push({
                due: this.due,
                email: this.email,
                hide: true,
                name: this.name,
                note: this.note,
                reminder: this.reminder,
                urgency: this.urgency,
                finished: false,
                overdue: false
            });
            this.navCtrl.pop();
        }
    };
    Tasks.prototype.cancel = function () {
        this.navCtrl.pop();
        //this.navCtrl.parent.select(1);
    };
    return Tasks;
}());
Tasks = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tasks',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tasks/tasks.html"*/'<!--\n  Generated template for the Tasks page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>New Task</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="content">\n  <ion-list> \n    <ion-item>\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n      <ion-input [(ngModel)]="name" placeholder="Title" type="text"></ion-input>\n    </ion-item>      \n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n      <ion-label>Due</ion-label>\n      <ion-datetime [(ngModel)]="due" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="YYYY MMM DD HH:mm" min={{minDate}} max={{maxDate}}></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>\n      <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>\n      <ion-input [(ngModel)]="note" placeholder="Add Note" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="reminder" color="secondary" checked="false" style="margin-left:-10px"></ion-toggle>\n      <ion-label>\n        <h2>Reminder</h2>\n      </ion-label>\n      <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n      <ion-label>\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n      </ion-label>\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col text-right>\n      <button ion-button round end color="secondary" (click)="save()">Save</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tasks/tasks.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], Tasks);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoadingProvider = (function () {
    function LoadingProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello LoadingProvider Provider');
    }
    LoadingProvider.prototype.load = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
        }
    };
    LoadingProvider.prototype.dismiss = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    return LoadingProvider;
}());
LoadingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */]])
], LoadingProvider);

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = (function () {
    // Data Provider
    // This is the provider class for most of the Firebase observables in the app.
    function DataProvider(angularfire) {
        this.angularfire = angularfire;
        console.log("Initializing Data Provider");
    }
    // Get all users
    DataProvider.prototype.getUsers = function () {
        return this.angularfire.list('/accounts', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    // Get user with username
    DataProvider.prototype.getUserWithUsername = function (username) {
        return this.angularfire.list('/accounts', {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        });
    };
    // Get logged in user data
    DataProvider.prototype.getCurrentUser = function () {
        return this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid);
    };
    // Get user by their userId
    DataProvider.prototype.getUser = function (userId) {
        return this.angularfire.object('/accounts/' + userId);
    };
    DataProvider.prototype.getEventByEID = function (eid) {
        return this.angularfire.object('/events/' + eid);
    };
    // Get requests given the userId.
    DataProvider.prototype.getRequests = function (userId) {
        return this.angularfire.object('/requests/' + userId);
    };
    DataProvider.prototype.getEventRequests = function (eid) {
        return this.angularfire.object('/requests/' + eid);
    };
    // Get friend requests given the userId.
    DataProvider.prototype.getFriendRequests = function (userId) {
        return this.angularfire.list('/requests', {
            query: {
                orderByChild: 'receiver',
                equalTo: userId
            }
        });
    };
    // Get conversation given the conversationId.
    DataProvider.prototype.getConversation = function (conversationId) {
        return this.angularfire.object('/conversations/' + conversationId);
    };
    // Get conversations of the current logged in user.
    DataProvider.prototype.getConversations = function () {
        return this.angularfire.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/conversations');
    };
    // Get messages of the conversation given the Id.
    DataProvider.prototype.getConversationMessages = function (conversationId) {
        return this.angularfire.object('/conversations/' + conversationId + '/messages');
    };
    // Get messages of the group given the Id.
    DataProvider.prototype.getClubMessages = function (clubId) {
        return this.angularfire.object('/clubs/' + clubId + '/messages');
    };
    DataProvider.prototype.getAllClubs = function () {
        return this.angularfire.list('/clubs', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    // Get groups of the logged in user.
    DataProvider.prototype.getClubs = function () {
        return this.angularfire.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/clubs');
    };
    // Get group info given the groupId.
    DataProvider.prototype.getClub = function (clubId) {
        return this.angularfire.object('/clubs/' + clubId);
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_members_add_members__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_user_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_modal_admin_modal__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ClubInfoPage = (function () {
    // ClubInfoPage
    // This is the page where the user can view club information, change club information, add members, and leave/delete club.
    function ClubInfoPage(navCtrl, navParams, dataProvider, loadingProvider, modalCtrl, alertCtrl, alertProvider, angularfire, imageProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.alertProvider = alertProvider;
        this.angularfire = angularfire;
        this.imageProvider = imageProvider;
        this.camera = camera;
        this.club = '';
    }
    ClubInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.clubId = this.navParams.get('clubId');
        this.uid = __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid;
        // Get club details.
        this.subscription = this.dataProvider.getClub(this.clubId).subscribe(function (club) {
            if (club.$exists()) {
                _this.loadingProvider.load();
                _this.club = club;
                if (club.members) {
                    club.members.forEach(function (memberId) {
                        _this.dataProvider.getUser(memberId).subscribe(function (member) {
                            _this.addUpdateOrRemoveMember(member);
                        });
                    });
                }
                _this.loadingProvider.dismiss();
            }
            else {
                // Club is deleted, go back.
                _this.navCtrl.popToRoot();
            }
        });
        // Get user details.
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
    };
    // Delete subscription.
    // ionViewDidLeave() {
    //   if(this.deleteSubscription)
    //
    // }
    // Check if user exists in the club then add/update user.
    // If the user has already left the club, remove user from the list.
    ClubInfoPage.prototype.addUpdateOrRemoveMember = function (member) {
        if (this.club) {
            if (this.club.members.indexOf(member.$key) > -1) {
                // User exists in the club.
                if (!this.clubMembers) {
                    this.clubMembers = [member];
                }
                else {
                    var index = -1;
                    for (var i = 0; i < this.clubMembers.length; i++) {
                        if (this.clubMembers[i].$key == member.$key) {
                            index = i;
                        }
                    }
                    // Add/Update User.
                    if (index > -1) {
                        this.clubMembers[index] = member;
                    }
                    else {
                        this.clubMembers.push(member);
                    }
                }
            }
            else {
                // User already left the club, remove member from list.
                var ind = -1;
                for (var j = 0; j < this.clubMembers.length; j++) {
                    if (this.clubMembers[j].$key == member.$key) {
                        ind = j;
                    }
                }
                if (ind > -1) {
                    this.clubMembers.splice(ind, 1);
                }
            }
        }
    };
    // View user info.
    ClubInfoPage.prototype.viewUser = function (userId) {
        if (__WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid != userId)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Back
    ClubInfoPage.prototype.back = function () {
        this.subscription.unsubscribe();
        this.navCtrl.pop();
    };
    // Enlarge club image.
    ClubInfoPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    // Change club name.
    ClubInfoPage.prototype.setName = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Club Name',
            message: "Please enter a new club name.",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Club Name',
                    value: this.club.name
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        if (_this.club.name != name) {
                            _this.loadingProvider.load();
                            // Add system message.
                            _this.club.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the club name to: ' + name + '.',
                                icon: 'md-create'
                            });
                            // Update club on database.
                            _this.dataProvider.getClub(_this.clubId).update({
                                name: name,
                                messages: _this.club.messages
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showClubUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Change club image, the user is asked if they want to take a photo or choose from gallery.
    ClubInfoPage.prototype.setPhoto = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Set Club Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.loadingProvider.load();
                        // Upload photo and set to club photo, afterwards, return the club object as promise.
                        _this.imageProvider.setClubPhotoPromise(_this.club, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (club) {
                            // Add system message.
                            _this.club.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the club photo.',
                                icon: 'ios-camera'
                            });
                            // Update club image on database.
                            _this.dataProvider.getClub(_this.clubId).update({
                                img: club.img,
                                messages: _this.club.messages
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showClubUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        });
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.loadingProvider.load();
                        // Upload photo and set to club photo, afterwwards, return the club object as promise.
                        _this.imageProvider.setClubPhotoPromise(_this.club, _this.camera.PictureSourceType.CAMERA).then(function (club) {
                            // Add system message.
                            _this.club.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the club photo.',
                                icon: 'ios-camera'
                            });
                            // Update club image on database.
                            _this.dataProvider.getClub(_this.clubId).update({
                                img: club.img,
                                messages: _this.club.messages
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showClubUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Change club description.
    ClubInfoPage.prototype.setDescription = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Club Description',
            message: "Please enter a new club description.",
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Club Description',
                    value: this.club.description
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var description = data["description"];
                        if (_this.club.description != description) {
                            _this.loadingProvider.load();
                            // Add system message.
                            _this.club.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' has changed the club description.',
                                icon: 'md-clipboard'
                            });
                            // Update club on database.
                            _this.dataProvider.getClub(_this.clubId).update({
                                description: description,
                                messages: _this.club.messages
                            }).then(function (success) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showClubUpdatedMessage();
                            }).catch(function (error) {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showErrorMessage('club/error-update-club');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Leave club.
    ClubInfoPage.prototype.leaveClub = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Leave',
            message: 'Are you sure you want to leave this club?',
            buttons: [
                {
                    text: 'Leave',
                    handler: function (data) {
                        _this.loadingProvider.load();
                        // Remove member from club.
                        _this.club.members.splice(_this.club.members.indexOf(_this.user.$key), 1);
                        // Add system message.
                        _this.club.messages.push({
                            date: new Date().toString(),
                            sender: _this.user.$key,
                            type: 'system',
                            message: _this.user.name + ' left this club',
                            icon: 'md-log-out'
                        });
                        // Update club on database.
                        _this.dataProvider.getClub(_this.clubId).update({
                            members: _this.club.members,
                            messages: _this.club.messages
                        }).then(function (success) {
                            // Remove club from user's club list.
                            _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid + '/clubs/' + _this.clubId).remove().then(function () {
                                // Pop this view because user already has left this club.
                                _this.club = null;
                                setTimeout(function () {
                                    _this.loadingProvider.dismiss();
                                    _this.navCtrl.popToRoot();
                                }, 300);
                            });
                        }).catch(function (error) {
                            _this.alertProvider.showErrorMessage('club/error-leave-club');
                        });
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    //check if logged in user is the creator of the club
    ClubInfoPage.prototype.isCreator = function () {
        return (this.club.creator === this.uid);
    };
    //check if logged in user is the administrator of the club
    ClubInfoPage.prototype.isAdmin = function () {
        for (var i = 0; i < this.club.administrators.length; i++) {
            if (this.club.administrators[i] === this.uid) {
                return true;
            }
        }
        return false;
    };
    ClubInfoPage.prototype.isUserAdmin = function (uid) {
        for (var i = 0; i < this.club.administrators.length; i++) {
            if (this.club.administrators[i] === uid) {
                return true;
            }
        }
        return false;
    };
    // Delete club.
    ClubInfoPage.prototype.deleteClub = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this club?',
            buttons: [
                {
                    text: 'Delete',
                    handler: function (data) {
                        var club = JSON.parse(JSON.stringify(_this.club));
                        // Delete all images of image messages.
                        club.messages.forEach(function (message) {
                            if (message.type == 'image') {
                                console.log("Delete: " + message.url + " of " + club.$key);
                                _this.imageProvider.deleteClubImageFile(club.$key, message.url);
                            }
                        });
                        // Delete club image.
                        console.log("Delete: " + club.img);
                        _this.imageProvider.deleteImageFile(club.img);
                        _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_9_firebase__["auth"]().currentUser.uid + '/clubs/' + club.$key).remove().then(function () {
                            _this.dataProvider.getClub(club.$key).remove();
                        });
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    ClubInfoPage.prototype.adminClub = function () {
        var admins = [];
        var members = [];
        this.clubId = this.navParams.get('clubId');
        this.dataProvider.getClub(this.clubId).subscribe(function (club) {
            admins = club.administrators;
            members = club.members;
        });
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__admin_modal_admin_modal__["a" /* AdminModalPage */], {
            members: members,
            admins: admins,
            clubId: this.clubId
        });
        modal.present();
    };
    // Add members.
    ClubInfoPage.prototype.addMembers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_members_add_members__["a" /* AddMembersPage */], { clubId: this.clubId });
    };
    return ClubInfoPage;
}());
ClubInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-club-info',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club-info/club-info.html"*/'<!--\n  Generated template for the ClubInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title *ngIf="club">{{club.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!-- Club Info -->\n  <div *ngIf="club">\n    <ion-list>\n      <ion-list-header>\n        Club Info\n      </ion-list-header>\n      <ion-item no-lines>\n        <ion-avatar item-left>\n          <img src="{{club.img}}" tappable *ngIf="isAdmin()" (click)="setPhoto()"/>\n          <img src="{{club.img}}" tappable *ngIf="!(isAdmin())"/>\n        </ion-avatar>\n        <h2 tappable (click)="setName()" *ngIf="isAdmin()">{{club.name}}</h2>\n        <h2 tappable *ngIf="!(isAdmin())">{{club.name}}</h2>\n        <p>Started {{club.dateCreated | DateFormat}}</p>\n      </ion-item>\n      <ion-list-header>\n        About\n      </ion-list-header>\n      <ion-item no-lines *ngIf="isAdmin()">\n        <p class="description" tappable (click)="setDescription()">{{club.description}}</p>\n      </ion-item>\n      <ion-item no-lines *ngIf="!(isAdmin())">\n        <p class="description" tappable>{{club.description}}</p>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="clubMembers">\n      <ion-list-header>\n        Club Members ({{clubMembers.length}})\n      </ion-list-header>\n      <ion-item (click)="addMembers()">\n        <ion-icon name="add" item-left></ion-icon>\n        <h2>Add Members</h2>\n      </ion-item>\n      <ion-item *ngFor="let member of clubMembers" (click)="viewUser(member.$key)">\n        <ion-avatar item-left>\n          <img src="{{member.img}}" />\n        </ion-avatar>\n        <h2>{{member.name}}<span *ngIf="isUserAdmin(member.userId)">(Administrator)</span></h2>\n        <p>{{member.description}}</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list style="text-align: center;">  \n      <ion-list-header>\n        More\n      </ion-list-header>\n      <ion-item no-lines tappable (click)="adminClub()" *ngIf="isCreator()">\n        Manage Administration\n      </ion-item>\n      <ion-item no-lines tappable (click)="leaveClub()" *ngIf="clubMembers && clubMembers.length > 1">\n        Leave this club\n      </ion-item>\n      <!-- When there\'s only one member left, allow deleting of club. -->\n      <ion-item no-lines tappable (click)="deleteClub()" *ngIf="clubMembers && clubMembers.length <= 1">\n        Delete this club\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club-info/club-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */]])
], ClubInfoPage);

//# sourceMappingURL=club-info.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, loading, alert, zone) {
        var _this = this;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.zone = zone;
        console.log('Hello AuthServiceProvider Provider');
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                if (user["isAnonymous"]) { }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_5__info__["a" /* Info */].emailVerification) {
                        if (user["emailVerified"]) {
                            //Goto Home Page.
                            _this.zone.run(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__info__["a" /* Info */].tabsPage, { animate: false });
                            });
                            //Since we're using a TabsPage an NgZone is required.
                        }
                        else {
                            //Goto Verification Page.
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__info__["a" /* Info */].verifyPage, { animate: false });
                        }
                    }
                    else {
                        //Goto Home Page.
                        _this.zone.run(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__info__["a" /* Info */].tabsPage, { animate: false });
                        });
                        //Since we're using a TabsPage an NgZone is required.
                    }
                }
            }
        });
    }
    AuthServiceProvider.prototype.setNavCtrl = function (navCtrl) {
        this.navCtrl = navCtrl;
    };
    AuthServiceProvider.prototype.emailLogin = function (email, password) {
        var _this = this;
        this.loading.load();
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (success) {
            _this.loading.dismiss();
        })
            .catch(function (error) {
            _this.loading.dismiss();
            var code = error["code"];
            _this.alert.showErrorMessage(code);
        });
    };
    AuthServiceProvider.prototype.emailRegister = function (email, password) {
        var _this = this;
        this.loading.load();
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (success) {
            //save user info to database
            _this.loginUser = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser;
            console.log("User: ", _this.loginUser);
            /*if (this.loginUser.emailVerified){
              firebase.database().ref('accounts/' + this.loginUser.uid).set({
                email: this.loginUser.email,
                userId: this.loginUser.uid,
                name: 'newUser',
                img: 'https://firebasestorage.googleapis.com/v0/b/clandar-2e188.appspot.com/o/profile.png?alt=media&token=22fd850b-d8bd-4926-80a4-c87b9032a938',
                description: 'No description yet :('
              })
              .catch((error) => {
                console.error("User error",error);
              });
            }*/
            _this.loading.dismiss();
        })
            .catch(function (error) {
            _this.loading.dismiss();
            var code = error["code"];
            _this.alert.showErrorMessage(code);
        });
    };
    AuthServiceProvider.prototype.sendPasswordReset = function (email) {
        var _this = this;
        this.loading.load();
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().sendPasswordResetEmail(email)
            .then(function (success) {
            _this.loading.dismiss();
            _this.alert.showPasswordResetMessage(email);
        })
            .catch(function (error) {
            _this.loading.dismiss();
            var code = error["code"];
            _this.alert.showErrorMessage(code);
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_4__alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verify_verify__ = __webpack_require__(261);


var Info;
(function (Info) {
    // replace with your key
    Info.firebaseConfig = {
        apiKey: "AIzaSyAbihXWCa40DwPvVcy8rL0SYEDY4bOMOsE",
        authDomain: "clandar-2e188.firebaseapp.com",
        databaseURL: "https://clandar-2e188.firebaseio.com",
        projectId: "clandar-2e188",
        storageBucket: "clandar-2e188.appspot.com",
        messagingSenderId: "1038439505893"
    };
    //export const facebookAppId: string = "767580770058358";
    //export const googleClientId: string = "478860799652-526uf84nsn4jfjg0l2trbivm1676ohgb.apps.googleusercontent.com";
    Info.tabsPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
    Info.verifyPage = __WEBPACK_IMPORTED_MODULE_1__pages_verify_verify__["a" /* VerifyPage */];
    Info.emailVerification = true;
})(Info || (Info = {}));
//# sourceMappingURL=info.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__club_info_club_info__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ClubPage = ClubPage_1 = (function () {
    // GroupPage
    // This is the page where the user can chat with other group members and view group info.
    function ClubPage(navCtrl, navParams, dataProvider, modalCtrl, angularfire, alertCtrl, imageProvider, loadingProvider, camera, keyboard, actionSheet, contacts, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.modalCtrl = modalCtrl;
        this.angularfire = angularfire;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.keyboard = keyboard;
        this.actionSheet = actionSheet;
        this.contacts = contacts;
        this.geolocation = geolocation;
        this.startIndex = -1;
        this.scrollDirection = 'bottom';
        // Set number of messages to show.
        this.numberOfMessages = 10;
    }
    ClubPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Get group details
        this.clubId = this.navParams.get('clubId');
        this.subscription = this.dataProvider.getClub(this.clubId).subscribe(function (club) {
            if (club.$exists()) {
                _this.title = club.name;
                // Get group messages
                _this.dataProvider.getClubMessages(club.$key).subscribe(function (messages) {
                    if (_this.messages) {
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > _this.messages.length) {
                            var message_1 = messages[messages.length - 1];
                            _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                                message_1.avatar = user.img;
                            });
                            _this.messages.push(message_1);
                            // Also append to messagesToShow.
                            _this.messagesToShow.push(message_1);
                            // Reset scrollDirection to bottom.
                            _this.scrollDirection = 'bottom';
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        _this.messages = [];
                        messages.forEach(function (message) {
                            _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                                message.avatar = user.img;
                            });
                            _this.messages.push(message);
                        });
                        // Load messages in relation to numOfMessages.
                        if (_this.startIndex == -1) {
                            // Get initial index for numberOfMessages to show.
                            if ((_this.messages.length - _this.numberOfMessages) > 0) {
                                _this.startIndex = _this.messages.length - _this.numberOfMessages;
                            }
                            else {
                                _this.startIndex = 0;
                            }
                        }
                        if (!_this.messagesToShow) {
                            _this.messagesToShow = [];
                        }
                        // Set messagesToShow
                        for (var i = _this.startIndex; i < _this.messages.length; i++) {
                            _this.messagesToShow.push(_this.messages[i]);
                        }
                        _this.loadingProvider.dismiss();
                    }
                });
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(function (message) {
                        var date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Load previous messages in relation to numberOfMessages.
    ClubPage.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.load();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if (that.startIndex - that.numberOfMessages > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            // Set scroll direction to top.
            that.scrollDirection = 'top';
            // Populate list again.
            that.ionViewDidLoad();
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    ClubPage.prototype.ionViewWillLeave = function () {
        if (this.messages)
            this.setMessagesRead(this.messages);
    };
    // Check if currentPage is active, then update user's messagesRead.
    ClubPage.prototype.setMessagesRead = function (messages) {
        if (this.navCtrl.getActive().instance instanceof ClubPage_1) {
            // Update user's messagesRead on database.
            this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid + '/clubs/' + this.clubId).update({
                messagesRead: this.messages.length
            });
        }
    };
    // Check if 'return' button is pressed and send the message.
    ClubPage.prototype.onType = function (keyCode) {
        if (keyCode == 13) {
            // this.keyboard.close();
            // this.send();
        }
    };
    // Back
    ClubPage.prototype.back = function () {
        this.subscription.unsubscribe();
        this.navCtrl.pop();
    };
    // Scroll to bottom of page after a short delay.
    ClubPage.prototype.scrollBottom = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    };
    // Scroll to top of the page after a short delay.
    ClubPage.prototype.scrollTop = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    };
    // Scroll depending on the direction.
    ClubPage.prototype.doScroll = function () {
        if (this.scrollDirection == 'bottom') {
            this.scrollBottom();
        }
        else if (this.scrollDirection == 'top') {
            this.scrollTop();
        }
    };
    // Check if the user is the sender of the message.
    ClubPage.prototype.isSender = function (message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    };
    // Check if the message is a system message.
    ClubPage.prototype.isSystemMessage = function (message) {
        if (message.type == 'system') {
            return true;
        }
        else {
            return false;
        }
    };
    // View user info
    ClubPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    // Send text message to the group.
    ClubPage.prototype.send = function () {
        // Clone an instance of messages object so it will not directly be updated.
        // The messages object should be updated by our observer declared on ionViewDidLoad.
        var messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
            type: 'text',
            message: this.message
        });
        // Update group messages.
        this.dataProvider.getClub(this.clubId).update({
            messages: messages
        });
        // Clear messagebox.
        this.message = '';
    };
    // Enlarge image messages.
    ClubPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    ClubPage.prototype.attach = function () {
        var _this = this;
        var action = this.actionSheet.create({
            title: 'Choose attachments',
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        console.log("take photo");
                        _this.imageProvider.uploadClubPhotoMessage(_this.clubId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: function () {
                        console.log("Access gallery");
                        _this.imageProvider.uploadClubPhotoMessage(_this.clubId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                },
                {
                    text: 'Location',
                    handler: function () {
                        console.log("Location");
                        _this.geolocation.getCurrentPosition({
                            timeout: 2000
                        }).then(function (res) {
                            var locationMessage = "current location: lat:" + res.coords.latitude + " lng:" + res.coords.longitude;
                            var confirm = _this.alertCtrl.create({
                                title: 'Your Location',
                                message: locationMessage,
                                buttons: [{
                                        text: 'Share',
                                        handler: function () {
                                            console.log("share");
                                            _this.message = locationMessage;
                                            _this.send();
                                        }
                                    },
                                    {
                                        text: 'cancel',
                                        handler: function () {
                                            console.log("canceled");
                                        }
                                    }]
                            });
                            confirm.present();
                        }, function (locationErr) {
                            console.log("Location Error" + JSON.stringify(locationErr));
                        });
                    }
                }, {
                    text: 'Contact',
                    handler: function () {
                        console.log("Share contact");
                        _this.contacts.pickContact().then(function (data) {
                            console.log(data.displayName);
                            console.log(data.phoneNumbers[0].value);
                            _this.message = data.displayName + " ph: " + data.phoneNumbers[0].value;
                            _this.send();
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, {
                    text: 'cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancelled");
                    }
                }]
        });
        action.present();
    };
    ClubPage.prototype.takePhoto = function () {
        var _this = this;
        this.imageProvider.uploadClubPhotoMessage(this.clubId, this.camera.PictureSourceType.CAMERA).then(function (url) {
            // Process image message.
            _this.sendPhotoMessage(url);
        });
    };
    // Process photoMessage on database.
    ClubPage.prototype.sendPhotoMessage = function (url) {
        var messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
            type: 'image',
            url: url
        });
        this.dataProvider.getClub(this.clubId).update({
            messages: messages
        });
        this.message = '';
    };
    ClubPage.prototype.sendVideoMessage = function (url) {
        var messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid,
            type: 'video',
            url: url
        });
        this.dataProvider.getClub(this.clubId).update({
            messages: messages
        });
        this.message = '';
    };
    // View group info.
    ClubPage.prototype.clubInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__club_info_club_info__["a" /* ClubInfoPage */], { clubId: this.clubId });
    };
    return ClubPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], ClubPage.prototype, "content", void 0);
ClubPage = ClubPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-club',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club/club.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title tappable (click)="clubInfo()">{{title}}</ion-title>\n    <!-- View Group Info -->\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="clubInfo()"><ion-icon name="ios-more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content has-footer>\n  <!-- Messages -->\n  <div class="messages">\n    <p class="loadPreviousMessages" *ngIf="startIndex > 0"><span tappable (click)="loadPreviousMessages()">Load previous messages</span></p>\n    <ion-row *ngFor="let message of messagesToShow">\n      <!--  System Message -->\n      <ion-col width-100 class="system" *ngIf="isSystemMessage(message)">\n        <span>\n          <ion-icon name="{{message.icon}}"></ion-icon>\n          {{message.message}} {{message.date | DateFormat}}\n        </span>\n        <p></p>\n        <!--<span>{{message.date | DateFormat}}</span>-->\n      </ion-col>\n      <!--  Message -->      \n      <!--system message-->\n      <ion-col width-20 class="center" *ngIf="!isSender(message) && !isSystemMessage(message)">\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()"/>\n      </ion-col>\n      <ion-col width-10 *ngIf="isSender(message) && !isSystemMessage(message)">\n      </ion-col>\n      <ion-col width-67 *ngIf="!isSender(message) && !isSystemMessage(message)">\n        <div class="right" *ngIf="message.type == \'text\'">\n          <p class="textMessage">{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()"/>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <!--your message-->\n      <ion-col width-67 class="sender" *ngIf="isSender(message) && !isSystemMessage(message)">\n        <div class="left" *ngIf="message.type == \'text\'">\n          <p class="textMessage">{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()"/>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <ion-col width-10 *ngIf="!isSender(message) && !isSystemMessage(message)">\n      </ion-col>\n      <ion-col width-20 class="center" *ngIf="isSender(message) && !isSystemMessage(message)">\n        <img src="{{message.avatar}}" (load)="doScroll()"/>\n      </ion-col>\n\n    </ion-row>\n  </div>\n</ion-content>\n<!-- Message Box -->\n<ion-footer>\n  <ion-row>\n      <ion-col col-1>\n        <button item-left ion-button clear (click)="attach()"><ion-icon name="md-attach"></ion-icon></button>\n      </ion-col>\n      <ion-col col-7>\n        <ion-textarea class="inputMessage" type="text" rows="0" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-textarea>\n      </ion-col>\n    <!-- <ion-buttons item-right> -->\n      <ion-col col-2 text-left>\n        <button item-left ion-button clear (click)="takePhoto()"><ion-icon name="md-camera"></ion-icon></button>\n      </ion-col>\n      <ion-col col-2>\n        <button item-right ion-button clear (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n      </ion-col>\n    <!-- </ion-buttons> -->\n    </ion-row>\n  <!-- <div class="bottom_bar">\n    <ion-fab middle left>\n      <button ion-fab mini tappable (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n    </ion-fab>\n    <ion-input type="text" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-input>\n    <ion-fab middle right>\n      <button ion-fab mini tappable (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n    </ion-fab>\n  </div> -->\n</ion-footer>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club/club.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__["a" /* Contacts */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */]])
], ClubPage);

var ClubPage_1;
//# sourceMappingURL=club.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdminModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AdminModalPage = (function () {
    function AdminModalPage(navCtrl, navParams, afDB, dataProvider, loadProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.dataProvider = dataProvider;
        this.loadProvider = loadProvider;
        this.searchMember = '';
        this.admins = this.navParams.get("admins");
        this.members = this.navParams.get("members");
        this.clubId = this.navParams.get("clubId");
    }
    AdminModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminModalPage');
        console.log('Admins: ' + this.admins);
        console.log('Admins Length: ' + this.admins.length);
        for (var i = 0; i < this.admins.length; i++) {
            console.log('admin ' + i + ': ' + this.admins[i] + ' admin $key ' + i + ': ' + this.admins[i].$key);
        }
        for (var i = 0; i < this.admins.length; i++) {
            console.log('admin info ' + i + ': ' + this.adminInfo(this.admins[i]).name);
        }
        for (var i = 0; i < this.members.length; i++) {
            console.log('member info ' + i + ': ' + this.memberInfo(this.members[i]));
        }
        for (var i = 0; i < this.members.length; i++) {
            console.log('member ' + i + ': ' + this.members[i] + ' member $key ' + i + ': ' + this.members[i].$key);
        }
        console.log('members: ' + this.members);
    };
    AdminModalPage.prototype.inAdmins = function (member) {
        for (var i = 0; i < this.admins.length; i++) {
            if (this.admins[i] === member) {
                return true;
            }
        }
        return false;
    };
    AdminModalPage.prototype.adminInfo = function (adminId) {
        var adminInfo;
        this.dataProvider.getUser(adminId).subscribe(function (admin) {
            adminInfo = admin;
        });
        return adminInfo;
    };
    AdminModalPage.prototype.isCreator = function (uid) {
        return (__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid === uid);
    };
    AdminModalPage.prototype.memberInfo = function (memberId) {
        var memberInfo;
        this.dataProvider.getUser(memberId).subscribe(function (member) {
            memberInfo = member;
        });
        return memberInfo;
    };
    AdminModalPage.prototype.addToAdmins = function (member) {
        this.admins.push(member);
    };
    AdminModalPage.prototype.removeFromAdmins = function (member) {
        var index = -1;
        for (var i = 1; i < this.admins.length; i++) {
            if (this.admins[i] == member) {
                index = i;
            }
        }
        if (index > -1) {
            this.admins.splice(index, 1);
        }
    };
    AdminModalPage.prototype.done = function () {
        var _this = this;
        this.loadProvider.load();
        this.afDB.object('/clubs/' + this.clubId).update({
            administrators: this.admins
        });
        for (var i = 0; i < this.admins.length; i++) {
            var newAdminedClub = true;
            var hasAdminedClub = false;
            var addClub;
            this.dataProvider.getUser(this.admins[i]).subscribe(function (user) {
                if (user.adminedClubs) {
                    addClub = user.adminedClubs;
                    hasAdminedClub = true;
                    for (var j = 0; j < user.adminedClubs.length; j++) {
                        if (user.adminedClubs[j] === _this.clubId) {
                            newAdminedClub = false;
                            break;
                        }
                    }
                }
            });
            if (hasAdminedClub) {
                if (newAdminedClub === true) {
                    addClub.push(this.clubId);
                    this.afDB.object('/accounts/' + this.admins[i] + '/adminedClubs/').update(addClub);
                }
            }
            else {
                this.afDB.object('/accounts/' + this.admins[i]).update({
                    adminedClubs: [this.clubId]
                });
            }
        }
        if (this.members) {
            for (var j = 0; j < this.members.length; j++) {
                if (!this.inAdmins(this.members[j])) {
                    var index = -1;
                    var toAddAdminedClubs;
                    this.dataProvider.getUser(this.members[j]).subscribe(function (member) {
                        if (member.adminedClubs) {
                            toAddAdminedClubs = member.adminedClubs;
                            for (var k = 0; k < member.adminedClubs.length; k++) {
                                if (member.adminedClubs[k] === _this.clubId) {
                                    console.log(member);
                                    console.log(toAddAdminedClubs);
                                    toAddAdminedClubs.splice(k, 1);
                                    console.log(toAddAdminedClubs);
                                }
                            }
                        }
                    });
                    if (toAddAdminedClubs) {
                        this.afDB.object('/accounts/' + this.members[j] + '/adminedClubs/').set(toAddAdminedClubs);
                    }
                }
            }
        }
        this.loadProvider.dismiss();
        this.navCtrl.pop();
    };
    AdminModalPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return AdminModalPage;
}());
AdminModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-admin-modal',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/admin-modal/admin-modal.html"*/'<!--\n  Generated template for the AdminModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button class="back" ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Administration Management</ion-title>\n    <ion-buttons end>\n      <button class="back" ion-button tappable (click)="done()" [disabled]="admins.length < 1">Done</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf="admins">\n    <ion-list-header>\n      Administrators\n    </ion-list-header>\n    <ion-item-sliding *ngFor="let admin of admins">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{adminInfo(admin).img}}"/>\n        </ion-avatar>\n        <h2>{{adminInfo(admin).name}}</h2>\n        <p>{{adminInfo(admin).email}}</p>\n      </ion-item>\n      <ion-item-options *ngIf="!isCreator(admin)">\n        <button ion-button (click)="removeFromAdmins(admin)">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf="members">\n    <ion-list-header>\n      Club Members\n    </ion-list-header>\n    <ion-searchbar [(ngModel)]="searchMember" placeholder="Search for members" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let member of members | memberFilter:searchMember" no-lines>\n      <ion-fab middle right>\n        <button color="mainColor" ion-fab mini tappable (click)="addToAdmins(member); $event.stopPropagation();" *ngIf="!inAdmins(member)"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n        <button color="mainColor" ion-fab mini tappable (click)="removeFromAdmins(member); $event.stopPropagation();" *ngIf="inAdmins(member)"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{memberInfo(member).img}}">\n      </ion-avatar>\n      <h2>{{memberInfo(member).name}}</h2>\n      <p>{{memberInfo(member).email}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/admin-modal/admin-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */]])
], AdminModalPage);

//# sourceMappingURL=admin-modal.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_info_event_info__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RequestModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RequestModalPage = (function () {
    // RequestsPage
    // This is the page where the user can see their friend requests sent and received.
    function RequestModalPage(navCtrl, navParams, dataProvider, alertCtrl, angularfire, loadingProvider, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
        this.uid = __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid;
    }
    RequestModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingProvider.load();
        // Get user info
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            _this.account = account;
            // Get eventRequests and eventRequestsSent of the user.
            _this.dataProvider.getRequests(_this.account.userId).subscribe(function (requests) {
                // eventRequests.
                if (requests.eventRequests) {
                    _this.eventRequests = [];
                    requests.eventRequests.forEach(function (eventId) {
                        _this.dataProvider.getEventByEID(eventId).subscribe(function (event) {
                            _this.addOrUpdateEventRequest(event);
                        });
                    });
                }
                else {
                    _this.eventRequests = [];
                }
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Add or update friend request only if not yet friends.
    RequestModalPage.prototype.addOrUpdateEventRequest = function (event) {
        if (!this.eventRequests) {
            this.eventRequests = [event];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.eventRequests.length; i++) {
                if (this.eventRequests[i].$key == event.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                if (!this.invitationAccepted(event.$key))
                    this.eventRequests[index] = event;
            }
            else {
                if (!this.invitationAccepted(event.$key))
                    this.eventRequests.push(event);
            }
        }
    };
    // Back
    RequestModalPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Accept Friend Request.
    RequestModalPage.prototype.acceptEventRequest = function (event) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Accept Invitation',
            message: 'Do you want to accept the invitation to join <b>' + event.title + '</b>?',
            buttons: [
                {
                    text: 'Reject',
                    handler: function () {
                        _this.firebaseProvider.deleteEventRequest(_this.uid, event.$key);
                    }
                },
                {
                    text: 'Accept',
                    handler: function () {
                        _this.firebaseProvider.acceptEventRequest(_this.uid, event.$key);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Checks if user is already friends with this user.
    RequestModalPage.prototype.invitationAccepted = function (eventId) {
        if (this.account.events) {
            if (this.account.events.indexOf(eventId) == -1) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    // View user.
    RequestModalPage.prototype.viewEvent = function (eventId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__event_info_event_info__["a" /* EventInfoPage */], { eventId: eventId });
    };
    return RequestModalPage;
}());
RequestModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-request-modal',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/request-modal/request-modal.html"*/'<!--\n  Generated template for the RequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>Event Requests</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!-- No event requests sent or received. -->\n  <div class="empty-list" *ngIf="(eventRequests && eventRequests.length == 0)">\n    <h1><ion-icon name="md-filing"></ion-icon></h1>\n    <p style="color:gray">No New Invitations</p>\n    <button color="mainColor" ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Show event requests received. -->\n  <ion-list class="avatar-list" *ngIf="eventRequests && eventRequests.length > 0">\n    <ion-item *ngFor="let eventRequest of eventRequests" no-lines tappable (click)="viewEvent(eventRequest.$key)">\n      <ion-fab middle right>\n        <button color="mainColor" ion-fab mini tappable (click)="acceptEventRequest(eventRequest); $event.stopPropagation();">\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="https://firebasestorage.googleapis.com/v0/b/clandar-2e188.appspot.com/o/invite.jpg?alt=media&token=d916e762-3d05-4beb-b74c-fa293c5f7f99">\n      </ion-avatar>\n      <h2>{{eventRequest.title}}</h2>\n      <p>has sent you a event request.</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/request-modal/request-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], RequestModalPage);

//# sourceMappingURL=request-modal.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.authService.setNavCtrl(this.navCtrl);
        this.registerForm = formBuilder.group({
            email: __WEBPACK_IMPORTED_MODULE_3__validation__["a" /* Validator */].emailValidator,
            password: __WEBPACK_IMPORTED_MODULE_3__validation__["a" /* Validator */].passwordValidator
        });
    }
    RegisterPage.prototype.doRegister = function () {
        this.authService.emailRegister(this.registerForm.value["email"], this.registerForm.value["password"]);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="reg-content">\n  <img src="assets/img/regLogo.png" id="bg">\n  <div class="reg-box">\n    <form [formGroup]="registerForm">\n      <h2 style="margin-bottom:15px">Registration</h2>\n      <ion-input formControlName="email" type="text" placeholder="Email" name="email"></ion-input>\n      <ion-input formControlName="password" type="text" placeholder="Password" name="password"></ion-input> \n      <p></p>   \n      <button ion-button full (click)="doRegister()" class="reg-btn">Register!</button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the InformationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InformationPage = (function () {
    function InformationPage(navCtrl, alertCtrl, navParams, app, logoutProvider, loadingProvider, imageProvider, angularfire, alertProvider, dataProvider, camera) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.loadingProvider = loadingProvider;
        this.imageProvider = imageProvider;
        this.angularfire = angularfire;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        this.camera = camera;
        this.logoutProvider.setApp(this.app);
        this.pID = __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.providerData[0].providerId;
        switch (this.pID) {
            case 'password':
                this.provider = "Firebase";
                break;
            case 'google.com':
                this.provider = "Google";
                break;
            case 'facebook.com':
                this.provider = "Facebook";
                break;
        }
        ;
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingProvider.load();
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.loadingProvider.dismiss();
            _this.user = user;
        });
        if (__WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser != null || __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser != undefined) {
            // update token
            this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.uid).update({
                pushToken: localStorage.getItem('pushToken')
            });
        }
        console.log('ionViewDidLoad InformationPage');
    };
    // Change user's profile photo. Uses imageProvider to process image and upload on Firebase and update userData.
    InformationPage.prototype.setPhoto = function () {
        var _this = this;
        // Ask if the user wants to take a photo or choose from photo gallery.
        this.alert = this.alertCtrl.create({
            title: 'Set Profile Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Change user's profile name, username, and description.
    InformationPage.prototype.setName = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Profile Name',
            message: "Please enter a new profile name.",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Your Name',
                    value: this.user.name
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var name = data["name"];
                        // Check if entered name is different from the current name
                        if (_this.user.name != name) {
                            // Check if name's length is more than five characters
                            if (name.length >= __WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profileNameValidator.minLength) {
                                // Check if name contains characters and numbers only.
                                if (__WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profileNameValidator.pattern.test(name)) {
                                    _this.loadingProvider.load();
                                    var profile = {
                                        displayName: name,
                                        photoURL: _this.user.photoURL
                                    };
                                    // Update profile on Firebase
                                    __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updateProfile(profile)
                                        .then(function (success) {
                                        // Update userData on Database.
                                        _this.angularfire.object('/accounts/' + _this.user.userId).update({
                                            name: name
                                        }).then(function (success) {
                                            __WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profileNameValidator.pattern.test(name); //Refresh validator
                                            _this.alertProvider.showProfileUpdatedMessage();
                                        }).catch(function (error) {
                                            _this.alertProvider.showErrorMessage('profile/error-update-profile');
                                        });
                                    })
                                        .catch(function (error) {
                                        // Show error
                                        _this.loadingProvider.dismiss();
                                        var code = error["code"];
                                        _this.alertProvider.showErrorMessage(code);
                                        if (code == 'auth/requires-recent-login') {
                                            _this.logoutProvider.doLogout();
                                        }
                                    });
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/invalid-chars-name');
                                }
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/name-too-short');
                            }
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    //Set description
    InformationPage.prototype.setDescription = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Description',
            message: "Please enter a new description.",
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Your Description',
                    value: this.user.description
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var description = data["description"];
                        // Check if entered description is different from the current description
                        if (_this.user.description != description) {
                            _this.angularfire.object('/accounts/' + _this.user.userId).update({
                                description: description
                            }).then(function (success) {
                                _this.alertProvider.showProfileUpdatedMessage();
                            }).catch(function (error) {
                                _this.alertProvider.showErrorMessage('profile/error-update-profile');
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Change user's email. Uses Validator.ts to validate the entered email. After, update the userData on database.
    // When the user changed their email, they have to confirm the new email address.
    InformationPage.prototype.setEmail = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Email Address',
            message: "Please enter a new email address.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your Email Address',
                    value: this.user.email
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        //Check if entered email is different from the current email
                        if (_this.user.email != email) {
                            //Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                _this.loadingProvider.load();
                                // Update email on Firebase.
                                __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then(function (success) {
                                    // Update userData on Database.
                                    _this.angularfire.object('/accounts/' + _this.user.userId).update({
                                        email: email
                                    }).then(function (success) {
                                        __WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                        // Check if emailVerification is enabled, if it is go to verificationPage.
                                        if (__WEBPACK_IMPORTED_MODULE_9__info__["a" /* Info */].emailVerification) {
                                            if (!__WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.emailVerified) {
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__info__["a" /* Info */].verifyPage);
                                            }
                                        }
                                    }).catch(function (error) {
                                        _this.alertProvider.showErrorMessage('profile/error-change-email');
                                    });
                                })
                                    .catch(function (error) {
                                    //Show error
                                    _this.loadingProvider.dismiss();
                                    var code = error["code"];
                                    _this.alertProvider.showErrorMessage(code);
                                    if (code == 'auth/requires-recent-login') {
                                        _this.logoutProvider.doLogout();
                                    }
                                });
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Change user's password, this option only shows up for users registered via Firebase.
    // The currentPassword is first checked, after which the new password should be entered twice.
    // Uses password validator from Validator.ts.
    InformationPage.prototype.setPassword = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Password',
            message: "Please enter a new password.",
            inputs: [
                {
                    name: 'currentPassword',
                    placeholder: 'Current Password',
                    type: 'password'
                },
                {
                    name: 'password',
                    placeholder: 'New Password',
                    type: 'password'
                },
                {
                    name: 'confirmPassword',
                    placeholder: 'Confirm Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var currentPassword = data["currentPassword"];
                        var credential = __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"].EmailAuthProvider.credential(_this.user.email, currentPassword);
                        // Check if currentPassword entered is correct
                        _this.loadingProvider.load();
                        __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.reauthenticateWithCredential(credential)
                            .then(function (success) {
                            var password = data["password"];
                            // Check if entered password is not the same as the currentPassword
                            if (password != currentPassword) {
                                if (password.length >= __WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profilePasswordValidator.minLength) {
                                    if (__WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profilePasswordValidator.pattern.test(password)) {
                                        if (password == data["confirmPassword"]) {
                                            // Update password on Firebase.
                                            __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.updatePassword(password)
                                                .then(function (success) {
                                                _this.loadingProvider.dismiss();
                                                __WEBPACK_IMPORTED_MODULE_8__validation__["a" /* Validator */].profilePasswordValidator.pattern.test(password);
                                                _this.alertProvider.showPasswordChangedMessage();
                                            })
                                                .catch(function (error) {
                                                _this.loadingProvider.dismiss();
                                                var code = error["code"];
                                                _this.alertProvider.showErrorMessage(code);
                                                if (code == 'auth/requires-recent-login') {
                                                    _this.logoutProvider.doLogout();
                                                }
                                            });
                                        }
                                        else {
                                            _this.alertProvider.showErrorMessage('profile/passwords-do-not-match');
                                        }
                                    }
                                    else {
                                        _this.alertProvider.showErrorMessage('profile/invalid-chars-password');
                                    }
                                }
                                else {
                                    _this.alertProvider.showErrorMessage('profile/password-too-short');
                                }
                            }
                        })
                            .catch(function (error) {
                            //Show error
                            _this.loadingProvider.dismiss();
                            var code = error["code"];
                            _this.alertProvider.showErrorMessage(code);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
    // If you added some other info or traces for the account, make sure to account for them when deleting the account.
    InformationPage.prototype.deleteAccount = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete your account? This cannot be undone.',
            buttons: [
                {
                    text: 'Delete',
                    handler: function (data) {
                        _this.loadingProvider.load();
                        // Delete Firebase user
                        __WEBPACK_IMPORTED_MODULE_10_firebase__["auth"]().currentUser.delete()
                            .then(function (success) {
                            // Delete profilePic of user on Firebase storage
                            _this.imageProvider.deleteUserImageFile(_this.user);
                            // Delete user data on Database
                            _this.angularfire.object('/accounts/' + _this.user.userId).remove().then(function () {
                                _this.loadingProvider.dismiss();
                                _this.alertProvider.showAccountDeletedMessage();
                                _this.logoutProvider.doLogout();
                            });
                        })
                            .catch(function (error) {
                            _this.loadingProvider.dismiss();
                            var code = error["code"];
                            _this.alertProvider.showErrorMessage(code);
                            if (code == 'auth/requires-recent-login') {
                                _this.logoutProvider.doLogout();
                            }
                        });
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    // Log the user out.
    InformationPage.prototype.logout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Logout',
                    handler: function (data) { _this.logoutProvider.doLogout(); }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    return InformationPage;
}());
InformationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-information',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/information/information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="content">\n  <div *ngIf="user">\n    <ion-list>\n      <!--<ion-list-header>\n        My Account\n      </ion-list-header>-->\n      <ion-item no-lines class="head">\n        <p></p><p></p><p></p><p></p><p></p>\n        <div class="tx">\n          <ion-img class="img" src="{{user.img}}" tappable (click)="setPhoto()"></ion-img>\n        </div>\n        <p></p>\n        <h2 style="text-align:center;font-size:22px;color:white" tappable (click)="setName()">{{user.name}} </h2>\n        <p></p><p></p><p></p>\n      </ion-item>\n      <ion-list-header>\n        Status\n      </ion-list-header>\n      <ion-item no-lines>\n        <p style="font-size:18px;" tappable (click)="setDescription()" class="description">{{user.description}}</p>\n      </ion-item>\n      <ion-list-header>\n        More\n      </ion-list-header>\n      <ion-item class="opt" tappable (click)="setEmail()">\n        Change Email Address\n      </ion-item>\n      <ion-item class="opt" tappable (click)="setPassword()" *ngIf="user && this.provider == \'Firebase\'">\n        Change Password\n      </ion-item>\n      <ion-item class="opt" tappable (click)="deleteAccount()">\n        Delete Account\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/information/information.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__["a" /* LogoutProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */]])
], InformationPage);

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requests_requests__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_user_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams, app, loadingProvider, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.friendSearch = '';
        this.loadingProvider.load();
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).subscribe(function (requests) {
            _this.friendRequests = requests.friendRequests;
        });
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            if (user.friends) {
                for (var i = 0; i < user.friends.length; i++) {
                    _this.dataProvider.getUser(user.friends[i]).subscribe(function (friend) {
                        _this.updateFriends(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
            _this.loadingProvider.dismiss();
        });
        console.log('ionViewDidLoad ContactsPage');
    };
    //use stack to store friends
    ContactsPage.prototype.updateFriends = function (friend) {
        if (this.friends) {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            //friend exists in friends 
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
        else {
            this.friends = [friend];
        }
    };
    ContactsPage.prototype.manageRequests = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__requests_requests__["a" /* RequestsPage */]);
    };
    ContactsPage.prototype.searchPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    ContactsPage.prototype.viewUser = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    ContactsPage.prototype.message = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], { userId: userId });
    };
    // Back
    ContactsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return ContactsPage;
}());
ContactsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contacts',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/contacts/contacts.html"*/'<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>Friends</ion-title>\n    <ion-buttons end>\n      <button class="back" ion-button icon-only tappable (click)="manageRequests()"><ion-icon name="md-filing"></ion-icon><ion-badge color="danger" *ngIf="friendRequests">{{friendRequests.length}}</ion-badge></button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button class="back" ion-button icon-only tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!-- No friends to show -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <h1><ion-icon name="contacts"></ion-icon></h1>\n    <p style="color:gray">You don\'t have new friends yet</p>\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="search"></ion-icon>Search People</button>\n  </div>\n  <!-- Show list of friends -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="friendSearch" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" (click)="message(friend.$key); $event.stopPropagation();">\n      <ion-avatar item-left>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>{{friend.description}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/contacts/contacts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */]])
], ContactsPage);

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ClubsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClubsPage = (function () {
    function ClubsPage(navCtrl, platform, navParams, dataProvider, loadingProvider, alertProvider, imageProvider, alertCtrl, afDB, app) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.imageProvider = imageProvider;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.app = app;
    }
    ClubsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
        this.search = "";
        console.log('ionViewDidLoad ClubsPage');
        this.clubs = [];
        this.dataProvider.getAllClubs().subscribe(function (clubs) {
            if (clubs) {
                clubs.forEach(function (club) {
                    _this.clubs.push(club);
                });
            }
        });
    };
    ClubsPage.prototype.getUsername = function (uid) {
        var uname;
        this.dataProvider.getUser(uid).subscribe(function (user) {
            uname = user.name;
        });
        return uname;
    };
    ClubsPage.prototype.isMember = function (club) {
        for (var i = 0; i < club.members.length; i++) {
            if (this.user.userId === club.members[i])
                return true;
        }
        return false;
    };
    ClubsPage.prototype.details = function (club) {
        var note;
        if (this.isMember(club)) {
            note = 'You are already a member of the club';
        }
        else {
            note = 'Slide left and join our club!';
        }
        var name = club.name;
        var description = club.description;
        var alert = this.alertCtrl.create({
            title: 'Details',
            subTitle: '<br><br>Name: ' + name
                + '<br><br>Number of Members: ' + club.members.length
                + '<br><br>Description: ' + club.description
                + '<br><br>Created By: ' + this.getUsername(club.creator)
                + '<br><br>' + note,
            buttons: ['OK']
        });
        alert.present();
    };
    ClubsPage.prototype.addOrUpdateMember = function (member) {
        if (!this.clubMembers) {
            this.clubMembers = [member];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.clubMembers.length; i++) {
                if (this.clubMembers[i].$key == member.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.clubMembers[index] = member;
            }
            else {
                this.clubMembers.push(member);
            }
        }
    };
    ClubsPage.prototype.join = function (clubId) {
        var _this = this;
        var thisclub;
        this.loadingProvider.load();
        // Get club information
        this.dataProvider.getClub(clubId).subscribe(function (club) {
            thisclub = club;
        });
        this.afDB.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid + '/clubs/' + clubId).update({
            messagesRead: 0
        });
        thisclub.members.push(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid);
        thisclub.messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid,
            type: 'system',
            message: this.user.name + ' joined the club',
            icon: 'md-contacts'
        });
        this.dataProvider.getClub(clubId).update({
            members: thisclub.members,
            messages: thisclub.messages
        }).then(function () {
            _this.loadingProvider.dismiss();
        });
        this.alertProvider.showClubJoinedMessage();
    };
    // Back
    ClubsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return ClubsPage;
}());
ClubsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-clubs',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/clubs/clubs.html"*/'<!--\n  Generated template for the ClubsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>Clubs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content" padding>\n  <ion-list>\n    <ion-list-header>Clubs I Joined</ion-list-header>\n    <ng-container *ngFor="let club of clubs">\n      <ion-item tappable *ngIf="isMember(club)" (click)="details(club)">\n        <ion-avatar item-start>\n          <img src={{club.img}}>\n        </ion-avatar>\n        <h2>{{club.name}}</h2>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n  \n  <ion-list>\n    <ion-list-header>All Clubs</ion-list-header>\n    <ion-searchbar [(ngModel)]="search" placeholder="Search for clubs" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item-sliding *ngFor="let club of clubs|clubFilter: search">\n      <ion-item tappable (click)="details(club)">\n        <ion-avatar item-start>\n          <img src={{club.img}}>\n        </ion-avatar>\n        <h2>{{club.name}}<span *ngIf="isMember(club)" style="font-size:15px;color:gray"> [Joined]</span></h2>\n      </ion-item>\n      <ion-item-options side="right">\n        <button (click)="details(club)" ion-button color="primary">\n          <ion-icon name="more"></ion-icon>\n          Details\n        </button>\n        <button *ngIf="!isMember(club)" (click)="join(club.$key)" ion-button color="secondary">\n          <ion-icon name="add"></ion-icon>\n          Join \n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/clubs/clubs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ClubsPage);

//# sourceMappingURL=clubs.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_chat_new_chat__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ConversationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConversationPage = (function () {
    // MessagesPage
    // This is the page where the user can see their current conversations with their friends.
    // The user can also start a new conversation.
    function ConversationPage(navCtrl, navParams, angularfire, loadingProvider, app, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.app = app;
        this.dataProvider = dataProvider;
    }
    ConversationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchFriend = '';
        this.loadingProvider.load();
        if (__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser != null || __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser != undefined) {
            // update token
            this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).update({
                pushToken: localStorage.getItem('pushToken')
            });
        }
        // Get info of conversations of current logged in user.
        this.dataProvider.getConversations().subscribe(function (conversations) {
            if (conversations.length > 0) {
                conversations.forEach(function (conversation) {
                    if (conversation.$exists()) {
                        // Get conversation partner info.
                        _this.dataProvider.getUser(conversation.$key).subscribe(function (user) {
                            conversation.friend = user;
                            // Get conversation info.
                            _this.dataProvider.getConversation(conversation.conversationId).subscribe(function (obj) {
                                // Get last message of conversation.
                                var lastMessage = obj.messages[obj.messages.length - 1];
                                conversation.date = lastMessage.date;
                                conversation.sender = lastMessage.sender;
                                // Set unreadMessagesCount
                                conversation.unreadMessagesCount = obj.messages.length - conversation.messagesRead;
                                // Process last message depending on messageType.
                                if (lastMessage.type == 'text') {
                                    if (lastMessage.sender == __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid) {
                                        conversation.message = 'You: ' + lastMessage.message;
                                    }
                                    else {
                                        conversation.message = lastMessage.message;
                                    }
                                }
                                else {
                                    if (lastMessage.sender == __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid) {
                                        conversation.message = 'You sent a photo message.';
                                    }
                                    else {
                                        conversation.message = 'has sent you a photo message.';
                                    }
                                }
                                // Add or update conversation.
                                _this.addOrUpdateConversation(conversation);
                            });
                        });
                    }
                });
                _this.loadingProvider.dismiss();
            }
            else {
                _this.conversations = [];
                _this.loadingProvider.dismiss();
            }
        });
        // Update conversations' last active date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.conversations) {
                    that.conversations.forEach(function (conversation) {
                        var date = conversation.date;
                        conversation.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Add or update conversation for real-time sync based on our observer, sort by active date.
    ConversationPage.prototype.addOrUpdateConversation = function (conversation) {
        if (!this.conversations) {
            this.conversations = [conversation];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversations.length; i++) {
                if (this.conversations[i].$key == conversation.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversations[index] = conversation;
            }
            else {
                this.conversations.push(conversation);
            }
            // Sort by last active date.
            this.conversations.sort(function (a, b) {
                var date1 = new Date(a.date);
                var date2 = new Date(b.date);
                if (date1 > date2) {
                    return -1;
                }
                else if (date1 < date2) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    };
    // New conversation.
    ConversationPage.prototype.newMessage = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__new_chat_new_chat__["a" /* NewChatPage */]);
    };
    // Open chat with friend.
    ConversationPage.prototype.message = function (userId) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { userId: userId });
    };
    // Return class based if conversation has unreadMessages or not.
    ConversationPage.prototype.hasUnreadMessages = function (conversation) {
        if (conversation.unreadMessagesCount > 0) {
            return 'bold';
        }
        else
            return '';
    };
    return ConversationPage;
}());
ConversationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conversation',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/conversation/conversation.html"*/'<!--\n  Generated template for the ConversationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Conversation</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="newMessage()"><ion-icon name="ios-create" class="create"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No conversations to show -->\n  <div class="empty-list" *ngIf="conversations && conversations.length <= 0">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/huaji.jpg"/>\n      </ion-avatar>\n      <h2>No conversations yet.</h2>\n      <p>Tap \'+\' to start a new conversation!</p>\n    </ion-item>\n  </div>\n  <!-- Show conversations -->\n  <ion-list class="avatar-list" *ngIf="conversations && conversations.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let conversation of conversations | conversationFilter:searchFriend" tappable (click)="message(conversation.$key)">\n      <ion-avatar item-left *ngIf="conversation.friend">\n        <img src="{{conversation.friend.img}}">\n      </ion-avatar>\n      <div [ngClass]=hasUnreadMessages(conversation)>\n        <h2 *ngIf="conversation.friend">{{conversation.friend.name}}</h2>\n        <ion-badge color="danger" *ngIf="conversation.unreadMessagesCount > 0">{{conversation.unreadMessagesCount}}</ion-badge>\n        <p>{{conversation.message}}</p>\n        <span>{{conversation.date | DateFormat}}</span>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/conversation/conversation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]])
], ConversationPage);

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the VerifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VerifyPage = (function () {
    function VerifyPage(navCtrl, navParams, app, logoutProvider, alertProvider, loadingProvider, alertCtrl, angularfire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.logoutProvider = logoutProvider;
        this.alertProvider = alertProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.angularfire = angularfire;
        this.logoutProvider.setApp(app);
    }
    VerifyPage.prototype.ionViewDidLoad = function () {
        // Set our routeGuard variables to false, to not allow rereouting.
        this.emailVerified = false;
        this.isLoggingOut = false;
        // Get user data and send an email verification automatically.
        this.getUserData();
        this.sendEmailVerification();
        // Create the emailVerification checker.
        var that = this;
        that.checkVerified = setInterval(function () {
            __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.reload();
            if (__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.emailVerified) {
                clearInterval(that.checkVerified);
                that.emailVerified = true;
                that.alert = that.alertCtrl.create({
                    title: 'Email Confirmed!',
                    subTitle: 'Congratulations! Your email has been verified!',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__info__["a" /* Info */].tabsPage);
                            }
                        }]
                }).present();
            }
        }, 1000);
    };
    VerifyPage.prototype.ionViewCanLeave = function () {
        // routeGuard to prevent from leaving this view unless email is verified, or user is logging out.
        if (this.emailVerified || this.isLoggingOut) {
            return true;
        }
        else {
            return false;
        }
    };
    // Get user data from the logged in Firebase user to show on html markup.
    VerifyPage.prototype.getUserData = function () {
        var user = __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser;
        var userId, name, provider, img, email;
        var providerData = user.providerData[0];
        userId = user.uid;
        // Retrieve name from Firebase user
        if (user.displayName || providerData.displayName) {
            name = user.displayName;
            name = providerData.displayName;
        }
        else {
            name = "newUser";
        }
        // Retrieve provider from Firebase user
        if (providerData.providerId == 'password') {
            provider = "Firebase";
        }
        else if (providerData.providerId == 'facebook.com') {
            provider = "Facebook";
        }
        else if (providerData.providerId == 'google.com') {
            provider = "Google";
        }
        // Retrieve photoURL from Firebase user
        if (user.photoURL || providerData.photoURL) {
            img = user.photoURL;
            img = providerData.photoURL;
        }
        else {
            img = "assets/images/profile.png";
        }
        // Retrieve email from Firebase user
        email = user.email;
        // Set to user variable for our markup html
        this.user = {
            userId: userId,
            name: name,
            provider: provider,
            img: img,
            email: email,
            pushToken: localStorage.getItem('pushToken')
        };
    };
    // Send an email verification to the user's email.
    VerifyPage.prototype.sendEmailVerification = function () {
        var _this = this;
        this.loadingProvider.load();
        __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.sendEmailVerification()
            .then(function (success) {
            _this.alertProvider.showEmailVerificationSentMessage(__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.email);
            _this.loadingProvider.dismiss();
        });
    };
    // Set the user email
    VerifyPage.prototype.setEmail = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Change Email Address',
            message: "Please enter a new email address.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your Email Address',
                    value: __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.email
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        var email = data["email"];
                        // Check if entered email is different from the current email
                        if (__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.email != email) {
                            // Check if email is valid.
                            if (__WEBPACK_IMPORTED_MODULE_6__validation__["a" /* Validator */].profileEmailValidator.pattern.test(email)) {
                                _this.loadingProvider.load();
                                // Update email on Firebase
                                __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.updateEmail(email)
                                    .then(function (success) {
                                    __WEBPACK_IMPORTED_MODULE_6__validation__["a" /* Validator */].profileEmailValidator.pattern.test(email);
                                    _this.loadingProvider.dismiss();
                                    // Clear the existing interval because when we call ionViewDidLoad, another interval will be created.
                                    clearInterval(_this.checkVerified);
                                    // Call ionViewDidLoad again to update user on the markup and automatically send verification mail.
                                    _this.ionViewDidLoad();
                                    // Update the user data on the database if it exists.
                                    __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('accounts/' + __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).once('value')
                                        .then(function (account) {
                                        if (account.val()) {
                                            _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().currentUser.uid).update({
                                                email: email
                                            });
                                        }
                                    });
                                })
                                    .catch(function (error) {
                                    //Show error
                                    _this.loadingProvider.dismiss();
                                    var code = error["code"];
                                    _this.alertProvider.showErrorMessage(code);
                                    if (code == 'auth/requires-recent-login') {
                                        _this.logoutProvider.doLogout();
                                    }
                                });
                            }
                            else {
                                _this.alertProvider.showErrorMessage('profile/invalid-email');
                            }
                        }
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Clear the interval, and log the user out.
    VerifyPage.prototype.logout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Logout',
                    handler: function (data) {
                        // Clear the verification check interval.
                        clearInterval(_this.checkVerified);
                        // Set our routeGuard to true, to enable changing views.
                        _this.isLoggingOut = true;
                        // Log the user out.
                        _this.logoutProvider.doLogout();
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    return VerifyPage;
}());
VerifyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-verify',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/verify/verify.html"*/'<!--\n  Generated template for the VerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="veri-content">\n  <img src="assets/img/regLogo.png" id="bg">\n  <div *ngIf="user" class="page">\n    <h4 class="title">Verify your account</h4>\n    <p>Please verify <span>{{user.email}}</span> to continue</p>\n    <!-- Verification Menu -->\n    <ion-row style="text-align: center;">\n      <ion-col>\n        <ion-icon name="refresh" tappable (click)="sendEmailVerification()"></ion-icon>\n        <p>Resend</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="mail" tappable (click)="setEmail()"></ion-icon>\n        <p>Update Email</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="log-out" tappable (click)="logout()"></ion-icon>\n        <p>Cancel</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/verify/verify.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__["a" /* LogoutProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
], VerifyPage);

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doodle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Tasks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Doodle = (function () {
    //tasks:FirebaseListObservable<any>;
    function Doodle(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // let preselectedDate = moment(this.navParams.get('selectedDay')).format();
        // this.due = preselectedDate;
        //this.email = firebase.auth().currentUser.email;  
        this.reminder = false;
        this.urgency = 2;
        // this.tasks = afDB.list('/tasks',{
        //   query:{
        //     orderByChild: 'email',
        //     equalTo: this.email
        //   }
        // });
    }
    Doodle.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tasks');
    };
    Doodle.prototype.url = function () {
        this.doodleUrl = "http://doodle.com/create?type=date&locale=en&title=" + this.name + "&name=" + "nimabi" + "&20170902=815||1015||1115&20170904=morning" + "&eMailAddress=" + "ybcleo " + "%40" + "foxmail.com" + "&description=" + this.note;
        var alert = this.alertCtrl.create({
            title: this.doodleUrl,
            subTitle: 'nimabi',
            buttons: ['Dismiss']
        });
        alert.present();
        console.log(this.doodleUrl);
    };
    // save(){
    //   if (this.note==undefined){
    //     let alert = this.alertCtrl.create({
    //       title: 'Note is empty',
    //       subTitle: 'Please fill in the note',
    //       buttons: ['Dismiss']
    //     });
    //     alert.present();
    //   }
    //   else if (this.name==undefined){
    //     let alert = this.alertCtrl.create({
    //       title: 'Name is empty',
    //       subTitle: 'Please fill in the name',
    //       buttons: ['Dismiss']
    //     });
    //     alert.present();
    //   }
    //   else {
    //     this.tasks.push({
    //       due: this.due,
    //       email: this.email,
    //       hide: true,
    //       name: this.name,
    //       note: this.note,
    //       reminder: this.reminder,
    //       urgency: this.urgency,
    //       finished: false,
    //       overdue: false
    //     });
    //   this.navCtrl.parent.select(1);
    //   }
    // }
    Doodle.prototype.cancel = function () {
        //this.navCtrl.push(TabsPage);
        this.navCtrl.parent.select(1);
    };
    return Doodle;
}());
Doodle = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-doodle',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/doodle/doodle.html"*/'<!--\n  Generated template for the Tasks page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Poll</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="content">\n  <ion-list> \n    <ion-item>\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n      <ion-input [(ngModel)]="name" placeholder="Title" type="text"></ion-input>\n    </ion-item>      \n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n      <ion-label>Due</ion-label>\n      <ion-datetime [(ngModel)]="due" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="DDD DD MMMM YYYY HH:mm"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>\n      <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>\n      <ion-input [(ngModel)]="note" placeholder="Add Note" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="reminder" color="secondary" checked="false" style="margin-left:-10px"></ion-toggle>\n      <ion-label>\n        <h2>Reminder</h2>\n      </ion-label>\n      <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n      <ion-label>\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n      </ion-label>\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col text-right>\n      <button ion-button round end color="secondary" (click)="save()">Save</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n    </ion-col>\n    <ion-col text-left>\n      <button ion-button round end color="light" (click)="url()">URL</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/doodle/doodle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], Doodle);

//# sourceMappingURL=doodle.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tdlist_tdlist__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__doodle_doodle__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the Testing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Testing = (function () {
    function Testing(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */];
        this.calendarPage = __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__["a" /* CalendarPage */];
        this.taskManagerPage = __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* Tasks */];
        this.eventSearchPage = __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__["a" /* Searcher */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */];
        this.tdListPage = __WEBPACK_IMPORTED_MODULE_7__tdlist_tdlist__["b" /* TdlistPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */];
        this.doodle = __WEBPACK_IMPORTED_MODULE_10__doodle_doodle__["a" /* Doodle */];
    }
    Testing.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Testing');
        this.alert.hello();
    };
    return Testing;
}());
Testing = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-testing',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/testing/testing.html"*/'<!--\n  Generated template for the Testing page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <div class="text-center">\n        Testing\n      </div>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <button [navPush]="loginPage" ion-button full>Login</button>\n    <button [navPush]="calendarPage" ion-button full>Calendar</button>\n    <button [navPush]="taskManagerPage" ion-button full>Task Manager</button>\n    <button [navPush]="eventSearchPage" ion-button full>Event Searcher</button>\n    <button [navPush]="settingsPage" ion-button full>Settings</button>\n    <button [navPush]="tdListPage" ion-button full>To-do List</button>  \n    <button [navPush]="tabsPage" ion-button full>Tabs</button>\n    <button [navPush]="doodle" ion-button full>Doodle</button>    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/testing/testing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */]])
], Testing);

//# sourceMappingURL=testing.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 273;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_logout__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var errorMessages = {
    // Alert Provider
    // This is the provider class for most of the success and error messages in the app.
    // If you added your own messages don't forget to make a function for them or add them in the showErrorMessage switch block.
    // Firebase Error Messages
    accountExistsWithDifferentCredential: { title: 'Account Exists!', subTitle: 'An account with the same credential already exists.' },
    invalidCredential: { title: 'Invalid Credential!', subTitle: 'An error occured logging in with this credential.' },
    operationNotAllowed: { title: 'Login Failed!', subTitle: 'Logging in with this provider is not allowed! Please contact support.' },
    userDisabled: { title: 'Account Disabled!', subTitle: 'Sorry! But this account has been suspended! Please contact support.' },
    userNotFound: { title: 'Account Not Found!', subTitle: 'Sorry, but an account with this credential could not be found.' },
    wrongPassword: { title: 'Incorrect Password!', subTitle: 'Sorry, but the password you have entered is incorrect.' },
    invalidEmail: { title: 'Invalid Email!', subTitle: 'Sorry, but you have entered an invalid email address.' },
    emailAlreadyInUse: { title: 'Email Not Available!', subTitle: 'Sorry, but this email is already in use.' },
    weakPassword: { title: 'Weak Password!', subTitle: 'Sorry, but you have entered a weak password.' },
    requiresRecentLogin: { title: 'Credential Expired!', subTitle: 'Sorry, but this credential has expired! Please login again.' },
    userMismatch: { title: 'User Mismatch!', subTitle: 'Sorry, but this credential is for another user!' },
    providerAlreadyLinked: { title: 'Already Linked!', subTitle: 'Sorry, but your account is already linked to this credential.' },
    credentialAlreadyInUse: { title: 'Credential Not Available!', subTitle: 'Sorry, but this credential is already used by another user.' },
    // Profile Error Messages
    changeName: { title: 'Change Name Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your name.' },
    invalidCharsName: __WEBPACK_IMPORTED_MODULE_2__validation__["a" /* Validator */].profileNameValidator.patternError,
    nameTooShort: __WEBPACK_IMPORTED_MODULE_2__validation__["a" /* Validator */].profileNameValidator.lengthError,
    changeEmail: { title: 'Change Email Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your email address.' },
    invalidProfileEmail: __WEBPACK_IMPORTED_MODULE_2__validation__["a" /* Validator */].profileEmailValidator.patternError,
    changePhoto: { title: 'Change Photo Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your photo.' },
    passwordTooShort: __WEBPACK_IMPORTED_MODULE_2__validation__["a" /* Validator */].profilePasswordValidator.lengthError,
    invalidCharsPassword: __WEBPACK_IMPORTED_MODULE_2__validation__["a" /* Validator */].profilePasswordValidator.patternError,
    passwordsDoNotMatch: { title: 'Change Password Failed!', subTitle: 'Sorry, but the passwords you entered do not match.' },
    updateProfile: { title: 'Update Profile Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your profile.' },
    usernameExists: { title: 'Username Already Exists!', subTitle: 'Sorry, but this username is already taken by another user.' },
    eventUpdate: { title: 'Update Event Failed!', subTitle: 'Sorry, but we\'ve encountered an error updating this event.' },
    // Image Error Messages
    imageUpload: { title: 'Image Upload Failed!', subTitle: 'Sorry but we\'ve encountered an error uploading selected image.' },
    // Club Error Messages
    clubUpdate: { title: 'Update Club Failed!', subTitle: 'Sorry, but we\'ve encountered an error updating this club.' },
    clubLeave: { title: 'Leave Club Failed!', subTitle: 'Sorry, but you\'ve encountered an error leaving this club.' },
    clubDelete: { title: 'Delete Club Failed!', subTitle: 'Sorry, but we\'ve encountered an error deleting this club.' }
};
var successMessages = {
    passwordResetSent: { title: 'Password Reset Sent!', subTitle: 'A password reset email has been sent to: ' },
    profileUpdated: { title: 'Profile Updated!', subTitle: 'Your profile has been successfully updated!' },
    emailVerified: { title: 'Email Confirmed!', subTitle: 'Congratulations! Your email has been confirmed!' },
    emailVerificationSent: { title: 'Email Confirmation Sent!', subTitle: 'An email confirmation has been sent to: ' },
    accountDeleted: { title: 'Account Deleted!', subTitle: 'Your account has been successfully deleted.' },
    passwordChanged: { title: 'Password Changed!', subTitle: 'Your password has been successfully changed.' },
    friendRequestSent: { title: 'Friend Request Sent!', subTitle: 'Your friend request has been successfully sent!' },
    friendRequestRemoved: { title: 'Friend Request Deleted!', subTitle: 'Your friend request has been successfully deleted.' },
    eventRequestSent: { title: 'Event Request Sent!', subTitle: 'Event request has been successfully sent!' },
    eventRequestRemoved: { title: 'Event Request Deleted!', subTitle: 'Your event request has been successfully deleted.' },
    eventUpdated: { title: 'Event Updated!', subTitle: 'This event has been successfully updated!' },
    clubJoined: { title: 'Club Joined!', subTitle: 'You have successfully joined the club!' },
    clubUpdated: { title: 'Club Updated!', subTitle: 'This club has been successfully updated!' },
    clubLeft: { title: 'Leave Club', subTitle: 'You have successfully left this club.' }
};
var AlertProvider = (function () {
    function AlertProvider(alertCtrl, logoutProvider) {
        this.alertCtrl = alertCtrl;
        this.logoutProvider = logoutProvider;
        console.log("Initializing Alert Provider");
    }
    AlertProvider.prototype.hello = function () {
        console.log("hehe");
    };
    // Show profile updated
    AlertProvider.prototype.showProfileUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.profileUpdated["title"],
            subTitle: successMessages.profileUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    AlertProvider.prototype.showClubJoinedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.clubJoined['title'],
            subTitle: successMessages.clubJoined['subTitle'],
            buttons: ['OK']
        }).present();
    };
    // Show password reset sent
    AlertProvider.prototype.showPasswordResetMessage = function (email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordResetSent["title"],
            subTitle: successMessages.passwordResetSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    };
    // Show email verified and redirect to homePage
    AlertProvider.prototype.showEmailVerifiedMessageAndRedirect = function (navCtrl) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerified["title"],
            subTitle: successMessages.emailVerified["subTitle"],
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        //navCtrl.setRoot(Info.tabsPage);
                    }
                }]
        }).present();
    };
    // Show email verification sent
    AlertProvider.prototype.showEmailVerificationSentMessage = function (email) {
        this.alert = this.alertCtrl.create({
            title: successMessages.emailVerificationSent["title"],
            subTitle: successMessages.emailVerificationSent["subTitle"] + email,
            buttons: ['OK']
        }).present();
    };
    // Show account deleted
    AlertProvider.prototype.showAccountDeletedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.accountDeleted["title"],
            subTitle: successMessages.accountDeleted["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show password changed
    AlertProvider.prototype.showPasswordChangedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.passwordChanged["title"],
            subTitle: successMessages.passwordChanged["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show friend request sent
    AlertProvider.prototype.showFriendRequestSent = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestSent["title"],
            subTitle: successMessages.friendRequestSent["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show friend request removed
    AlertProvider.prototype.showFriendRequestRemoved = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.friendRequestRemoved["title"],
            subTitle: successMessages.friendRequestRemoved["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show event request sent
    AlertProvider.prototype.showEventRequestSent = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.eventRequestSent["title"],
            subTitle: successMessages.eventRequestSent["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show event request removed
    AlertProvider.prototype.showEventRequestRemoved = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.eventRequestRemoved["title"],
            subTitle: successMessages.eventRequestRemoved["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show event updated.
    AlertProvider.prototype.showEventUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.eventUpdated["title"],
            subTitle: successMessages.eventUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show club updated.
    AlertProvider.prototype.showClubUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.clubUpdated["title"],
            subTitle: successMessages.clubUpdated["subTitle"],
            buttons: ['OK']
        }).present();
    };
    // Show error messages depending on the code
    // If you added custom error codes on top, make sure to add a case block for it.
    AlertProvider.prototype.showErrorMessage = function (code) {
        switch (code) {
            // Firebase Error Messages
            case 'auth/account-exists-with-different-credential':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.accountExistsWithDifferentCredential["title"],
                    subTitle: errorMessages.accountExistsWithDifferentCredential["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/invalid-credential':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCredential["title"],
                    subTitle: errorMessages.invalidCredential["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/operation-not-allowed':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.operationNotAllowed["title"],
                    subTitle: errorMessages.operationNotAllowed["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/user-disabled':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userDisabled["title"],
                    subTitle: errorMessages.userDisabled["subTitle"],
                    buttons: ['OK']
                });
                this.alert.present();
                break;
            case 'auth/user-not-found':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userNotFound["title"],
                    subTitle: errorMessages.userNotFound["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/wrong-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.wrongPassword["title"],
                    subTitle: errorMessages.wrongPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/invalid-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidEmail["title"],
                    subTitle: errorMessages.invalidEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/email-already-in-use':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.emailAlreadyInUse["title"],
                    subTitle: errorMessages.emailAlreadyInUse["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/weak-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.weakPassword["title"],
                    subTitle: errorMessages.weakPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/requires-recent-login':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.requiresRecentLogin["title"],
                    subTitle: errorMessages.requiresRecentLogin["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/user-mismatch':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.userMismatch["title"],
                    subTitle: errorMessages.userMismatch["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/provider-already-linked':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.providerAlreadyLinked["title"],
                    subTitle: errorMessages.providerAlreadyLinked["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'auth/credential-already-in-use':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.credentialAlreadyInUse["title"],
                    subTitle: errorMessages.credentialAlreadyInUse["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            // Profile Error Messages
            case 'profile/error-change-name':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changeName["title"],
                    subTitle: errorMessages.changeName["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-chars-name':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCharsName["title"],
                    subTitle: errorMessages.invalidCharsName["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/name-too-short':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.nameTooShort["title"],
                    subTitle: errorMessages.nameTooShort["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-change-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changeEmail["title"],
                    subTitle: errorMessages.changeEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-email':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidProfileEmail["title"],
                    subTitle: errorMessages.invalidProfileEmail["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-change-photo':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.changePhoto["title"],
                    subTitle: errorMessages.changePhoto["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/password-too-short':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.passwordTooShort["title"],
                    subTitle: errorMessages.passwordTooShort["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/invalid-chars-password':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.invalidCharsPassword["title"],
                    subTitle: errorMessages.invalidCharsPassword["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/passwords-do-not-match':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.passwordsDoNotMatch["title"],
                    subTitle: errorMessages.passwordsDoNotMatch["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-update-profile':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.updateProfile["title"],
                    subTitle: errorMessages.updateProfile["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'profile/error-same-username':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.usernameExists["title"],
                    subTitle: errorMessages.usernameExists["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            //Image Error Messages
            case 'image/error-image-upload':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.imageUpload["title"],
                    subTitle: errorMessages.imageUpload["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'event/error-update-event':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.eventUpdate["title"],
                    subTitle: errorMessages.eventUpdate["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            // Club Error MEssages
            case 'club/error-update-club':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.clubUpdate["title"],
                    subTitle: errorMessages.clubUpdate["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'club/error-leave-club':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.clubLeave["title"],
                    subTitle: errorMessages.clubLeave["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'club/error-delete-club':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.clubDelete["title"],
                    subTitle: errorMessages.clubDelete["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
        }
    };
    return AlertProvider;
}());
AlertProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__auth_service_logout__["a" /* LogoutProvider */]])
], AlertProvider);

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-modal/admin-modal.module": [
		1182,
		19
	],
	"../pages/calendar/calendar.module": [
		1185,
		18
	],
	"../pages/chat/chat.module": [
		1181,
		17
	],
	"../pages/clubs/clubs.module": [
		1191,
		16
	],
	"../pages/contacts/contacts.module": [
		1189,
		15
	],
	"../pages/conversation/conversation.module": [
		1195,
		14
	],
	"../pages/doodle/doodle.module": [
		1198,
		13
	],
	"../pages/event-info/event-info.module": [
		1183,
		12
	],
	"../pages/event-modal/event-modal.module": [
		1200,
		0
	],
	"../pages/information/information.module": [
		1188,
		11
	],
	"../pages/login/login.module": [
		1187,
		10
	],
	"../pages/register/register.module": [
		1186,
		9
	],
	"../pages/request-modal/request-modal.module": [
		1184,
		8
	],
	"../pages/searcher/searcher.module": [
		1192,
		7
	],
	"../pages/settings/settings.module": [
		1190,
		6
	],
	"../pages/tabs/tabs.module": [
		1196,
		5
	],
	"../pages/tasks/tasks.module": [
		1193,
		4
	],
	"../pages/tdlist/tdlist.module": [
		1194,
		3
	],
	"../pages/testing/testing.module": [
		1199,
		2
	],
	"../pages/verify/verify.module": [
		1197,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 318;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddMembersPage = (function () {
    // AddMemberPage
    // This is the page where the user can add their friends to an existing club.
    // The user can only add their friends to the club.
    function AddMembersPage(navCtrl, navParams, dataProvider, loadingProvider, angularfire, alertCtrl, alertProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.angularfire = angularfire;
        this.alertCtrl = alertCtrl;
        this.alertProvider = alertProvider;
    }
    AddMembersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.clubId = this.navParams.get('clubId');
        this.searchFriend = '';
        this.toAdd = [];
        this.loadingProvider.load();
        // Get user information for system message sent to the club when a member was added.
        this.dataProvider.getCurrentUser().subscribe(function (user) {
            _this.user = user;
        });
        // Get club information
        this.dataProvider.getClub(this.clubId).subscribe(function (club) {
            _this.club = club;
            _this.clubMembers = null;
            // Get club members
            if (club.members) {
                club.members.forEach(function (memberId) {
                    _this.dataProvider.getUser(memberId).subscribe(function (member) {
                        _this.addOrUpdateMember(member);
                    });
                });
                // Get user's friends to add
                _this.dataProvider.getCurrentUser().subscribe(function (account) {
                    if (account.friends) {
                        for (var i = 0; i < account.friends.length; i++) {
                            _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                                // Only friends that are not yet a member of this club can be added.
                                if (!_this.isMember(friend))
                                    _this.addOrUpdateFriend(friend);
                            });
                        }
                        if (!_this.friends) {
                            _this.friends = [];
                        }
                    }
                    else {
                        _this.friends = [];
                    }
                });
            }
            _this.loadingProvider.dismiss();
        });
    };
    // Check if friend is a member of the club or not.
    AddMembersPage.prototype.isMember = function (friend) {
        if (this.clubMembers) {
            for (var i = 0; i < this.clubMembers.length; i++) {
                if (this.clubMembers[i].$key == friend.$key) {
                    return true;
                }
            }
        }
        return false;
    };
    // Check if friend is already on the list of members to be added.
    AddMembersPage.prototype.isAdded = function (friend) {
        if (this.toAdd) {
            for (var i = 0; i < this.toAdd.length; i++) {
                if (this.toAdd[i].$key == friend.$key) {
                    return true;
                }
            }
        }
        return false;
    };
    // Toggle for adding/removing friend on the list of members to be added.
    AddMembersPage.prototype.addOrRemove = function (friend) {
        if (this.isAdded(friend)) {
            this.remove(friend);
        }
        else {
            this.add(friend);
        }
    };
    // Add or update friend information for real-time sync.
    AddMembersPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Add or update member information for real-time sync.
    AddMembersPage.prototype.addOrUpdateMember = function (member) {
        if (!this.clubMembers) {
            this.clubMembers = [member];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.clubMembers.length; i++) {
                if (this.clubMembers[i].$key == member.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.clubMembers[index] = member;
            }
            else {
                this.clubMembers.push(member);
            }
        }
    };
    // Add friend to the list of to be added.
    AddMembersPage.prototype.add = function (friend) {
        this.toAdd.push(friend);
    };
    // Remove friend from the list of to be added.
    AddMembersPage.prototype.remove = function (friend) {
        this.toAdd.splice(this.toAdd.indexOf(friend), 1);
    };
    // Back
    AddMembersPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Get names of the members to be added to the club.
    AddMembersPage.prototype.getNames = function () {
        var names = '';
        this.toAdd.forEach(function (friend) {
            names += friend.name + ', ';
        });
        return names.substring(0, names.length - 2);
    };
    // Confirm adding of new members, afterwards add the members.
    AddMembersPage.prototype.done = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Add Members',
            message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the club?',
            buttons: [
                {
                    text: 'Add',
                    handler: function (data) {
                        // Proceed
                        _this.loadingProvider.load();
                        _this.toAdd.forEach(function (friend) {
                            // Add clubInfo to each friend added to the club.
                            _this.angularfire.object('/accounts/' + friend.$key + '/clubs/' + _this.clubId).update({
                                messagesRead: 0
                            });
                            // Add friend as members of the club.
                            _this.club.members.push(friend.$key);
                            // Add system message that the members are added to the club.
                            _this.club.messages.push({
                                date: new Date().toString(),
                                sender: _this.user.$key,
                                type: 'system',
                                message: _this.user.name + ' added ' + _this.getNames() + ' to the club',
                                icon: 'md-contacts'
                            });
                        });
                        // Update club data on the database.
                        _this.dataProvider.getClub(_this.clubId).update({
                            members: _this.club.members,
                            messages: _this.club.messages
                        }).then(function () {
                            // Back.
                            _this.loadingProvider.dismiss();
                            _this.navCtrl.pop();
                        });
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        }).present();
    };
    return AddMembersPage;
}());
AddMembersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-members',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/add-members/add-members.html"*/'<!--\n  Generated template for the AddMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>Add Members</ion-title>\n    <!-- Only enable button when user is adding atleast one member to the club -->\n    <ion-buttons end>\n      <button class="back" ion-button tappable (click)="done()" [disabled]="toAdd && toAdd.length < 1">Done</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!-- All friends already in the club. -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <h1><ion-icon name="md-contacts"></ion-icon></h1>\n    <p style="color:gray">Uh-oh! Sorry but all your friends are already in this club.</p>\n    <button color="mainColor" ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Add/Cancel Add friends to the club. -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="addOrRemove(friend)">\n      <ion-fab middle right>\n        <button color="mainColor" ion-fab mini tappable (click)="add(friend); $event.stopPropagation();" *ngIf="!isAdded(friend)"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n        <button color="mainColor" ion-fab mini tappable (click)="remove(friend); $event.stopPropagation();" *ngIf="isAdded(friend)"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>@{{friend.username}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/add-members/add-members.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]])
], AddMembersPage);

//# sourceMappingURL=add-members.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RequestsPage = (function () {
    // RequestsPage
    // This is the page where the user can see their friend requests sent and received.
    function RequestsPage(navCtrl, navParams, dataProvider, alertCtrl, angularfire, loadingProvider, alertProvider, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.firebaseProvider = firebaseProvider;
    }
    RequestsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingProvider.load();
        // Get user info
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            _this.account = account;
            // Get friendRequests and requestsSent of the user.
            _this.dataProvider.getRequests(_this.account.userId).subscribe(function (requests) {
                // friendRequests.
                if (requests.friendRequests) {
                    _this.friendRequests = [];
                    requests.friendRequests.forEach(function (userId) {
                        _this.dataProvider.getUser(userId).subscribe(function (sender) {
                            _this.addOrUpdateFriendRequest(sender);
                        });
                    });
                }
                else {
                    _this.friendRequests = [];
                }
                // requestsSent.
                if (requests.requestsSent) {
                    _this.requestsSent = [];
                    requests.requestsSent.forEach(function (userId) {
                        _this.dataProvider.getUser(userId).subscribe(function (receiver) {
                            _this.addOrUpdateRequestSent(receiver);
                        });
                    });
                }
                else {
                    _this.requestsSent = [];
                }
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Add or update friend request only if not yet friends.
    RequestsPage.prototype.addOrUpdateFriendRequest = function (sender) {
        if (!this.friendRequests) {
            this.friendRequests = [sender];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friendRequests.length; i++) {
                if (this.friendRequests[i].$key == sender.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                if (!this.isFriends(sender.$key))
                    this.friendRequests[index] = sender;
            }
            else {
                if (!this.isFriends(sender.$key))
                    this.friendRequests.push(sender);
            }
        }
    };
    // Add or update requests sent only if the user is not yet a friend.
    RequestsPage.prototype.addOrUpdateRequestSent = function (receiver) {
        if (!this.requestsSent) {
            this.requestsSent = [receiver];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.requestsSent.length; i++) {
                if (this.requestsSent[i].$key == receiver.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                if (!this.isFriends(receiver.$key))
                    this.requestsSent[index] = receiver;
            }
            else {
                if (!this.isFriends(receiver.$key))
                    this.requestsSent.push(receiver);
            }
        }
    };
    // Back
    RequestsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Accept Friend Request.
    RequestsPage.prototype.acceptFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Reject Request',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Accept Request',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Cancel Friend Request sent.
    RequestsPage.prototype.cancelFriendRequest = function (user) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Checks if user is already friends with this user.
    RequestsPage.prototype.isFriends = function (userId) {
        if (this.account.friends) {
            if (this.account.friends.indexOf(userId) == -1) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    // View user.
    RequestsPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    return RequestsPage;
}());
RequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-requests',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/requests/requests.html"*/'<!--\n  Generated template for the RequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>Friend Requests</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No friend requests sent or received. -->\n  <div class="empty-list" *ngIf="(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)">\n    <h1><ion-icon name="md-filing"></ion-icon></h1>\n    <p style="color:gray">No New Requests</p>\n    <button color="mainColor" ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Show friend requests received. -->\n  <ion-list class="avatar-list" *ngIf="friendRequests && friendRequests.length > 0">\n    <ion-item *ngFor="let friendRequest of friendRequests" no-lines tappable (click)="viewUser(friendRequest.$key)">\n      <ion-fab middle right>\n        <button color="mainColor" ion-fab mini tappable (click)="acceptFriendRequest(friendRequest); $event.stopPropagation();">\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{friendRequest.img}}">\n      </ion-avatar>\n      <h2>{{friendRequest.name}}</h2>\n      <p>has sent you a friend request.</p>\n    </ion-item>\n  </ion-list>\n  <!-- Show friend requests sent. -->\n  <ion-list class="avatar-list" *ngIf="requestsSent && requestsSent.length > 0">\n    <ion-item *ngFor="let requestSent of requestsSent" no-lines tappable (click)="viewUser(requestSent.$key)">\n      <ion-fab middle right>\n        <button color="mainColor" ion-fab mini tappable (click)="cancelFriendRequest(requestSent); $event.stopPropagation();">\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{requestSent.img}}">\n      </ion-avatar>\n      <h2>{{requestSent.name}}</h2>\n      <p>friend request sent.</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/requests/requests.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], RequestsPage);

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__club_club__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var NewClubPage = (function () {
    // NewclubPage
    // This is the page where the user can start a new club chat with their friends.
    function NewClubPage(navCtrl, navParams, imageProvider, dataProvider, formBuilder, alertProvider, alertCtrl, angularfire, app, loadingProvider, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageProvider = imageProvider;
        this.dataProvider = dataProvider;
        this.formBuilder = formBuilder;
        this.alertProvider = alertProvider;
        this.alertCtrl = alertCtrl;
        this.angularfire = angularfire;
        this.app = app;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        // Create our clubForm based on Validator.ts
        this.clubForm = formBuilder.group({
            name: __WEBPACK_IMPORTED_MODULE_7__validation__["a" /* Validator */].clubNameValidator,
            description: __WEBPACK_IMPORTED_MODULE_7__validation__["a" /* Validator */].clubDescriptionValidator
        });
    }
    NewClubPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.club = {
            img: 'assets/img/club.png'
        };
        this.searchFriend = '';
        // Get user's friends to add to the club.
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            if (!_this.clubMembers) {
                _this.clubMembers = [account];
            }
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                        _this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
        });
    };
    // Add or update friend for real-time sync.
    NewClubPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Back
    NewClubPage.prototype.back = function () {
        if (this.club)
            this.imageProvider.deleteImageFile(this.club.img);
        this.navCtrl.pop();
    };
    // Proceed with club creation.
    NewClubPage.prototype.done = function () {
        var _this = this;
        this.loadingProvider.load();
        var messages = [];
        // Add system message that club is created.
        messages.push({
            date: new Date().toString(),
            sender: __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid,
            type: 'system',
            message: 'Club created',
            icon: 'md-chatbubbles'
        });
        // Add members of the club.
        var members = [];
        for (var i = 0; i < this.clubMembers.length; i++) {
            members.push(this.clubMembers[i].$key);
        }
        var administrators = [];
        administrators.push(__WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid);
        // Add club info and date.
        this.club.creator = __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid;
        this.club.administrators = administrators;
        this.club.dateCreated = new Date().toString();
        this.club.messages = messages;
        this.club.members = members;
        this.club.name = this.clubForm.value["name"];
        this.club.description = this.clubForm.value["description"];
        // Add club to database.
        this.angularfire.list('clubs').push(this.club).then(function (success) {
            var clubId = success.key;
            var createdClubs = [];
            var adminedClubs = [];
            createdClubs.push(clubId);
            adminedClubs.push(clubId);
            // Add club reference to users.
            _this.angularfire.object('/accounts/' + _this.clubMembers[0].$key + '/clubs/' + clubId).update({
                messagesRead: 1
            });
            _this.angularfire.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid + '/createdClubs/').push(createdClubs);
            _this.angularfire.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid + '/adminedClubs/').push(adminedClubs);
            for (var i = 1; i < _this.clubMembers.length; i++) {
                _this.angularfire.object('/accounts/' + _this.clubMembers[i].$key + '/clubs/' + clubId).update({
                    messagesRead: 0
                });
            }
            // Open the club chat of the just created club.
            _this.navCtrl.popToRoot().then(function () {
                _this.loadingProvider.dismiss();
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__club_club__["a" /* ClubPage */], { clubId: clubId });
            });
        });
    };
    // Add friend to members of club.
    NewClubPage.prototype.addToClub = function (friend) {
        this.clubMembers.push(friend);
    };
    // Remove friend from members of group.
    NewClubPage.prototype.removeFromClub = function (friend) {
        var index = -1;
        for (var i = 1; i < this.clubMembers.length; i++) {
            if (this.clubMembers[i].$key == friend.$key) {
                index = i;
            }
        }
        if (index > -1) {
            this.clubMembers.splice(index, 1);
        }
    };
    // Check if friend is already added to the club or not.
    NewClubPage.prototype.inClub = function (friend) {
        for (var i = 0; i < this.clubMembers.length; i++) {
            if (this.clubMembers[i].$key == friend.$key) {
                return true;
            }
        }
        return false;
    };
    // Toggle to add/remove friend from the club.
    NewClubPage.prototype.addOrRemoveFromClub = function (friend) {
        if (this.inClub(friend)) {
            this.removeFromClub(friend);
        }
        else {
            this.addToClub(friend);
        }
    };
    // Set Club photo.
    NewClubPage.prototype.setClubPhoto = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Set Club Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        _this.imageProvider.setClubPhoto(_this.club, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        _this.imageProvider.setClubPhoto(_this.club, _this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Search people to add as friend.
    NewClubPage.prototype.searchPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__search_search__["a" /* SearchPage */]);
    };
    return NewClubPage;
}());
NewClubPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-club',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-club/new-club.html"*/'<!--\n  Generated template for the NewClubPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>New Club</ion-title>\n    <!-- New Group can only be added when a group form is filled up, image is uploaded, and there\'s more than one member. -->\n    <ion-buttons end>\n      <button class="back" ion-button tappable (click)="done()" [disabled]="!clubForm.valid || club.img == \'\' || clubMembers.length <= 1">Done</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <div *ngIf="club">\n    <ion-list>\n      <ion-list-header>\n        Club Info\n      </ion-list-header>\n      <form [formGroup]="clubForm">\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="{{club.img}}" *ngIf="club.img != \'\'" tappable (click)="setClubPhoto()" />\n            <img src="assets/img/club.png" *ngIf="club.img == \'\'" tappable (click)="setClubPhoto()" />\n          </ion-avatar>\n          <ion-input type="text" formControlName="name" placeholder="Name of Club"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label stacked>Description *</ion-label>\n          <ion-textarea rows="4" formControlName="description" placeholder="Describe this Club"></ion-textarea>\n        </ion-item>\n        <div *ngIf="clubMembers">\n          <ion-list-header>\n            Club Members ({{clubMembers.length}})\n          </ion-list-header>\n          \n          <ion-item  *ngFor="let member of clubMembers">\n            <ion-avatar item-left>\n              <img src="{{member.img}}"/>\n            </ion-avatar>\n            <h2>{{member.name}}</h2>\n            <ion-icon name="close-circle" item-right (click)="removeFromClub(member)"></ion-icon>\n          </ion-item>\n        </div>\n      </form>\n    </ion-list>\n\n    <ion-list-header>\n      Add New Members\n    </ion-list-header>\n    <div class="form">\n      <!-- No friends to create a group. -->\n      <div class="empty-list" *ngIf="friends && friends.length == 0">\n        <p style="color:gray">You have no friends right now to create a new club.</p>\n        <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search People</button>\n      </div>\n      <!-- Show friends to add/remove to group. -->\n      <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n        <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n        <ng-container *ngFor="let friend of friends | friendFilter:searchFriend">\n          <ion-item *ngIf="!inClub(friend)" no-lines tappable (click)="addOrRemoveFromClub(friend)">\n            <ion-fab middle right>\n              <button color="mainColor" ion-fab mini tappable (click)="addToClub(friend); $event.stopPropagation();" *ngIf="!inClub(friend)"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n              <button color="mainColor" ion-fab mini tappable (click)="removeFromClub(friend); $event.stopPropagation();" *ngIf="inClub(friend)"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n            </ion-fab>\n            <ion-avatar item-left>\n              <img src="{{friend.img}}">\n            </ion-avatar>\n            <h2>{{friend.name}}</h2>\n            <p>{{friend.email}}</p>\n          </ion-item>\n        </ng-container>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-club/new-club.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]])
], NewClubPage);

//# sourceMappingURL=new-club.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ImageProvider = (function () {
    // All files to be uploaded on Firebase must have DATA_URL as the destination type.
    // This will return the imageURI which can then be processed and uploaded to Firebase.
    // For the list of cameraOptions, please refer to: https://github.com/apache/cordova-plugin-camera#module_camera.CameraOptions
    function ImageProvider(angularfire, alertProvider, loadingProvider, camera, mediaCapture, file) {
        this.angularfire = angularfire;
        this.alertProvider = alertProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.file = file;
        // Image Provider
        // This is the provider class for most of the image processing including uploading images to Firebase.
        // Take note that the default function here uploads the file in .jpg. If you plan to use other encoding types, make sure to
        // set the encodingType before uploading the image on Firebase.
        // Example for .png:
        // data:image/jpeg;base64 -> data:image/png;base64
        // generateFilename to return .png
        this.profilePhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.photoMessageOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.clubPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        console.log("Initializing Image Provider");
    }
    // Function to convert dataURI to Blob needed by Firebase
    ImageProvider.prototype.imgURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    };
    // Generate a random filename of length for the image to be uploaded
    ImageProvider.prototype.generateFilename = function () {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    };
    // Set ProfilePhoto given the user and the cameraSourceType.
    // This function processes the imageURI returned and uploads the file on Firebase,
    // Finally the user data on the database is updated.
    ImageProvider.prototype.setProfilePhoto = function (user, sourceType) {
        var _this = this;
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.load();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage.
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + user.userId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                _this.deleteImageFile(user.img);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                var profile = {
                    displayName: user.name,
                    photoURL: url
                };
                // Update Firebase User.
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.updateProfile(profile)
                    .then(function (success) {
                    // Update User Data on Database.
                    _this.angularfire.object('/accounts/' + user.userId).update({
                        img: url
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                        _this.alertProvider.showProfileUpdatedMessage();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                        _this.alertProvider.showErrorMessage('profile/error-change-photo');
                    });
                })
                    .catch(function (error) {
                    _this.loadingProvider.dismiss();
                    _this.alertProvider.showErrorMessage('profile/error-change-photo');
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
                _this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch(function (error) {
            _this.loadingProvider.dismiss();
        });
    };
    // Upload and set the club object's image.
    ImageProvider.prototype.setClubPhoto = function (club, sourceType) {
        var _this = this;
        this.clubPhotoOptions.sourceType = sourceType;
        this.loadingProvider.load();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.clubPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                _this.deleteImageFile(club.img);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                club.img = url;
                _this.loadingProvider.dismiss();
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
                _this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch(function (error) {
            _this.loadingProvider.dismiss();
        });
    };
    // Set club photo and return the club object as promise.
    ImageProvider.prototype.setClubPhotoPromise = function (club, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.clubPhotoOptions.sourceType = sourceType;
            _this.loadingProvider.load();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.clubPhotoOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    _this.deleteImageFile(club.img);
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    club.img = url;
                    _this.loadingProvider.dismiss();
                    resolve(club);
                }).catch(function (error) {
                    _this.loadingProvider.dismiss();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    //Delete the image given the url.
    ImageProvider.prototype.deleteImageFile = function (path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    //Delete the user.img given the user.
    ImageProvider.prototype.deleteUserImageFile = function (user) {
        var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    // Delete club image file on club storage reference.
    ImageProvider.prototype.deleteClubImageFile = function (clubId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + clubId + '/' + fileName).delete().then(function () { }).catch(function (error) { });
    };
    // Upload photo message and return the url as promise.
    ImageProvider.prototype.uploadPhotoMessage = function (conversationId, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.load();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + conversationId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    _this.loadingProvider.dismiss();
                    resolve(url);
                }).catch(function (error) {
                    _this.loadingProvider.dismiss();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Upload club photo message and return a promise as url.
    ImageProvider.prototype.uploadClubPhotoMessage = function (clubId, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.photoMessageOptions.sourceType = sourceType;
            _this.loadingProvider.load();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + clubId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    _this.loadingProvider.dismiss();
                    resolve(url);
                }).catch(function (error) {
                    _this.loadingProvider.dismiss();
                    _this.alertProvider.showErrorMessage('image/error-image-upload');
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    return ImageProvider;
}());
ImageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */]])
], ImageProvider);

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewChatPage = (function () {
    // NewMessagePage
    // This is the page where the user are asked to select a friend whom they want to start a conversation with.
    function NewChatPage(navCtrl, navParams, app, dataProvider, loadingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
    }
    NewChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.searchFriend = '';
        this.loadingProvider.load();
        // Get user's friends.
        this.dataProvider.getCurrentUser().subscribe(function (account) {
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    _this.dataProvider.getUser(account.friends[i]).subscribe(function (friend) {
                        _this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
            _this.loadingProvider.dismiss();
        });
    };
    // Back
    NewChatPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Add or update friend for real-time sync.
    NewChatPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    // Search people.
    NewChatPage.prototype.searchPeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    // Open chat with this user.
    NewChatPage.prototype.message = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], { userId: userId });
    };
    return NewChatPage;
}());
NewChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-chat',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-chat/new-chat.html"*/'<!--\n  Generated template for the NewChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>New Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <p></p>\n  <!-- No friends yet to start a conversation with -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search for your friends here</button>\n  </div>\n  <!-- Show friends to start a conversation with -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" tappable (click)="message(friend.$key)">\n      <ion-avatar item-left>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>@{{friend.email}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-chat/new-chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
], NewChatPage);

//# sourceMappingURL=new-chat.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserInfoPage = (function () {
    // UserInfoPage
    // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
    function UserInfoPage(navCtrl, navParams, modalCtrl, dataProvider, loadingProvider, alertCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
    }
    UserInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = this.navParams.get('userId');
        this.loadingProvider.load();
        // Get user info.
        this.dataProvider.getUser(this.userId).subscribe(function (user) {
            _this.user = user;
            _this.loadingProvider.dismiss();
        });
        // Get friends of current logged in user.
        this.dataProvider.getUser(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe(function (user) {
            _this.friends = user.friends;
        });
        // Get requests of current logged in user.
        this.dataProvider.getRequests(__WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser.uid).subscribe(function (requests) {
            _this.friendRequests = requests.friendRequests;
            _this.requestsSent = requests.requestsSent;
        });
    };
    // Back
    UserInfoPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Enlarge user's profile image.
    UserInfoPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    // Accept friend request.
    UserInfoPage.prototype.acceptFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Accept',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(_this.userId);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Deny friend request.
    UserInfoPage.prototype.rejectFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Reject Friend Request',
            message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Reject',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(_this.userId);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Cancel friend request sent.
    UserInfoPage.prototype.cancelFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(_this.userId);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Send friend request.
    UserInfoPage.prototype.sendFriendRequest = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(_this.userId);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    // Open chat with this user.
    UserInfoPage.prototype.sendMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { userId: this.userId });
    };
    // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.
    UserInfoPage.prototype.canAdd = function () {
        if (this.friendRequests) {
            if (this.friendRequests.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.requestsSent) {
            if (this.requestsSent.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.friends) {
            if (this.friends.indexOf(this.userId) > -1) {
                return false;
            }
        }
        return true;
    };
    return UserInfoPage;
}());
UserInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-info',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/user-info/user-info.html"*/'<!--\n  Generated template for the UserInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title *ngIf="user">{{user.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!-- User Info -->\n  <div *ngIf="user">\n    <div class="profile">\n      <img src="{{user.img}}" tappable (click)="enlargeImage(user.img)" />\n    </div>\n    <h4 class="center">\n      <span class="userName">{{user.name}} </span>\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n    </h4>\n    <p class="userEmail">{{user.email}}</p>\n    <hr class="divider">\n    <p class="description">{{user.description}}</p>\n    <div class="divider"></div>\n    <hr class="divider">\n    <div class="center">\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n      <div *ngIf="friendRequests && friendRequests.indexOf(user.$key) > -1">\n        <p class="info">Sent you a friend request.</p>\n        <button ion-button icon-only class="danger" tappable (click)="rejectFriendRequest()"><ion-icon name="md-close"></ion-icon></button>\n        <button ion-button icon-only class="success" tappable (click)="acceptFriendRequest()"><ion-icon name="md-checkmark"></ion-icon></button>\n      </div>\n      <div *ngIf="requestsSent && requestsSent.indexOf(user.$key) > -1">\n        <p class="info">Friend request sent.</p>\n        <button ion-button class="dark" tappable (click)="cancelFriendRequest()">Cancel Friend Request</button>\n      </div>\n      <div *ngIf="canAdd()">\n        <p class="info">You are not yet friends.</p>\n        <button ion-button class="primary" tappable (click)="sendFriendRequest()">Send Friend Request</button>\n      </div>\n      <div *ngIf="friends && friends.indexOf(user.$key) > -1">\n        <p class="info">You are already friends.</p>\n        <button ion-button class="primary" tappable (click)="sendMessage()">Send Messages</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/user-info/user-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], UserInfoPage);

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(743);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_calendar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_cloud_angular__ = __webpack_require__(1089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_calendar__ = __webpack_require__(1159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_testing_testing__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tasks_tasks__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_searcher_searcher__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tdlist_tdlist__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_verify_verify__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_conversation_conversation__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_new_chat_new_chat__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_information_information__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_contacts_contacts__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_search_search__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_requests_requests__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_user_info_user_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_image_modal_image_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_new_club_new_club__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_clubs_clubs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_club_club__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_club_info_club_info__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_add_members_add_members__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_admin_modal_admin_modal__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_request_modal_request_modal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_event_info_event_info__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_doodle_doodle__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_friend__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pipes_search__ = __webpack_require__(1175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pipes_conversation__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pipes_date__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pipes_club__ = __webpack_require__(1178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pipes_member__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pipes_event__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_auth_service_auth_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_auth_service_logout__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_58_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_firebase__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_firebase_firebase__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































































var cloudSettings = {
    'core': {
        'app_id': 'a9078208'
    }
};
var firebaseConfig = {
    apiKey: "AIzaSyAbihXWCa40DwPvVcy8rL0SYEDY4bOMOsE",
    authDomain: "clandar-2e188.firebaseapp.com",
    databaseURL: "https://clandar-2e188.firebaseio.com",
    projectId: "clandar-2e188",
    storageBucket: "clandar-2e188.appspot.com",
    messagingSenderId: "1038439505893"
};
__WEBPACK_IMPORTED_MODULE_58_firebase__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_19__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_23__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_tdlist_tdlist__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_verify_verify__["a" /* VerifyPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_new_chat_new_chat__["a" /* NewChatPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_contacts_contacts__["a" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_user_info_user_info__["a" /* UserInfoPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_new_club_new_club__["a" /* NewClubPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_clubs_clubs__["a" /* ClubsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_club_info_club_info__["a" /* ClubInfoPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_add_members_add_members__["a" /* AddMembersPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_admin_modal_admin_modal__["a" /* AdminModalPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__["b" /* PopPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_request_modal_request_modal__["a" /* RequestModalPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_event_info_event_info__["a" /* EventInfoPage */],
            __WEBPACK_IMPORTED_MODULE_47__pipes_friend__["a" /* FriendPipe */],
            __WEBPACK_IMPORTED_MODULE_49__pipes_conversation__["a" /* ConversationPipe */],
            __WEBPACK_IMPORTED_MODULE_48__pipes_search__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_50__pipes_date__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_51__pipes_club__["a" /* ClubPipe */],
            __WEBPACK_IMPORTED_MODULE_52__pipes_member__["a" /* MemberPipe */],
            __WEBPACK_IMPORTED_MODULE_53__pipes_event__["a" /* EventPipe */],
            __WEBPACK_IMPORTED_MODULE_46__pages_doodle_doodle__["a" /* Doodle */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-modal/admin-modal.module#AdminModalPageModule', name: 'AdminModalPage', segment: 'admin-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-info/event-info.module#EventInfoPageModule', name: 'EventInfoPage', segment: 'event-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/request-modal/request-modal.module#RequestModalPageModule', name: 'RequestModalPage', segment: 'request-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calendar/calendar.module#CalendarModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/clubs/clubs.module#ClubsPageModule', name: 'ClubsPage', segment: 'clubs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searcher/searcher.module#SearcherModule', name: 'Searcher', segment: 'searcher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tasks/tasks.module#TasksModule', name: 'Tasks', segment: 'tasks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tdlist/tdlist.module#TdlistPageModule', name: 'TdlistPage', segment: 'tdlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/conversation/conversation.module#ConversationPageModule', name: 'ConversationPage', segment: 'conversation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/doodle/doodle.module#DoodleModule', name: 'Doodle', segment: 'doodle', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testing/testing.module#TestingModule', name: 'Testing', segment: 'testing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_14_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, 'Clandar'),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_19__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_23__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_tdlist_tdlist__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_verify_verify__["a" /* VerifyPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_new_chat_new_chat__["a" /* NewChatPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_contacts_contacts__["a" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_user_info_user_info__["a" /* UserInfoPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_new_club_new_club__["a" /* NewClubPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_clubs_clubs__["a" /* ClubsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_club_info_club_info__["a" /* ClubInfoPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_add_members_add_members__["a" /* AddMembersPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_admin_modal_admin_modal__["a" /* AdminModalPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_request_modal_request_modal__["a" /* RequestModalPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__["b" /* PopPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_event_info_event_info__["a" /* EventInfoPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_doodle_doodle__["a" /* Doodle */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_54__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_55__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_56__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_57__providers_auth_service_logout__["a" /* LogoutProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_60__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_61__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_59__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_62__providers_firebase_firebase__["a" /* FirebaseProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirebaseProvider = (function () {
    // Firebase Provider
    // This is the provider class for most of the Firebase updates in the app.
    function FirebaseProvider(angularfire, loadingProvider, alertProvider, dataProvider) {
        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.alertProvider = alertProvider;
        this.dataProvider = dataProvider;
        console.log("Initializing Firebase Provider");
    }
    FirebaseProvider.prototype.sendEventRequest = function (userId, eventId) {
        var _this = this;
        this.loadingProvider.load();
        var eventRequestsSent;
        this.dataProvider.getEventRequests(eventId).take(1).subscribe(function (requests) {
            eventRequestsSent = requests.eventRequestsSent;
            if (!eventRequestsSent) {
                eventRequestsSent = [userId];
            }
            else {
                if (eventRequestsSent.indexOf(userId) == -1)
                    eventRequestsSent.push(userId);
            }
            _this.angularfire.object('/requests/' + eventId).update({
                eventRequestsSent: eventRequestsSent
            }).then(function (success) {
                var eventRequests;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    eventRequests = requests.eventRequests;
                    if (!eventRequests) {
                        eventRequests = [eventId];
                    }
                    else {
                        if (eventRequests.indexOf(eventId) == -1)
                            eventRequests.push(eventId);
                    }
                    // Add Event Request information.
                    _this.angularfire.object('/requests/' + userId).update({
                        eventRequests: eventRequests
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                        _this.alertProvider.showEventRequestSent();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Cancel friend request sent to userId.
    FirebaseProvider.prototype.cancelEventRequest = function (userId, eventId) {
        var _this = this;
        this.loadingProvider.load();
        var eventRequestsSent;
        this.dataProvider.getEventRequests(eventId).take(1).subscribe(function (requests) {
            eventRequestsSent = requests.eventRequestsSent;
            eventRequestsSent.splice(eventRequestsSent.indexOf(eventId), 1);
            // Update requestSent information.
            _this.angularfire.object('/requests/' + eventId).update({
                eventRequestsSent: eventRequestsSent
            }).then(function (success) {
                var eventRequests;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    eventRequests = requests.eventRequests;
                    eventRequests.splice(eventRequests.indexOf(eventId), 1);
                    // Update friendRequests information.
                    _this.angularfire.object('/requests/' + userId).update({
                        eventRequests: eventRequests
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                        _this.alertProvider.showEventRequestRemoved();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Delete friend request.(refuse invitation)
    FirebaseProvider.prototype.deleteEventRequest = function (userId, eventId) {
        var _this = this;
        this.loadingProvider.load();
        var eventRequests;
        this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
            eventRequests = requests.eventRequests;
            eventRequests.splice(eventRequests.indexOf(userId), 1);
            // Update friendRequests information.
            _this.angularfire.object('/requests/' + userId).update({
                eventRequests: eventRequests
            }).then(function (success) {
                var eventRequestsSent;
                _this.dataProvider.getEventRequests(eventId).take(1).subscribe(function (requests) {
                    eventRequestsSent = requests.eventRequestsSent;
                    eventRequestsSent.splice(eventRequestsSent.indexOf(eventId), 1);
                    // Update requestsSent information.
                    _this.angularfire.object('/requests/' + userId).update({
                        eventRequestsSent: eventRequestsSent
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
                //TODO ERROR
            });
        });
    };
    // Accept friend request.
    FirebaseProvider.prototype.acceptEventRequest = function (userId, eventId) {
        var _this = this;
        // Delete friend request.
        this.deleteEventRequest(userId, eventId);
        this.loadingProvider.load();
        this.dataProvider.getEventByEID(eventId).take(1).subscribe(function (event) {
            var members = event.members;
            if (!members) {
                members = [userId];
            }
            else {
                members.push(userId);
            }
            // Add both users as friends.
            _this.dataProvider.getEventByEID(eventId).update({
                members: members
            }).then(function (success) {
                _this.dataProvider.getUser(userId).take(1).subscribe(function (account) {
                    var events = account.events;
                    if (!events) {
                        events = [eventId];
                    }
                    else {
                        events.push(eventId);
                    }
                    _this.dataProvider.getUser(userId).update({
                        events: events
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Send friend request to userId.
    FirebaseProvider.prototype.sendFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.load();
        var requestsSent;
        // Use take(1) so that subscription will only trigger once.
        this.dataProvider.getRequests(loggedInUserId).take(1).subscribe(function (requests) {
            requestsSent = requests.requestsSent;
            if (!requestsSent) {
                requestsSent = [userId];
            }
            else {
                if (requestsSent.indexOf(userId) == -1)
                    requestsSent.push(userId);
            }
            // Add requestsSent information.
            _this.angularfire.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then(function (success) {
                var friendRequests;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    friendRequests = requests.friendRequests;
                    if (!friendRequests) {
                        friendRequests = [loggedInUserId];
                    }
                    else {
                        if (friendRequests.indexOf(userId) == -1)
                            friendRequests.push(loggedInUserId);
                    }
                    // Add friendRequest information.
                    _this.angularfire.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                        _this.alertProvider.showFriendRequestSent();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Cancel friend request sent to userId.
    FirebaseProvider.prototype.cancelFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.load();
        var requestsSent;
        this.dataProvider.getRequests(loggedInUserId).take(1).subscribe(function (requests) {
            requestsSent = requests.requestsSent;
            requestsSent.splice(requestsSent.indexOf(userId), 1);
            // Update requestSent information.
            _this.angularfire.object('/requests/' + loggedInUserId).update({
                requestsSent: requestsSent
            }).then(function (success) {
                var friendRequests;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    friendRequests = requests.friendRequests;
                    friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
                    // Update friendRequests information.
                    _this.angularfire.object('/requests/' + userId).update({
                        friendRequests: friendRequests
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                        _this.alertProvider.showFriendRequestRemoved();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    // Delete friend request.
    FirebaseProvider.prototype.deleteFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.loadingProvider.load();
        var friendRequests;
        this.dataProvider.getRequests(loggedInUserId).take(1).subscribe(function (requests) {
            friendRequests = requests.friendRequests;
            friendRequests.splice(friendRequests.indexOf(userId), 1);
            // Update friendRequests information.
            _this.angularfire.object('/requests/' + loggedInUserId).update({
                friendRequests: friendRequests
            }).then(function (success) {
                var requestsSent;
                _this.dataProvider.getRequests(userId).take(1).subscribe(function (requests) {
                    requestsSent = requests.requestsSent;
                    requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
                    // Update requestsSent information.
                    _this.angularfire.object('/requests/' + userId).update({
                        requestsSent: requestsSent
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
                //TODO ERROR
            });
        });
    };
    // Accept friend request.
    FirebaseProvider.prototype.acceptFriendRequest = function (userId) {
        var _this = this;
        var loggedInUserId = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        // Delete friend request.
        this.deleteFriendRequest(userId);
        this.loadingProvider.load();
        this.dataProvider.getUser(loggedInUserId).take(1).subscribe(function (account) {
            var friends = account.friends;
            if (!friends) {
                friends = [userId];
            }
            else {
                friends.push(userId);
            }
            // Add both users as friends.
            _this.dataProvider.getUser(loggedInUserId).update({
                friends: friends
            }).then(function (success) {
                _this.dataProvider.getUser(userId).take(1).subscribe(function (account) {
                    var friends = account.friends;
                    if (!friends) {
                        friends = [loggedInUserId];
                    }
                    else {
                        friends.push(loggedInUserId);
                    }
                    _this.dataProvider.getUser(userId).update({
                        friends: friends
                    }).then(function (success) {
                        _this.loadingProvider.dismiss();
                    }).catch(function (error) {
                        _this.loadingProvider.dismiss();
                    });
                });
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
            });
        });
    };
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_4__data_data__["a" /* DataProvider */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 371,
	"./af.js": 371,
	"./ar": 372,
	"./ar-dz": 373,
	"./ar-dz.js": 373,
	"./ar-kw": 374,
	"./ar-kw.js": 374,
	"./ar-ly": 375,
	"./ar-ly.js": 375,
	"./ar-ma": 376,
	"./ar-ma.js": 376,
	"./ar-sa": 377,
	"./ar-sa.js": 377,
	"./ar-tn": 378,
	"./ar-tn.js": 378,
	"./ar.js": 372,
	"./az": 379,
	"./az.js": 379,
	"./be": 380,
	"./be.js": 380,
	"./bg": 381,
	"./bg.js": 381,
	"./bn": 382,
	"./bn.js": 382,
	"./bo": 383,
	"./bo.js": 383,
	"./br": 384,
	"./br.js": 384,
	"./bs": 385,
	"./bs.js": 385,
	"./ca": 386,
	"./ca.js": 386,
	"./cs": 387,
	"./cs.js": 387,
	"./cv": 388,
	"./cv.js": 388,
	"./cy": 389,
	"./cy.js": 389,
	"./da": 390,
	"./da.js": 390,
	"./de": 391,
	"./de-at": 392,
	"./de-at.js": 392,
	"./de-ch": 393,
	"./de-ch.js": 393,
	"./de.js": 391,
	"./dv": 394,
	"./dv.js": 394,
	"./el": 395,
	"./el.js": 395,
	"./en-au": 396,
	"./en-au.js": 396,
	"./en-ca": 397,
	"./en-ca.js": 397,
	"./en-gb": 398,
	"./en-gb.js": 398,
	"./en-ie": 399,
	"./en-ie.js": 399,
	"./en-nz": 400,
	"./en-nz.js": 400,
	"./eo": 401,
	"./eo.js": 401,
	"./es": 402,
	"./es-do": 403,
	"./es-do.js": 403,
	"./es.js": 402,
	"./et": 404,
	"./et.js": 404,
	"./eu": 405,
	"./eu.js": 405,
	"./fa": 406,
	"./fa.js": 406,
	"./fi": 407,
	"./fi.js": 407,
	"./fo": 408,
	"./fo.js": 408,
	"./fr": 409,
	"./fr-ca": 410,
	"./fr-ca.js": 410,
	"./fr-ch": 411,
	"./fr-ch.js": 411,
	"./fr.js": 409,
	"./fy": 412,
	"./fy.js": 412,
	"./gd": 413,
	"./gd.js": 413,
	"./gl": 414,
	"./gl.js": 414,
	"./gom-latn": 415,
	"./gom-latn.js": 415,
	"./he": 416,
	"./he.js": 416,
	"./hi": 417,
	"./hi.js": 417,
	"./hr": 418,
	"./hr.js": 418,
	"./hu": 419,
	"./hu.js": 419,
	"./hy-am": 420,
	"./hy-am.js": 420,
	"./id": 421,
	"./id.js": 421,
	"./is": 422,
	"./is.js": 422,
	"./it": 423,
	"./it.js": 423,
	"./ja": 424,
	"./ja.js": 424,
	"./jv": 425,
	"./jv.js": 425,
	"./ka": 426,
	"./ka.js": 426,
	"./kk": 427,
	"./kk.js": 427,
	"./km": 428,
	"./km.js": 428,
	"./kn": 429,
	"./kn.js": 429,
	"./ko": 430,
	"./ko.js": 430,
	"./ky": 431,
	"./ky.js": 431,
	"./lb": 432,
	"./lb.js": 432,
	"./lo": 433,
	"./lo.js": 433,
	"./lt": 434,
	"./lt.js": 434,
	"./lv": 435,
	"./lv.js": 435,
	"./me": 436,
	"./me.js": 436,
	"./mi": 437,
	"./mi.js": 437,
	"./mk": 438,
	"./mk.js": 438,
	"./ml": 439,
	"./ml.js": 439,
	"./mr": 440,
	"./mr.js": 440,
	"./ms": 441,
	"./ms-my": 442,
	"./ms-my.js": 442,
	"./ms.js": 441,
	"./my": 443,
	"./my.js": 443,
	"./nb": 444,
	"./nb.js": 444,
	"./ne": 445,
	"./ne.js": 445,
	"./nl": 446,
	"./nl-be": 447,
	"./nl-be.js": 447,
	"./nl.js": 446,
	"./nn": 448,
	"./nn.js": 448,
	"./pa-in": 449,
	"./pa-in.js": 449,
	"./pl": 450,
	"./pl.js": 450,
	"./pt": 451,
	"./pt-br": 452,
	"./pt-br.js": 452,
	"./pt.js": 451,
	"./ro": 453,
	"./ro.js": 453,
	"./ru": 454,
	"./ru.js": 454,
	"./sd": 455,
	"./sd.js": 455,
	"./se": 456,
	"./se.js": 456,
	"./si": 457,
	"./si.js": 457,
	"./sk": 458,
	"./sk.js": 458,
	"./sl": 459,
	"./sl.js": 459,
	"./sq": 460,
	"./sq.js": 460,
	"./sr": 461,
	"./sr-cyrl": 462,
	"./sr-cyrl.js": 462,
	"./sr.js": 461,
	"./ss": 463,
	"./ss.js": 463,
	"./sv": 464,
	"./sv.js": 464,
	"./sw": 465,
	"./sw.js": 465,
	"./ta": 466,
	"./ta.js": 466,
	"./te": 467,
	"./te.js": 467,
	"./tet": 468,
	"./tet.js": 468,
	"./th": 469,
	"./th.js": 469,
	"./tl-ph": 470,
	"./tl-ph.js": 470,
	"./tlh": 471,
	"./tlh.js": 471,
	"./tr": 472,
	"./tr.js": 472,
	"./tzl": 473,
	"./tzl.js": 473,
	"./tzm": 474,
	"./tzm-latn": 475,
	"./tzm-latn.js": 475,
	"./tzm.js": 474,
	"./uk": 476,
	"./uk.js": 476,
	"./ur": 477,
	"./ur.js": 477,
	"./uz": 478,
	"./uz-latn": 479,
	"./uz-latn.js": 479,
	"./uz.js": 478,
	"./vi": 480,
	"./vi.js": 480,
	"./x-pseudo": 481,
	"./x-pseudo.js": 481,
	"./yo": 482,
	"./yo.js": 482,
	"./zh-cn": 483,
	"./zh-cn.js": 483,
	"./zh-hk": 484,
	"./zh-hk.js": 484,
	"./zh-tw": 485,
	"./zh-tw.js": 485
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 844;

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(32);
// Validators
// This file contains all your validators for the formGroups and for inputPrompts.
// Patterns can be tested by using a RegEx validator such as http://www.regexpal.com, https://regex101.com, among others.

var Validator;
(function (Validator) {
    // Set your validators here, don't forget to import and use them in the appropriate class that uses formGroups.
    // In this example, they are used on LoginPage where a formGroup for email and passwords is used.
    Validator.emailValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]
    ];
    Validator.passwordValidator = ['', [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(5),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9!@#$%^&*()_+-=]*$')
        ]
    ];
    // Set your prompt input validators here, don't forget to import and use them on the AlertController prompt.
    // In this example they are used by home.ts where the user are allowed to change their profile.
    // errorMessages are used by the AlertProvider class and is imported inside AlertProvider.errorMessages which is used by showErrorMessage().
    Validator.profileNameValidator = {
        minLength: 5,
        lengthError: { title: 'Name Too Short!', subTitle: 'Sorry, but name must be more than 4 characters.' },
        pattern: /^[a-zA-Z0-9\s]*$/g,
        patternError: { title: 'Invalid Name!', subTitle: 'Sorry, but the name you entered contains special characters.' }
    };
    Validator.profileEmailValidator = {
        pattern: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g,
        patternError: { title: 'Invalid Email Address!', subTitle: 'Sorry, but the email you have entered is invalid.' }
    };
    Validator.profilePasswordValidator = {
        minLength: 5,
        lengthError: { title: 'Password Too Short!', subTitle: 'Sorry, but password must be more than 4 characters.' },
        pattern: /^[a-zA-Z0-9!@#$%^&*()_+-=]*$/g,
        patternError: { title: 'Invalid Password!', subTitle: 'Sorry, but the password you have entered contains special characters.' }
    };
    // Group Form Validators
    Validator.clubNameValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(1)]];
    Validator.clubDescriptionValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(1)]];
})(Validator || (Validator = {}));
//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_contacts__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatPage = ChatPage_1 = (function () {
    // MessagePage
    // This is the page where the user can chat with a friend.
    function ChatPage(navCtrl, navParams, dataProvider, angularfire, loadingProvider, alertCtrl, imageProvider, modalCtrl, camera, keyboard, actionSheet, contacts, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.keyboard = keyboard;
        this.actionSheet = actionSheet;
        this.contacts = contacts;
        this.geolocation = geolocation;
        this.startIndex = -1;
        this.scrollDirection = 'bottom';
        // Set number of messages to show.
        this.numberOfMessages = 10;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = this.navParams.get('userId');
        // Get friend details.
        this.dataProvider.getUser(this.userId).subscribe(function (user) {
            _this.title = user.name;
        });
        // Get conversationInfo with friend.
        this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).subscribe(function (conversation) {
            if (conversation.$exists()) {
                // User already have conversation with this friend, get conversation
                _this.conversationId = conversation.conversationId;
                // Get conversation
                _this.dataProvider.getConversationMessages(_this.conversationId).subscribe(function (messages) {
                    if (_this.messages) {
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > _this.messages.length) {
                            var message_1 = messages[messages.length - 1];
                            _this.dataProvider.getUser(message_1.sender).subscribe(function (user) {
                                message_1.avatar = user.img;
                            });
                            _this.messages.push(message_1);
                            // Also append to messagesToShow.
                            _this.messagesToShow.push(message_1);
                            // Reset scrollDirection to bottom.
                            _this.scrollDirection = 'bottom';
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        _this.messages = [];
                        messages.forEach(function (message) {
                            _this.dataProvider.getUser(message.sender).subscribe(function (user) {
                                message.avatar = user.img;
                            });
                            _this.messages.push(message);
                        });
                        // Load messages in relation to numOfMessages.
                        if (_this.startIndex == -1) {
                            // Get initial index for numberOfMessages to show.
                            if ((_this.messages.length - _this.numberOfMessages) > 0) {
                                _this.startIndex = _this.messages.length - _this.numberOfMessages;
                            }
                            else {
                                _this.startIndex = 0;
                            }
                        }
                        if (!_this.messagesToShow) {
                            _this.messagesToShow = [];
                        }
                        // Set messagesToShow
                        for (var i = _this.startIndex; i < _this.messages.length; i++) {
                            _this.messagesToShow.push(_this.messages[i]);
                        }
                        _this.loadingProvider.dismiss();
                    }
                });
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach(function (message) {
                        var date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    };
    // Load previous messages in relation to numberOfMessages.
    ChatPage.prototype.loadPreviousMessages = function () {
        var that = this;
        // Show loading.
        this.loadingProvider.load();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if ((that.startIndex - that.numberOfMessages) > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            // Set scroll direction to top.
            that.scrollDirection = 'top';
            // Populate list again.
            that.ionViewDidLoad();
        }, 1000);
    };
    // Update messagesRead when user lefts this page.
    ChatPage.prototype.ionViewWillLeave = function () {
        if (this.messages)
            this.setMessagesRead(this.messages);
    };
    // Check if currentPage is active, then update user's messagesRead.
    ChatPage.prototype.setMessagesRead = function (messages) {
        if (this.navCtrl.getActive().instance instanceof ChatPage_1) {
            // Update user's messagesRead on database.
            var totalMessagesCount;
            this.dataProvider.getConversationMessages(this.conversationId).subscribe(function (messages) {
                totalMessagesCount = messages.length;
            });
            this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + this.userId).update({
                messagesRead: totalMessagesCount
            });
        }
    };
    // Check if 'return' button is pressed and send the message.
    ChatPage.prototype.onType = function (keyCode) {
        if (keyCode == 13) {
            // this.keyboard.close();
            // this.send();
        }
    };
    // Scroll to bottom of page after a short delay.
    ChatPage.prototype.scrollBottom = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToBottom();
        }, 300);
    };
    // Scroll to top of the page after a short delay.
    ChatPage.prototype.scrollTop = function () {
        var that = this;
        setTimeout(function () {
            that.content.scrollToTop();
        }, 300);
    };
    // Scroll depending on the direction.
    ChatPage.prototype.doScroll = function () {
        if (this.scrollDirection == 'bottom') {
            this.scrollBottom();
        }
        else if (this.scrollDirection == 'top') {
            this.scrollTop();
        }
    };
    // Check if the user is the sender of the message.
    ChatPage.prototype.isSender = function (message) {
        if (message.sender == __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    };
    // Back
    ChatPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    // Send message, if there's no conversation yet, create a new conversation.
    ChatPage.prototype.send = function () {
        var _this = this;
        if (this.message) {
            // User entered a text on messagebox
            if (this.conversationId) {
                // Add Message to the existing conversation
                // Clone an instance of messages object so it will not directly be updated.
                // The messages object should be updated by our observer declared on ionViewDidLoad.
                var messages_1 = JSON.parse(JSON.stringify(this.messages));
                messages_1.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                    type: 'text',
                    message: this.message
                });
                // Update conversation on database.
                this.dataProvider.getConversation(this.conversationId).update({
                    messages: messages_1
                });
                // Clear messagebox.
                this.message = '';
            }
            else {
                // New Conversation with friend.
                var messages = [];
                messages.push({
                    date: new Date().toString(),
                    sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                    type: 'text',
                    message: this.message
                });
                var users = [];
                users.push(__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid);
                users.push(this.userId);
                // Add conversation.
                this.angularfire.list('conversations').push({
                    dateCreated: new Date().toString(),
                    messages: messages,
                    users: users
                }).then(function (success) {
                    var conversationId = success.key;
                    _this.message = '';
                    // Add conversation reference to the users.
                    _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + _this.userId).update({
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    _this.angularfire.object('/accounts/' + _this.userId + '/conversations/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid).update({
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
            }
        }
    };
    // View user info
    ChatPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
    };
    ChatPage.prototype.attach = function () {
        var _this = this;
        var action = this.actionSheet.create({
            title: 'Choose attachments',
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        console.log("take photo");
                        _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.CAMERA).then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: function () {
                        console.log("Access gallery");
                        _this.imageProvider.uploadPhotoMessage(_this.conversationId, _this.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                            // Process image message.
                            _this.sendPhotoMessage(url);
                        });
                    }
                },
                /*{
                  text: 'Video',
                  handler: () =>{
                    console.log("Video");
                    this.imageProvider.uploadVideoMessage(this.conversationId).then(url=>{
                      this.sendVideoMessage(url);
                    });
                  }
                },*/
                {
                    text: 'Location',
                    handler: function () {
                        console.log("Location");
                        _this.geolocation.getCurrentPosition({
                            timeout: 2000
                        }).then(function (res) {
                            var locationMessage = "current location: lat:" + res.coords.latitude + " lng:" + res.coords.longitude;
                            var confirm = _this.alertCtrl.create({
                                title: 'Your Location',
                                message: locationMessage,
                                buttons: [
                                    {
                                        text: 'Share',
                                        handler: function () {
                                            console.log("share");
                                            _this.message = locationMessage;
                                            _this.send();
                                        }
                                    }, {
                                        text: 'cancel',
                                        handler: function () {
                                            console.log("canceled");
                                        }
                                    }
                                ]
                            });
                            confirm.present();
                        }, function (locationErr) {
                            console.log("Location Error" + JSON.stringify(locationErr));
                        });
                    }
                }, {
                    text: 'Contact',
                    handler: function () {
                        console.log("Share contact");
                        _this.contacts.pickContact().then(function (data) {
                            console.log(data.displayName);
                            console.log(data.phoneNumbers[0].value);
                            _this.message = data.displayName + " ph: " + data.phoneNumbers[0].value;
                            _this.send();
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, {
                    text: 'cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancelled");
                    }
                }]
        });
        action.present();
    };
    ChatPage.prototype.takePhoto = function () {
        var _this = this;
        this.imageProvider.uploadPhotoMessage(this.conversationId, this.camera.PictureSourceType.CAMERA).then(function (url) {
            // Process image message.
            _this.sendPhotoMessage(url);
        });
    };
    // Process photoMessage on database.
    ChatPage.prototype.sendPhotoMessage = function (url) {
        var _this = this;
        if (this.conversationId) {
            // Add image message to existing conversation.
            var messages_2 = JSON.parse(JSON.stringify(this.messages));
            messages_2.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                type: 'image',
                url: url
            });
            // Update conversation on database.
            this.dataProvider.getConversation(this.conversationId).update({
                messages: messages_2
            });
        }
        else {
            // Create new conversation.
            var messages = [];
            messages.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                type: 'image',
                url: url
            });
            var users = [];
            users.push(__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid);
            users.push(this.userId);
            // Add conversation.
            this.angularfire.list('conversations').push({
                dateCreated: new Date().toString(),
                messages: messages,
                users: users
            }).then(function (success) {
                var conversationId = success.key;
                // Add conversation references to users.
                _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + _this.userId).update({
                    conversationId: conversationId,
                    messagesRead: 1
                });
                _this.angularfire.object('/accounts/' + _this.userId + '/conversations/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid).update({
                    conversationId: conversationId,
                    messagesRead: 0
                });
            });
        }
    };
    // Process Video on database.
    ChatPage.prototype.sendVideoMessage = function (url) {
        var _this = this;
        if (this.conversationId) {
            // Add image message to existing conversation.
            var messages_3 = JSON.parse(JSON.stringify(this.messages));
            messages_3.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                type: 'video',
                url: url
            });
            // Update conversation on database.
            this.dataProvider.getConversation(this.conversationId).update({
                messages: messages_3
            });
        }
        else {
            // Create new conversation.
            var messages = [];
            messages.push({
                date: new Date().toString(),
                sender: __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid,
                type: 'video',
                url: url
            });
            var users = [];
            users.push(__WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid);
            users.push(this.userId);
            // Add conversation.
            this.angularfire.list('conversations').push({
                dateCreated: new Date().toString(),
                messages: messages,
                users: users
            }).then(function (success) {
                var conversationId = success.key;
                // Add conversation references to users.
                _this.angularfire.object('/accounts/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid + '/conversations/' + _this.userId).update({
                    conversationId: conversationId,
                    messagesRead: 1
                });
                _this.angularfire.object('/accounts/' + _this.userId + '/conversations/' + __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser.uid).update({
                    conversationId: conversationId,
                    messagesRead: 0
                });
            });
        }
    };
    // Enlarge image messages.
    ChatPage.prototype.enlargeImage = function (img) {
        var imageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__["a" /* ImageModalPage */], { img: img });
        imageModal.present();
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = ChatPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content has-footer class="content">\n  <!-- Messages -->\n  <div class="messages">\n    <p class="loadPreviousMessages" *ngIf="startIndex > 0"><span tappable (click)="loadPreviousMessages()">Load previous messages</span></p>\n    <ion-grid>\n    <ion-row *ngFor="let message of messagesToShow">\n      <!--  Message -->\n      <ion-col width-10 class="center" *ngIf="!isSender(message)">\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()" />\n      </ion-col>\n      <ion-col width-10 *ngIf="isSender(message)">\n      </ion-col>\n      <ion-col width-75 class="sender" *ngIf="!isSender(message)">\n          <div class="left" *ngIf="message.type == \'text\'">\n            <p class="textMessage">{{message.message}}</p>\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n          <div class="left" *ngIf="message.type == \'image\'">\n            <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n          <div class="left" *ngIf="message.type == \'video\'">\n            <video controls width="100%" (load)="doScroll()">\n              <source src="{{message.url}}" type="video/mp4">\n            </video>\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n      </ion-col>\n      <ion-col width-75 *ngIf="isSender(message)">\n          <div class="right" *ngIf="message.type == \'text\'">\n            <p class="textMessage">{{message.message}}</p>\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n          <div class="right" *ngIf="message.type == \'image\'">\n            <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n          <div class="right" *ngIf="message.type == \'video\'">\n            <video controls width="100%" (load)="doScroll()">\n              <source src="{{message.url}}" type="video/mp4">\n            </video>\n            <span>{{message.date | DateFormat}}</span>\n          </div>\n      </ion-col>\n      <ion-col width-10 *ngIf="!isSender(message)">\n      </ion-col>\n      <ion-col width-10 class="center" *ngIf="isSender(message)">\n        <img src="{{message.avatar}}" (load)="doScroll()" />\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<!-- Message Box -->\n<ion-footer>\n    <ion-row>\n      <ion-col col-1>\n        <button item-left ion-button clear (click)="attach()"><ion-icon name="md-attach"></ion-icon></button>\n      </ion-col>\n      <ion-col col-7>\n        <ion-textarea class="inputMessage" type="text" rows="0" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-textarea>\n      </ion-col>\n    <!-- <ion-buttons item-right> -->\n      <ion-col col-2 text-left>\n        <button item-left ion-button clear (click)="takePhoto()"><ion-icon name="md-camera"></ion-icon></button>\n      </ion-col>\n      <ion-col col-2>\n        <button item-right ion-button clear (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n      </ion-col>\n    <!-- </ion-buttons> -->\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */]])
], ChatPage);

var ChatPage_1;
//# sourceMappingURL=chat.js.map

/***/ })

},[738]);
//# sourceMappingURL=main.js.map