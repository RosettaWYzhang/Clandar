webpackJsonp([12],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_testing_testing__ = __webpack_require__(189);
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
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_testing_testing__["a" /* Testing */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["a" /* Auth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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
var Calendar = (function () {
    function Calendar(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.date = new Date(Date.now());
        //    createRandomEvents() {
        //        var events = [];
        //        for (var i = 0; i < 50; i += 1) {
        //            var date = new Date();
        //            var eventType = Math.floor(Math.random() * 2);
        //            var startDay = Math.floor(Math.random() * 90) - 45;
        //            var endDay = Math.floor(Math.random() * 2) + startDay;
        //            var startTime;
        //            var endTime;
        //            if (eventType === 0) {
        //                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        //                if (endDay === startDay) {
        //                    endDay += 1;
        //                }
        //                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
        //                events.push({
        //                    title: 'All Day - ' + i,
        //                    startTime: startTime,
        //                    endTime: endTime,
        //                    allDay: true,
        //                });
        //            } else {
        //                var startMinute = Math.floor(Math.random() * 24 * 60);
        //                var endMinute = Math.floor(Math.random() * 180) + startMinute;
        //                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
        //                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
        //                events.push({
        //                    title: 'Event - ' + i,
        //                    startTime: startTime,
        //                    endTime: endTime,
        //                    allDay: false
        //                });
        //            }
        //        }
        //        return events;
        //    }
        //    onRangeChanged(ev) {
        //        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
        //    }
        //    markDisabled = (date:Date) => {
        //        var current = new Date();
        //        current.setHours(0, 0, 0);
        //        return date < current;
        //    };
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    //   constructor(public navCtrl: NavController, public navParams: NavParams) {
    //   }
    Calendar.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Calendar');
    };
    //    calendar = {
    //        mode: 'month',
    //        currentDate: new Date()
    //    }; // these are the variable used by the calendar.
    //    loadEvents() {
    //        this.eventSource = this.createRandomEvents();
    //    }
    Calendar.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    Calendar.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    Calendar.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    Calendar.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    Calendar.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    Calendar.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('llll');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('llll');
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
    Calendar.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return Calendar;
}());
Calendar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\calendar\calendar.html"*/'<!-- source: http://www.codeexpertz.com/blog/mobile/ionic-2-calendar -->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{viewTitle}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="addEvent()">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n            <!--<button ion-button (click)="loadEvents()" style="font-size:16px">Load Events</button>-->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="has-header">\n\n\n\n    <ion-buttons class="bottom-buttons">\n\n        <button ion-button (click)="changeMode(\'month\')">M</button>\n\n        <button ion-button (click)="changeMode(\'week\')">W</button>\n\n        <button ion-button (click)="changeMode(\'day\')">D</button>\n\n        <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n    </ion-buttons>\n\n\n\n    <calendar [eventSource]="eventSource"\n\n              [calendarMode]="calendar.mode"\n\n              [currentDate]="calendar.currentDate"\n\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n\n              (onEventSelected)="onEventSelected($event)"\n\n              (onTitleChanged)="onViewTitleChanged($event)"\n\n              (onTimeSelected)="onTimeSelected($event)"\n\n              [weekviewNormalEventTemplate]="weekEvents"\n\n              step="15">\n\n    </calendar>\n\n\n\n    <ng-template #weekEvents let-displayEvent="displayEvent">\n\n      <div class="calendar-event-inner"       \n\n      [style.top]="(37*displayEvent.startOffset/hourParts)+\'px\'"\n\n      [style.left]="100/displayEvent.overlapNumber*displayEvent.position+\'%\'"\n\n      [style.width]="100+\'%\'"\n\n      [style.height]="37*(displayEvent.endIndex - displayEvent.startIndex) - 4 + \'px\'"\n\n      >{{displayEvent.event.title}}</div><!--[style.width]="100/displayEvent.overlapNumber+\'%\'" -->\n\n    </ng-template>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\calendar\calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Calendar);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(35);
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
    function SettingsPage(navCtrl, navParams, auth, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.user = user;
        this.name = this.user.details.name;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="settings-content">\n\n  <img src="assets/img/regLogo.png" id="bg">\n\n  <div class="settings-box">\n\n    <h2 style="margin-bottom:15px">Settings</h2>\n\n  </div>\n\n  <ion-list full>\n\n    <ion-item>\n\n      <button (click)=\'gotoHomePage()\' ion-button full>Access Phone Contacts</button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button (click)=\'gotoHomePage()\' ion-button full>Sync with System Calendar</button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button (click)=\'gotoHomePage()\' ion-button full>Invite Your Friends :)</button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-toggle color="secondary" checked="false"></ion-toggle>\n\n        <ion-label>\n\n          <h6 class="titles">Allow others to view my calendar</h6>\n\n        </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["c" /* User */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    function Searcher(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Searcher.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Searcher');
    };
    return Searcher;
}());
Searcher = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searcher',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\searcher\searcher.html"*/'<!--\n\n  Generated template for the Searcher page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Wound you like to...</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=\'content\' padding>\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="clan">\n\n      <ion-segment-button value="club">\n\n        Clubs\n\n      </ion-segment-button>\n\n      <ion-segment-button value="event">\n\n        Events\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="clan">\n\n    <ion-searchbar></ion-searchbar>\n\n    <ion-list no-border  *ngSwitchCase="\'club\'">\n\n\n\n      <ion-item>\n\n        Sports Club\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        Fight Club\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        Student Union\n\n      </ion-item> \n\n\n\n    </ion-list>\n\n\n\n    <ion-list no-border  *ngSwitchCase="\'event\'">\n\n\n\n      <ion-item>\n\n        Dialogue with leaders in Social Media\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        SMU Open House 2015\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        YIC final presentation invitation\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        SPF career talk\n\n      </ion-item>   \n\n\n\n      <ion-item>\n\n        Sea game volunteers\n\n      </ion-item>  \n\n\n\n      <ion-item>\n\n        Social Media Internship\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        Business Development Intern\n\n      </ion-item> \n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\searcher\searcher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Searcher);

//# sourceMappingURL=searcher.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(35);
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






/**
 * Generated class for the Tasks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tasks = (function () {
    function Tasks(navCtrl, navParams, auth, user, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.user = user;
        this.afDB = afDB;
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.navParams.get('selectedDay')).format();
        this.due = preselectedDate;
        this.email = this.user.details.email;
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
        this.tasks.push({
            due: this.due,
            dueIn: __WEBPACK_IMPORTED_MODULE_5_moment__(this.due).fromNow(),
            email: this.email,
            hide: true,
            name: this.name,
            note: this.note,
            reminder: this.reminder,
            urgency: this.urgency
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Tasks.prototype.cancel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return Tasks;
}());
Tasks = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tasks',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tasks\tasks.html"*/'<!--\n\n  Generated template for the Tasks page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>New Task</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only wound-img>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <ion-list no-lines style="margin-top:4px"> \n\n    <ion-item>\n\n      <ion-label>\n\n        <h2 style="margin-left:-1px" style="font-weight:bold;color:rgb(40,40,40)">Name</h2>\n\n      </ion-label>\n\n      <ion-input [(ngModel)]="name" type="text"></ion-input>\n\n    </ion-item>      \n\n\n\n    <ion-item>\n\n      <ion-label>\n\n        <h2 style="margin-left:-1px" style="font-weight:bold;color:rgb(40,40,40)">Due</h2>\n\n      </ion-label>\n\n      <ion-datetime [(ngModel)]="due" [min]="minDate" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="DDD DD MMMM YYYY HH:mm"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>\n\n      <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>\n\n      <ion-input [(ngModel)]="note" placeholder="Add Note" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-toggle [(ngModel)]="reminder" color="secondary" checked="false" style="margin-left:-10px"></ion-toggle>\n\n      <ion-label>\n\n        <h2 class="titles" style="background-color:MediumSeaGreen">Reminder</h2>\n\n      </ion-label>\n\n      <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n\n      <ion-label>\n\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n\n      </ion-label>\n\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div class="text-center">\n\n    <button ion-button round end color="light" (click)="save()">Save</button>\n\n    <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tasks\tasks.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["a" /* Auth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["c" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["c" /* User */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], Tasks);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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
 * Generated class for the Events page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Events = (function () {
    function Events(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        this.defValue = 2;
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    Events.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Events.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    return Events;
}());
Events = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\events\events.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="cancel()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Event Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n  <ion-list style="margin-top:4px">\n\n\n\n    <ion-item>\n\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n\n      <ion-label>Start</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:white"></ion-icon>\n\n      <ion-label>End</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="locate" item-start style="color:LightSeaGreen "></ion-icon>\n\n      <ion-input type="text" placeholder="Location" [(ngModel)]="event.location"></ion-input>    \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="people" item-start style="color:LightPink "></ion-icon>\n\n        <ion-input type="text" placeholder="Members" [(ngModel)]="event.members"></ion-input>    \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="create" item-start style="color:rgb(83,184,229)"></ion-icon>\n\n      <ion-input type="text" placeholder="Add Note" [(ngModel)]="event.note"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n\n      <ion-label>\n\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n\n      </ion-label>\n\n      <ion-range [(ngModel)]="event.urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <div class="text-center">\n\n    <button ion-button round end color="light" (click)="save()">Save</button>\n\n    <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\events\events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], Events);

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(60);
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
    function RegisterPage(navCtrl, navParams, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        console.log('process register');
        //register information
        var details = { 'email': this.email, 'password': this.password, 'name': this.name };
        console.log(details);
        /*let loader = this.loadingCtrl.create({
          content: "Registering your account..."
        });
        loader.present();*/
        //Log in if register successfully
        this.auth.signup(details).then(function () {
            console.log('ok signup');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
            //Handle error
        }, function (err) {
            //loader.dismissAll();
            var errors = '';
            for (var _i = 0, _a = err.details; _i < _a.length; _i++) {
                var e = _a[_i];
                console.log(e);
                if (e === 'required_email')
                    errors += 'Email is required.<br/>';
                if (e === 'required_password')
                    errors += 'Password is required.<br/>';
                if (e === 'conflict_email')
                    errors += 'A user with this email already exists.<br/>';
                //don't need to worry about conflict_username
                if (e === 'invalid_email')
                    errors += 'Your email address isn\'t valid.';
            }
            var alert = _this.alertCtrl.create({
                title: 'Register Error',
                subTitle: errors,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="reg-content">\n\n  <img src="assets/img/regLogo.png" id="bg">\n\n  <div class="reg-box">\n\n    <h2 style="margin-bottom:15px">Registration</h2>\n\n    <ion-input [(ngModel)]="name" type="text" placeholder="Name" name="name"></ion-input>\n\n    <ion-input [(ngModel)]="email" type="text" placeholder="Email" name="email"></ion-input>\n\n    <ion-input [(ngModel)]="password" type="text" placeholder="Password" name="password"></ion-input>\n\n    <ion-col></ion-col>\n\n    <button ion-button full (click)="doRegister()" class="reg-btn">Register!</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_tasks__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events__ = __webpack_require__(113);
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
 * Generated class for the DecidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DecidePage = (function () {
    function DecidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tasks = __WEBPACK_IMPORTED_MODULE_2__tasks_tasks__["a" /* Tasks */];
        this.events = __WEBPACK_IMPORTED_MODULE_3__events_events__["a" /* Events */];
    }
    DecidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DecidePage');
    };
    return DecidePage;
}());
DecidePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-decide',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\decide\decide.html"*/'<!--\n\n  Generated template for the DecidePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bgd">\n\n  <ion-card [navPush]="tasks">\n\n    <img src="assets/img/task.png"/>\n\n    <div class="title">New Task</div>\n\n  </ion-card>\n\n  <ion-card [navPush]="events">\n\n    <img src="assets/img/event.png"/>\n\n    <div class="title">New Event</div>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\decide\decide.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], DecidePage);

//# sourceMappingURL=decide.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_tasks__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__searcher_searcher__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_calendar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tdlist_tdlist__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(79);
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
    function Testing(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */];
        this.calendarPage = __WEBPACK_IMPORTED_MODULE_7__calendar_calendar__["a" /* Calendar */];
        this.eventManagerPage = __WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* Events */];
        this.taskManagerPage = __WEBPACK_IMPORTED_MODULE_5__tasks_tasks__["a" /* Tasks */];
        this.eventSearchPage = __WEBPACK_IMPORTED_MODULE_6__searcher_searcher__["a" /* Searcher */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */];
        this.tdListPage = __WEBPACK_IMPORTED_MODULE_9__tdlist_tdlist__["b" /* TdlistPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */];
    }
    Testing.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Testing');
    };
    return Testing;
}());
Testing = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-testing',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\testing\testing.html"*/'<!--\n\n  Generated template for the Testing page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <div class="text-center">\n\n        Testing\n\n      </div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button [navPush]="homePage" ion-button full>Home</button>\n\n    <button [navPush]="loginPage" ion-button full>Login</button>\n\n    <button [navPush]="calendarPage" ion-button full>Calendar</button>\n\n    <button [navPush]="eventManagerPage" ion-button full>Event Manager</button>\n\n    <button [navPush]="taskManagerPage" ion-button full>Task Manager</button>\n\n    <button [navPush]="eventSearchPage" ion-button full>Event Searcher</button>\n\n    <button [navPush]="settingsPage" ion-button full>Settings</button>\n\n    <button [navPush]="tdListPage" ion-button full>To-do List</button>  \n\n    <button [navPush]="tabsPage" ion-button full>Tabs</button> \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\testing\testing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Testing);

//# sourceMappingURL=testing.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		1002,
		11
	],
	"../pages/decide/decide.module": [
		1007,
		10
	],
	"../pages/event-modal/event-modal.module": [
		1012,
		0
	],
	"../pages/events/events.module": [
		1006,
		9
	],
	"../pages/login/login.module": [
		1010,
		8
	],
	"../pages/register/register.module": [
		1001,
		7
	],
	"../pages/searcher/searcher.module": [
		1004,
		6
	],
	"../pages/settings/settings.module": [
		1003,
		5
	],
	"../pages/tabs/tabs.module": [
		1009,
		4
	],
	"../pages/tasks/tasks.module": [
		1005,
		3
	],
	"../pages/tdlist/tdlist.module": [
		1008,
		2
	],
	"../pages/testing/testing.module": [
		1011,
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 242;

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, auth, user) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.user = user;
        this.name = this.user.details.name;
    }
    HomePage.prototype.doLogout = function () {
        console.log("Logging out");
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Welcome back, {{name}}</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <ion-list style="margin-top:4px">\n\n\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="http://placehold.it/600x400">\n\n        </ion-avatar>\n\n        <h2>SC3101</h2>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="primary">\n\n          <ion-icon name="add" class="rSlide"></ion-icon>\n\n          Add\n\n        </button>\n\n        <button ion-button color="secondary">\n\n          <ion-icon name="more" class="rSlide"></ion-icon>\n\n          More\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-avatar item-start >\n\n          <img src="http://placehold.it/600x400">\n\n        </ion-avatar>\n\n        <h2>CS2312</h2>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="primary">\n\n          <ion-icon name="add" class="rSlide"></ion-icon>\n\n          Add\n\n        </button>\n\n        <button ion-button color="secondary">\n\n          <ion-icon name="more" class="rSlide"></ion-icon>          \n\n          More\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="http://placehold.it/600x400">\n\n        </ion-avatar>\n\n        <h2>EL3000</h2>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="primary">\n\n          <ion-icon name="add" class="rSlide"></ion-icon>          \n\n          Add\n\n        </button>\n\n        <button ion-button color="secondary">\n\n          <ion-icon name="add" class="rSlide"></ion-icon>\n\n          More\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n\n\n<button ion-button round end color="light" (click)="doLogout()">Log out</button>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["c" /* User */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(79);
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
    function Login(navCtrl, navParams, platform, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
    }
    Login.prototype.login = function () {
        var _this = this;
        console.log('process login');
        /*let loader = this.loadingCtrl.create({
          content: "Logging in..."
        });
        loader.present();*/
        this.auth.login('basic', { 'email': this.email, 'password': this.password }).then(function () {
            //loader.dismissAll();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            //loader.dismissAll();
            console.log(err.message);
            var errors = '';
            if (err.message === 'UNPROCESSABLE ENTITY')
                errors += 'Email isn\'t valid.<br/>';
            if (err.message === 'UNAUTHORIZED')
                errors += 'Password is required.<br/>';
            var alert = _this.alertCtrl.create({
                title: 'Login Error',
                subTitle: errors,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    Login.prototype.register = function () {
        console.log("go to register page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\login\login.html"*/'<!--\n\n  Generated template for the Login page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="login-content">\n\n  <!--<ion-row class="logo-row">-->\n\n    <!--<ion-col></ion-col>-->\n\n      <img src="assets/img/loginLogo1.jpg" id="bg">\n\n  <!--</ion-row>-->\n\n  <h6 style="text-align:center;color:black">Together, We make life simpler</h6>\n\n  <div class="login-box">\n\n      <div class="login-form">\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              <ion-item style="background-color:whitesmoke">\n\n                <ion-icon name="person" item-left></ion-icon>\n\n                <ion-input [(ngModel)]="email" type="text" placeholder="Email" name="email"></ion-input>\n\n              </ion-item>\n\n              <ion-item style="background-color:whitesmoke">\n\n                <ion-icon name="lock" item-left></ion-icon>\n\n                <ion-input [(ngModel)]="password" type="password" placeholder="Password" name="password"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <div class="login-button">\n\n          <button ion-button full color="white" (click)="login()" class="submit-btn">Login</button>\n\n          <button ion-button full color="white" (click)="register()" class="submit-btn" style="background:lightsalmon; font-size: 0.9em;">Register</button>\n\n          <button ion-button outline color="white" class="forget-btn" (click)="createAccount()" >Forget Password?</button>\n\n          <!--<button ion-button outline color="white" class="oauth-btn"   (click)="oauth()">OAuth2 Login</button>\n\n          <button ion-button outline color="white" (click)="gotoSearchPatientPage()">Search Patient</button>-->\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(628);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_calendar__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_testing_testing__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_events_events__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tasks_tasks__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_searcher_searcher__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_calendar_calendar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tdlist_tdlist__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_decide_decide__ = __webpack_require__(188);
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_events_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_17__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_18__pages_calendar_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_decide_decide__["a" /* DecidePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tdlist_tdlist__["a" /* TaskModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calendar/calendar.module#CalendarModule', name: 'Calendar', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searcher/searcher.module#SearcherModule', name: 'Searcher', segment: 'searcher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tasks/tasks.module#TasksModule', name: 'Tasks', segment: 'tasks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/events/events.module#EventsModule', name: 'Events', segment: 'events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/decide/decide.module#DecidePageModule', name: 'DecidePage', segment: 'decide', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tdlist/tdlist.module#TdlistPageModule', name: 'TdlistPage', segment: 'tdlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testing/testing.module#TestingModule', name: 'Testing', segment: 'testing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__["b" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_6_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_events_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_17__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_18__pages_calendar_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_decide_decide__["a" /* DecidePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tdlist_tdlist__["a" /* TaskModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tdlist_tdlist__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(60);
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
    function TabsPage(navCtrl, navParams, auth, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.user = user;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__["a" /* Calendar */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_5__tdlist_tdlist__["b" /* TdlistPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__["a" /* Searcher */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.doLogout = function () {
        console.log("Logging out");
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* Login */]);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-header>\n    <ion-navbar>\n      <ion-title>CLANDAR</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)=\"doLogout()\" style=\"font-size:16px\">Log out</button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n    <ion-tabs selectedIndex=\"0\">\n      <ion-tab tabIcon=\"calendar\" tabTitle=\"Calendar\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabIcon=\"settings\" tabTitle=\"Settings\" [root]=\"tab2\"></ion-tab>\n      <ion-tab tabIcon=\"list\" tabTitle=\"To-do List\" [root]=\"tab3\"></ion-tab>\n      <ion-tab tabIcon=\"aperture\" tabTitle=\"Clan\" [root]=\"tab4\"></ion-tab>      \n    </ion-tabs>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["c" /* User */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TdlistPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__decide_decide__ = __webpack_require__(188);
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
    function TdlistPage(navCtrl, menuController, modalCtrl, auth, user, afDB) {
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.user = user;
        this.afDB = afDB;
        this.myDate = new Date().toISOString();
        length = 2;
        this.decidePage = __WEBPACK_IMPORTED_MODULE_4__decide_decide__["a" /* DecidePage */];
        this.email = this.user.details.email;
        this.tasks = afDB.list('/tasks', {
            query: {
                orderByChild: 'email',
                equalTo: this.email
            }
        });
        this.events = afDB.list('/events');
    }
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
            ",tdueIn: " + task.dueIn +
            ",temail: " + task.email +
            ",tname: " + task.name +
            ",tnote: " + task.note +
            ",treminder: " + task.reminder +
            ",turgency: " + task.urgency);
        modal.present();
    };
    TdlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TdlistPage');
    };
    return TdlistPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
], TdlistPage.prototype, "nav", void 0);
TdlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tdlist',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tdlist\tdlist.html"*/'<!--\n\n  Generated template for the TdlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>   \n\n    <ion-title>To-do List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item class="head">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <h1 style="color:RGB(255,120,82)">{{myDate | date:\'EEEE, d\'}}</h1>\n\n          <span>{{myDate | date:\'MMMM\'}}</span>\n\n        </ion-col>\n\n        <ion-col class="button">\n\n          <ion-buttons end>\n\n            <button [navPush]="decidePage" ion-button clear icon-only>\n\n              <ion-icon name="add"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <h1>Task</h1>\n\n  </ion-item>\n\n\n\n  <ion-card *ngFor="let task of tasks | async">\n\n    <ion-card-content >\n\n      <ion-card-title>\n\n        {{task.name}}\n\n      </ion-card-title>\n\n      <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}, due {{task.dueIn}}</p>\n\n      <p>Urgency: {{task.urgency}}</p>\n\n      <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n\n      <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n\n    </ion-card-content>\n\n    <ion-row no-padding>\n\n      <ion-col *ngIf="task.hide==true">\n\n        <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'arrow-dropdown\'></ion-icon>\n\n          Details\n\n        </button>\n\n      </ion-col>\n\n      <ion-col *ngIf="task.hide==false">\n\n        <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'arrow-dropup\'></ion-icon>\n\n          Details\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'create\'></ion-icon>\n\n          Edit\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-item>\n\n    <h1>Event</h1>\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let event of events | async" (click)="showEventDetails(event.$key, event.title)">\n\n      {{event.name}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tdlist\tdlist.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["a" /* Auth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["c" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["c" /* User */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _g || Object])
], TdlistPage);

var TaskModalPage = (function () {
    function TaskModalPage(navParams, viewCtrl, user, auth, afDB) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.user = user;
        this.auth = auth;
        this.afDB = afDB;
        this.email = this.user.details.email;
        this.tname = this.navParams.get('tname');
        this.tdue = this.navParams.get('tdue');
        this.tdueIn = this.navParams.get('tdueIn');
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
            dueIn: this.tdueIn,
            note: this.tnote,
            reminder: this.treminder,
            urgency: this.turgency
        });
        console.log("tid: " + this.tid +
            ",tdue: " + this.tdue +
            ",tdueIn: " + this.tdueIn +
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
        template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Edit\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)=\"dismiss()\">\n          <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n          <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"content\">\n    <ion-list no-lines style=\"margin-top:4px\"> \n      <ion-item>\n        <ion-label>\n          <h2 style=\"margin-left:-1px\" style=\"font-weight:bold;color:rgb(40,40,40)\">Name</h2>\n        </ion-label>\n        <ion-input [(ngModel)]=\"tname\" type=\"text\" placeholder=\"{{tname}}\"></ion-input>\n      </ion-item>      \n\n      <ion-item>\n        <ion-label>\n          <h2 style=\"margin-left:-1px\" style=\"font-weight:bold;color:rgb(40,40,40)\">Due</h2>\n        </ion-label>\n        <ion-datetime [(ngModel)]=\"tdue\" placeholder=\"{{tdue}}\" displayFormat=\"YYYY-MM-DD HH:mm\" pickerFormat=\"DDD DD MMMM YYYY HH:mm\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"calendar\" item-start style=\"color:rgb(83,184,229)\"></ion-icon>\n        <h2 class=\"titles\" style=\"background-color:rgb(83,184,229)\">Add Note</h2>\n        <ion-input [(ngModel)]=\"tnote\" placeholder=\"{{tnote}}\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-toggle [(ngModel)]=\"treminder\" color=\"secondary\" checked=\"{{treminder}}\" style=\"margin-left:-10px\"></ion-toggle>\n        <ion-label>\n          <h2 class=\"titles\" style=\"background-color:MediumSeaGreen\">Reminder</h2>\n        </ion-label>\n        <ion-icon name=\"alarm\" item-start style=\"color:MediumSeaGreen\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"alert\" item-start style=\"color:red;\"></ion-icon>\n        <ion-label>\n          <h2 class=\"titles\" style=\"background-color:red;padding: 5px\">Urgency</h2>\n        </ion-label>\n        <ion-range [(ngModel)]=\"turgency\" color=\"danger\" min=\"1\" max=\"4\" step=\"1\" snaps=\"true\" style=\"margin-top:-20px\"></ion-range>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"text-center\">\n      <button ion-button round end color=\"light\" (click)=\"save()\">Save</button>\n    </div>\n  </ion-content>"
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["c" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["c" /* User */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["a" /* Auth */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _m || Object])
], TaskModalPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=tdlist.js.map

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 454,
	"./af.js": 454,
	"./ar": 455,
	"./ar-dz": 456,
	"./ar-dz.js": 456,
	"./ar-kw": 457,
	"./ar-kw.js": 457,
	"./ar-ly": 458,
	"./ar-ly.js": 458,
	"./ar-ma": 459,
	"./ar-ma.js": 459,
	"./ar-sa": 460,
	"./ar-sa.js": 460,
	"./ar-tn": 461,
	"./ar-tn.js": 461,
	"./ar.js": 455,
	"./az": 462,
	"./az.js": 462,
	"./be": 463,
	"./be.js": 463,
	"./bg": 464,
	"./bg.js": 464,
	"./bn": 465,
	"./bn.js": 465,
	"./bo": 466,
	"./bo.js": 466,
	"./br": 467,
	"./br.js": 467,
	"./bs": 468,
	"./bs.js": 468,
	"./ca": 469,
	"./ca.js": 469,
	"./cs": 470,
	"./cs.js": 470,
	"./cv": 471,
	"./cv.js": 471,
	"./cy": 472,
	"./cy.js": 472,
	"./da": 473,
	"./da.js": 473,
	"./de": 474,
	"./de-at": 475,
	"./de-at.js": 475,
	"./de-ch": 476,
	"./de-ch.js": 476,
	"./de.js": 474,
	"./dv": 477,
	"./dv.js": 477,
	"./el": 478,
	"./el.js": 478,
	"./en-au": 479,
	"./en-au.js": 479,
	"./en-ca": 480,
	"./en-ca.js": 480,
	"./en-gb": 481,
	"./en-gb.js": 481,
	"./en-ie": 482,
	"./en-ie.js": 482,
	"./en-nz": 483,
	"./en-nz.js": 483,
	"./eo": 484,
	"./eo.js": 484,
	"./es": 485,
	"./es-do": 486,
	"./es-do.js": 486,
	"./es.js": 485,
	"./et": 487,
	"./et.js": 487,
	"./eu": 488,
	"./eu.js": 488,
	"./fa": 489,
	"./fa.js": 489,
	"./fi": 490,
	"./fi.js": 490,
	"./fo": 491,
	"./fo.js": 491,
	"./fr": 492,
	"./fr-ca": 493,
	"./fr-ca.js": 493,
	"./fr-ch": 494,
	"./fr-ch.js": 494,
	"./fr.js": 492,
	"./fy": 495,
	"./fy.js": 495,
	"./gd": 496,
	"./gd.js": 496,
	"./gl": 497,
	"./gl.js": 497,
	"./gom-latn": 498,
	"./gom-latn.js": 498,
	"./he": 499,
	"./he.js": 499,
	"./hi": 500,
	"./hi.js": 500,
	"./hr": 501,
	"./hr.js": 501,
	"./hu": 502,
	"./hu.js": 502,
	"./hy-am": 503,
	"./hy-am.js": 503,
	"./id": 504,
	"./id.js": 504,
	"./is": 505,
	"./is.js": 505,
	"./it": 506,
	"./it.js": 506,
	"./ja": 507,
	"./ja.js": 507,
	"./jv": 508,
	"./jv.js": 508,
	"./ka": 509,
	"./ka.js": 509,
	"./kk": 510,
	"./kk.js": 510,
	"./km": 511,
	"./km.js": 511,
	"./kn": 512,
	"./kn.js": 512,
	"./ko": 513,
	"./ko.js": 513,
	"./ky": 514,
	"./ky.js": 514,
	"./lb": 515,
	"./lb.js": 515,
	"./lo": 516,
	"./lo.js": 516,
	"./lt": 517,
	"./lt.js": 517,
	"./lv": 518,
	"./lv.js": 518,
	"./me": 519,
	"./me.js": 519,
	"./mi": 520,
	"./mi.js": 520,
	"./mk": 521,
	"./mk.js": 521,
	"./ml": 522,
	"./ml.js": 522,
	"./mr": 523,
	"./mr.js": 523,
	"./ms": 524,
	"./ms-my": 525,
	"./ms-my.js": 525,
	"./ms.js": 524,
	"./my": 526,
	"./my.js": 526,
	"./nb": 527,
	"./nb.js": 527,
	"./ne": 528,
	"./ne.js": 528,
	"./nl": 529,
	"./nl-be": 530,
	"./nl-be.js": 530,
	"./nl.js": 529,
	"./nn": 531,
	"./nn.js": 531,
	"./pa-in": 532,
	"./pa-in.js": 532,
	"./pl": 533,
	"./pl.js": 533,
	"./pt": 534,
	"./pt-br": 535,
	"./pt-br.js": 535,
	"./pt.js": 534,
	"./ro": 536,
	"./ro.js": 536,
	"./ru": 537,
	"./ru.js": 537,
	"./sd": 538,
	"./sd.js": 538,
	"./se": 539,
	"./se.js": 539,
	"./si": 540,
	"./si.js": 540,
	"./sk": 541,
	"./sk.js": 541,
	"./sl": 542,
	"./sl.js": 542,
	"./sq": 543,
	"./sq.js": 543,
	"./sr": 544,
	"./sr-cyrl": 545,
	"./sr-cyrl.js": 545,
	"./sr.js": 544,
	"./ss": 546,
	"./ss.js": 546,
	"./sv": 547,
	"./sv.js": 547,
	"./sw": 548,
	"./sw.js": 548,
	"./ta": 549,
	"./ta.js": 549,
	"./te": 550,
	"./te.js": 550,
	"./tet": 551,
	"./tet.js": 551,
	"./th": 552,
	"./th.js": 552,
	"./tl-ph": 553,
	"./tl-ph.js": 553,
	"./tlh": 554,
	"./tlh.js": 554,
	"./tr": 555,
	"./tr.js": 555,
	"./tzl": 556,
	"./tzl.js": 556,
	"./tzm": 557,
	"./tzm-latn": 558,
	"./tzm-latn.js": 558,
	"./tzm.js": 557,
	"./uk": 559,
	"./uk.js": 559,
	"./ur": 560,
	"./ur.js": 560,
	"./uz": 561,
	"./uz-latn": 562,
	"./uz-latn.js": 562,
	"./uz.js": 561,
	"./vi": 563,
	"./vi.js": 563,
	"./x-pseudo": 564,
	"./x-pseudo.js": 564,
	"./yo": 565,
	"./yo.js": 565,
	"./zh-cn": 566,
	"./zh-cn.js": 566,
	"./zh-hk": 567,
	"./zh-hk.js": 567,
	"./zh-tw": 568,
	"./zh-tw.js": 568
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
webpackContext.id = 957;

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[623]);
//# sourceMappingURL=main.js.map