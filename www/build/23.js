webpackJsonp([23],{

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(1201);
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

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
    function EventModalPage(navCtrl, navParams, afDB, dataProvider, firebaseProvider, alertCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.dataProvider = dataProvider;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.minDate = new Date().toISOString();
        this.maxDate = "2100-12-31";
        this.defValue = 1;
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.navParams.get('selectedDay')).format();
        this.startTime = preselectedDate;
        this.endTime = preselectedDate;
        this.urgency = this.defValue;
        this.hide = false;
        this.note = "";
        this.location = "";
        this.uid = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.events = afDB.list('/events');
        this.urgency = 2;
        this.dataProvider.getUser(this.uid).take(1).subscribe(function (user) {
            var clubs = user.adminedClubs;
            var clubIds = [];
            _this.adminedClubs = [];
            if (clubs) {
                for (var i = 0; i < clubs.length; i++) {
                    console.log(clubs[i]);
                    clubIds.push(clubs[i]);
                }
            }
            for (var j = 0; j < clubIds.length; j++) {
                console.log(clubIds[j]);
                _this.dataProvider.getClub(clubIds[j]).subscribe(function (club) {
                    console.log(club);
                    _this.adminedClubs.push(club);
                });
            }
        });
    }
    EventModalPage.prototype.ionViewDidLoad = function () {
    };
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        var _this = this;
        if (this.title == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Name is empty',
                subTitle: 'Please fill in the name',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else if (this.startTime >= this.endTime) {
            var alert_2 = this.alertCtrl.create({
                title: 'Invalid Time',
                subTitle: 'Start time can not exceed end time.',
                buttons: ['Back to modify']
            });
            alert_2.present();
        }
        else {
            this.events.push({
                club: this.club,
                organizer: this.uid,
                title: this.title,
                location: this.location,
                note: this.note,
                startTime: this.startTime,
                endTime: this.endTime,
                urgency: this.urgency,
            }).then(function (event) {
                console.log(event.key);
                _this.eventId = event.key;
                var evs;
                _this.dataProvider.getClub(_this.club).subscribe(function (club) {
                    evs = club.events;
                });
                var eidToPush = [];
                eidToPush.push(event.key);
                if (_this.hasEvents(_this.eventId)) {
                    evs.push(_this.eventId);
                    _this.afDB.object('/clubs/' + _this.club + '/events/').update(evs);
                }
                else {
                    _this.afDB.object('/clubs/' + _this.club).update({
                        events: [_this.eventId]
                    });
                }
                console.log(_this.eventId);
            });
            this.dataProvider.getClub(this.club).subscribe(function (club) {
                var members = club.members;
                _this.members = [];
                for (var i = 0; i < members.length; i++) {
                    _this.dataProvider.getUser(members[i]).subscribe(function (user) {
                        _this.members.push(user);
                    });
                }
            });
            this.hide = true;
            this.membersToInvite = [];
            console.log(this.members);
            console.log(this.eventId);
            //this.viewCtrl.dismiss(this.event);
        }
    };
    EventModalPage.prototype.goback = function () {
        var itemObservable = this.afDB.object('/events/' + this.eventId);
        itemObservable.remove();
        console.log(this.club);
        console.log(this.eventId);
        var eventsUpdated;
        this.dataProvider.getClub(this.club).subscribe(function (club) {
            eventsUpdated = club.events;
        });
        eventsUpdated.splice(eventsUpdated.indexOf(this.eventId), 1);
        this.dataProvider.getClub(this.club).update({
            events: eventsUpdated
        });
        this.hide = false;
        this.club = '';
    };
    EventModalPage.prototype.finish = function () {
        console.log(this.club);
        this.club = '';
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.getStatus = function (memberId, eventId) {
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
    EventModalPage.prototype.hasEvents = function (club) {
        var b = false;
        this.dataProvider.getClub(club).subscribe(function (club) {
            if (club.events) {
                b = true;
            }
            else
                b = false;
        });
        return b;
    };
    // Send friend request.
    EventModalPage.prototype.invite = function (member) {
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
    EventModalPage.prototype.removeFromInvitation = function (member) {
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
    return EventModalPage;
}());
EventModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-modal',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/event-modal/event-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button class="back" ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n  <ion-list>\n    <ion-item>\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n      <ion-input disabled="{{hide}}" type="text" placeholder="Title" [(ngModel)]="title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="person" item-start style="color:green"></ion-icon>\n      <ion-label>Club</ion-label>\n      <ion-select disabled="{{hide}}" [(ngModel)]="club">\n        <ng-container *ngFor="let club of adminedClubs">\n          <ion-option value="{{club.$key}}">{{club.name}}</ion-option>\n        </ng-container>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n      <ion-label>Start</ion-label>\n      <ion-datetime disabled="{{hide}}" displayFormat="MM/DD/YYYY HH:mm" pickerFormat="YYYY MMM DD HH:mm" [(ngModel)]="startTime" min={{minDate}} max={{maxDate}}></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:white"></ion-icon>\n      <ion-label>End</ion-label>\n      <ion-datetime disabled="{{hide}}" displayFormat="MM/DD/YYYY HH:mm" pickerFormat="YYYY MMM DD HH:mm" [(ngModel)]="endTime" min={{minDate}} max={{maxDate}}></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="locate" item-start style="color:LightSeaGreen "></ion-icon>\n      <ion-input disabled="{{hide}}" type="text" placeholder="Location" [(ngModel)]="location"></ion-input>    \n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="create" item-start style="color:rgb(83,184,229)"></ion-icon>\n      <ion-input disabled="{{hide}}" type="text" placeholder="Add Note" [(ngModel)]="note"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n      <ion-label>\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n      </ion-label>\n      <ion-range disabled="{{hide}}" [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n    </ion-item>\n\n  </ion-list>\n  <ion-list *ngIf="hide">\n    <ion-list-header>\n      Invite Club Members\n    </ion-list-header>\n    <ng-container *ngIf="member.userId != this.uid">\n      <ion-item *ngFor="let member of members">\n        <ion-fab middle right>\n          <button color="mainColor" ion-fab mini tappable (click)="invite(member); $event.stopPropagation();" *ngIf="getStatus(member.userId,this.eventId)==0"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n          <button color="mainColor" ion-fab mini tappable (click)="removeFromInvitation(member); $event.stopPropagation();" *ngIf="getStatus(member.userId,this.eventId)==1"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n        </ion-fab>\n        <ion-avatar item-left>\n          <img src="{{member.img}}">\n        </ion-avatar>\n        <h2>{{member.name}}</h2>\n        <p>{{member.email}}</p>  \n      </ion-item>\n    </ng-container>\n  </ion-list>\n\n  <ion-row>\n    <ion-col text-right>\n      <button ion-button *ngIf="!hide" round end color="secondary" (click)="save()">Continue</button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button *ngIf="hide" round end color="secondary" (click)="finish()">Done</button>\n    </ion-col>  \n    <ion-col text-right>\n      <button ion-button *ngIf="hide" round end color="secondary" (click)="goback()">Modify</button>\n    </ion-col>        \n    <ion-col>\n      <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>\n\n\n\n<!--<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n    </ion-item>\n \n    <ion-item>\n      <ion-label>Start</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n \n    <ion-item>\n      <ion-label>End</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Location" [(ngModel)]="event.location"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Members" [(ngModel)]="event.members"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Add Note" [(ngModel)]="event.note"></ion-input>\n    </ion-item>\n \n    <ion-item>\n      <ion-label>All Day?</ion-label>\n      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n \n  <button ion-button full icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> Add Event\n  </button>\n</ion-content>-->'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/event-modal/event-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
], EventModalPage);

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=23.js.map