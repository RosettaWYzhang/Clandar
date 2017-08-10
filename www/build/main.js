webpackJsonp([11],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TdlistPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(193);
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
    function TdlistPage(navCtrl, menuController, modalCtrl, ASCtrl, platform, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.modalCtrl = modalCtrl;
        this.ASCtrl = ASCtrl;
        this.platform = platform;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], TdlistPage.prototype, "nav", void 0);
TdlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tdlist',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tdlist/tdlist.html"*/'<!--\n  Generated template for the TdlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>   \n    <ion-title>To-do List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item class="head">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-9>\n          <h1 style="color:RGB(255,120,82)">{{myDate | date:\'EEEE, d\'}}</h1>\n          <span>{{myDate | date:\'MMMM\'}}</span>\n        </ion-col>\n        <ion-col class="button">\n          <ion-buttons end>\n            <button [navPush]="taskPage" ion-button clear icon-only>\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item>\n    <h1>In Progress</h1>\n  </ion-item>\n\n  <ng-container *ngFor="let task of tasks | async">\n    <ion-card *ngIf="task.finished==false">\n      <ion-card-content>\n        <ion-card-title>\n          {{task.name}}\n        </ion-card-title>\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n        <p>Urgency: {{task.urgency}}</p>\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col *ngIf="task.hide==true">\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col *ngIf="task.hide==false">\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-center>\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'create\'></ion-icon>\n            Edit\n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n            <ion-icon name=\'more\'></ion-icon>\n            More\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ng-container>\n\n  <ion-item>\n    <h1>Completed</h1>\n  </ion-item>\n\n  <ng-container *ngFor="let task of tasks | async">\n    <ion-card *ngIf="task.finished==true">\n      <ion-card-content>\n        <ion-card-title>\n          {{task.name}}\n        </ion-card-title>\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n        <p>Urgency: {{task.urgency}}</p>\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col *ngIf="task.hide==true">\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col *ngIf="task.hide==false">\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-center>\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'create\'></ion-icon>\n            Edit\n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n            <ion-icon name=\'more\'></ion-icon>\n            More\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tdlist/tdlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
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
        template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Edit\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)=\"dismiss()\">\n          <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n          <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"content\">\n    <ion-list no-lines style=\"margin-top:4px\"> \n      <ion-item>\n        <ion-label>\n          <h2 style=\"margin-left:-1px\" style=\"font-weight:bold;color:rgb(40,40,40)\">Name</h2>\n        </ion-label>\n        <ion-input [(ngModel)]=\"tname\" type=\"text\" placeholder=\"{{tname}}\"></ion-input>\n      </ion-item>      \n\n      <ion-item>\n        <ion-label>\n          <h2 style=\"margin-left:-1px\" style=\"font-weight:bold;color:rgb(40,40,40)\">Due</h2>\n        </ion-label>\n        <ion-datetime [(ngModel)]=\"tdue\" placeholder=\"{{tdue}}\" displayFormat=\"YYYY-MM-DD HH:mm\" pickerFormat=\"DDD DD MMMM YYYY HH:mm\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"calendar\" item-start style=\"color:rgb(83,184,229)\"></ion-icon>\n        <h2 class=\"titles\" style=\"background-color:rgb(83,184,229)\">Add Note</h2>\n        <ion-input [(ngModel)]=\"tnote\" placeholder=\"{{tnote}}\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-toggle [(ngModel)]=\"treminder\" color=\"secondary\" checked=\"{{treminder}}\" style=\"margin-left:-10px\"></ion-toggle>\n        <ion-label>\n          <h2 class=\"titles\" style=\"background-color:MediumSeaGreen\">Reminder</h2>\n        </ion-label>\n        <ion-icon name=\"alarm\" item-start style=\"color:MediumSeaGreen\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"alert\" item-start style=\"color:red;\"></ion-icon>\n        <ion-label>\n          <h2 class=\"titles\" style=\"background-color:red;padding: 5px\">Urgency</h2>\n        </ion-label>\n        <ion-range [(ngModel)]=\"turgency\" color=\"danger\" min=\"1\" max=\"4\" step=\"1\" snaps=\"true\" style=\"margin-top:-20px\"></ion-range>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"text-center\">\n      <button ion-button round end color=\"light\" (click)=\"save()\">Save</button>\n    </div>\n  </ion-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], TaskModalPage);

//# sourceMappingURL=tdlist.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_logout__ = __webpack_require__(114);
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
    // Image Error Messages
    imageUpload: { title: 'Image Upload Failed!', subTitle: 'Sorry but we\'ve encountered an error uploading selected image.' },
    // Group Error Messages
    groupUpdate: { title: 'Update Group Failed!', subTitle: 'Sorry, but we\'ve encountered an error updating this group.' },
    groupLeave: { title: 'Leave Group Failed!', subTitle: 'Sorry, but you\'ve encountered an error leaving this group.' },
    groupDelete: { title: 'Delete Group Failed!', subTitle: 'Sorry, but we\'ve encountered an error deleting this group.' }
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
    groupUpdated: { title: 'Group Updated!', subTitle: 'This group has been successfully updated!' },
    groupLeft: { title: 'Leave Group', subTitle: 'You have successfully left this group.' }
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
    // Show group updated.
    AlertProvider.prototype.showGroupUpdatedMessage = function () {
        this.alert = this.alertCtrl.create({
            title: successMessages.groupUpdated["title"],
            subTitle: successMessages.groupUpdated["subTitle"],
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
            // Group Error MEssages
            case 'group/error-update-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupUpdate["title"],
                    subTitle: errorMessages.groupUpdate["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'group/error-leave-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupLeave["title"],
                    subTitle: errorMessages.groupLeave["subTitle"],
                    buttons: ['OK']
                }).present();
                break;
            case 'group/error-delete-group':
                this.alert = this.alertCtrl.create({
                    title: errorMessages.groupDelete["title"],
                    subTitle: errorMessages.groupDelete["subTitle"],
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(29);
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
    Validator.groupNameValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(1)]];
    Validator.groupDescriptionValidator = ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(1)]];
})(Validator || (Validator = {}));
//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 1134:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(87);
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

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_testing_testing__ = __webpack_require__(239);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["a" /* Auth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    function ConversationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConversationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConversationPage');
    };
    return ConversationPage;
}());
ConversationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conversation',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/conversation/conversation.html"*/'<!--\n  Generated template for the ConversationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>conversation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/conversation/conversation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], ConversationPage);

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(1162);
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: function () {
                        // Call imageProvider to process, upload, and update user photo.
                        _this.imageProvider.setProfilePhoto(_this.user, _this.camera.PictureSourceType.CAMERA);
                    }
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel'
                },
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
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: function (data) { _this.logoutProvider.doLogout(); }
                }
            ]
        }).present();
    };
    return InformationPage;
}());
InformationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-information',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/information/information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Personal Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="user">\n    <ion-list>\n      <ion-list-header>\n        My Account\n      </ion-list-header>\n      <ion-item no-lines>\n        <ion-avatar item-left>\n          <img src="{{user.img}}" tappable (click)="setPhoto()">\n        </ion-avatar>\n        <h2 tappable (click)="setName()">{{user.name}} </h2>\n      </ion-item>\n      <ion-list-header>\n        Status\n      </ion-list-header>\n      <ion-item no-lines>\n        <p tappable (click)="setDescription()" class="description">{{user.description}}</p>\n      </ion-item>\n      <ion-list-header>\n        More\n      </ion-list-header>\n      <ion-item no-lines tappable (click)="setEmail()">\n        Change Email Address\n      </ion-item>\n      <ion-item no-lines tappable (click)="setPassword()" *ngIf="user && this.provider == \'Firebase\'">\n        Change Password\n      </ion-item>\n      <ion-item no-lines tappable (click)="deleteAccount()">\n        Delete Account\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/information/information.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__["a" /* LogoutProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__["a" /* LogoutProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */]) === "function" && _l || Object])
], InformationPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=information.js.map

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(1164);
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
        this.groupPhotoOptions = {
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
    // Upload and set the group object's image.
    ImageProvider.prototype.setGroupPhoto = function (group, sourceType) {
        var _this = this;
        this.groupPhotoOptions.sourceType = sourceType;
        this.loadingProvider.load();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.groupPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            var metadata = {
                'contentType': imgBlob.type
            };
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                _this.deleteImageFile(group.img);
                // URL of the uploaded image!
                var url = snapshot.metadata.downloadURLs[0];
                group.img = url;
                _this.loadingProvider.dismiss();
            }).catch(function (error) {
                _this.loadingProvider.dismiss();
                _this.alertProvider.showErrorMessage('image/error-image-upload');
            });
        }).catch(function (error) {
            _this.loadingProvider.dismiss();
        });
    };
    // Set group photo and return the group object as promise.
    ImageProvider.prototype.setGroupPhotoPromise = function (group, sourceType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.groupPhotoOptions.sourceType = sourceType;
            _this.loadingProvider.load();
            // Get picture from camera or gallery.
            _this.camera.getPicture(_this.groupPhotoOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                var metadata = {
                    'contentType': imgBlob.type
                };
                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
                    _this.deleteImageFile(group.img);
                    // URL of the uploaded image!
                    var url = snapshot.metadata.downloadURLs[0];
                    group.img = url;
                    _this.loadingProvider.dismiss();
                    resolve(group);
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
    // Delete group image file on group storage reference.
    ImageProvider.prototype.deleteGroupImageFile = function (groupId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(function () { }).catch(function (error) { });
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
    // Upload group photo message and return a promise as url.
    ImageProvider.prototype.uploadGroupPhotoMessage = function (groupId, sourceType) {
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
                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('images/' + groupId + '/' + _this.generateFilename()).put(imgBlob, metadata).then(function (snapshot) {
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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/calendar/calendar.html"*/'<!-- source: http://www.codeexpertz.com/blog/mobile/ionic-2-calendar -->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addEvent()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n            <!--<button ion-button (click)="loadEvents()" style="font-size:16px">Load Events</button>-->\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n\n    <ion-buttons class="bottom-buttons">\n        <button ion-button (click)="changeMode(\'month\')">M</button>\n        <button ion-button (click)="changeMode(\'week\')">W</button>\n        <button ion-button (click)="changeMode(\'day\')">D</button>\n        <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n    </ion-buttons>\n\n\n\n    <calendar [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              (onTitleChanged)="onViewTitleChanged($event)"\n              (onTimeSelected)="onTimeSelected($event)"\n              [weekviewNormalEventTemplate]="weekEvents"\n              step="15">\n    </calendar>\n\n    <ng-template #weekEvents let-displayEvent="displayEvent">\n      <div class="calendar-event-inner"       \n      [style.top]="(37*displayEvent.startOffset/hourParts)+\'px\'"\n      [style.left]="100/displayEvent.overlapNumber*displayEvent.position+\'%\'"\n      [style.width]="100+\'%\'"\n      [style.height]="37*(displayEvent.endIndex - displayEvent.startIndex) - 4 + \'px\'"\n      >{{displayEvent.event.title}}</div><!--[style.width]="100/displayEvent.overlapNumber+\'%\'" -->\n    </ng-template>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/calendar/calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], Calendar);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tdlist_tdlist__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__conversation_conversation__ = __webpack_require__(1158);
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
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__tdlist_tdlist__["b" /* TdlistPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_7__conversation_conversation__["a" /* ConversationPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__["a" /* Searcher */];
        this.tab5 = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
        this.tabRef.select(0);
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-tabs #myTabs>\n      <ion-tab tabIcon=\"calendar\" tabTitle=\"Calendar\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabIcon=\"list\" tabTitle=\"To-do List\" [root]=\"tab2\"></ion-tab>\n      <ion-tab tabIcon=\"chatbubbles\" tabTitle=\"Conversation\" [root]=\"tab3\"></ion-tab>\n      <ion-tab tabIcon=\"aperture\" tabTitle=\"Clan\" [root]=\"tab4\"></ion-tab>  \n      <ion-tab tabIcon=\"settings\" tabTitle=\"Settings\" [root]=\"tab5\"></ion-tab>          \n    </ion-tabs>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["c" /* User */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__information_information__ = __webpack_require__(1160);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__information_information__["a" /* InformationPage */]);
    };
    SettingsPage.prototype.doLogout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Logout',
                    handler: function (data) {
                        // Log the user out.
                        _this.logoutProvider.doLogout();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* Login */]);
                    }
                }
            ]
        }).present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="settings-content">\n  <div *ngIf="user">\n    <img src="assets/img/regLogo.png" id="bg">\n\n    <ion-list>\n      <ion-item (click)=\'gotoInfo()\'>\n        <ion-avatar item-left>\n          <img src=\'{{user.img}}\' tappable (click)="setPhoto()">\n        </ion-avatar>\n        <h2>{{user.name}}</h2>\n        <p>{{user.description}}</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list full>\n      <ion-item>\n        <button (click)=\'gotoHomePage()\' ion-button full>Access Phone Contacts</button>\n      </ion-item>\n      <ion-item>\n        <button (click)=\'gotoHomePage()\' ion-button full>Sync with System Calendar</button>\n      </ion-item>\n      <ion-item>\n        <button (click)=\'gotoHomePage()\' ion-button full>Invite Your Friends :)</button>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n          <ion-toggle color="primary" checked="false"></ion-toggle>\n          <ion-label>\n            <h6 class="titles">Allow others to view my calendar</h6>\n          </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <button (click)=\'doLogout()\' ion-button full>Log out</button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__["a" /* LogoutProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(113);
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
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/login/login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="login-content">\n  <!--<ion-row class="logo-row">-->\n    <!--<ion-col></ion-col>-->\n      <img src="assets/img/loginLogo1.jpg" id="bg">\n  <!--</ion-row>-->\n  <h6 style="text-align:center;color:black">Together, We make life simpler</h6>\n  <div class="login-box">\n    <form [formGroup]="loginForm">\n      <div class="login-form">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n              <ion-item style="background-color:whitesmoke">\n                <ion-icon name="person" item-left></ion-icon>\n                <ion-input formControlName="email" type="text" placeholder="Email" name="email"></ion-input>\n              </ion-item>\n              <ion-item style="background-color:whitesmoke">\n                <ion-icon name="lock" item-left></ion-icon>\n                <ion-input formControlName="password" type="password" placeholder="Password" name="password"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <div class="login-button">\n          <button ion-button full color="white" (click)="login()" class="submit-btn" [disabled]="!loginForm.valid">Login</button>\n          <button ion-button full color="white" (click)="register()" class="submit-btn" style="background:lightsalmon; font-size: 0.9em;">Register</button>\n          <button ion-button outline color="white" (click)="forgetPassword()" class="forget-btn">Forget Password?</button>\n          <!--<button ion-button outline color="white" class="oauth-btn"   (click)="oauth()">OAuth2 Login</button>\n          <button ion-button outline color="white" (click)="gotoSearchPatientPage()">Search Patient</button>-->\n          </div>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searcher',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/searcher/searcher.html"*/'<!--\n  Generated template for the Searcher page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wound you like to...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=\'content\' padding>\n  <div padding>\n    <ion-segment [(ngModel)]="clan">\n      <ion-segment-button value="club">\n        Clubs\n      </ion-segment-button>\n      <ion-segment-button value="event">\n        Events\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="clan">\n    <ion-searchbar></ion-searchbar>\n    <ion-list no-border  *ngSwitchCase="\'club\'">\n\n      <ion-item>\n        Sports Club\n      </ion-item>\n\n      <ion-item>\n        Fight Club\n      </ion-item>\n\n      <ion-item>\n        Student Union\n      </ion-item> \n\n    </ion-list>\n\n    <ion-list no-border  *ngSwitchCase="\'event\'">\n\n      <ion-item>\n        Dialogue with leaders in Social Media\n      </ion-item>\n\n      <ion-item>\n        SMU Open House 2015\n      </ion-item>\n\n      <ion-item>\n        YIC final presentation invitation\n      </ion-item>\n\n      <ion-item>\n        SPF career talk\n      </ion-item>   \n\n      <ion-item>\n        Sea game volunteers\n      </ion-item>  \n\n      <ion-item>\n        Social Media Internship\n      </ion-item>\n\n      <ion-item>\n        Business Development Intern\n      </ion-item> \n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/searcher/searcher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], Searcher);

//# sourceMappingURL=searcher.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(87);
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
            var alert_1 = this.alertCtrl.create({
                title: 'Note is empty',
                subTitle: 'Please fill in the note',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else if (this.name == undefined) {
            var alert_2 = this.alertCtrl.create({
                title: 'Name is empty',
                subTitle: 'Please fill in the name',
                buttons: ['Dismiss']
            });
            alert_2.present();
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
            this.navCtrl.parent.select(1);
        }
    };
    Tasks.prototype.cancel = function () {
        //this.navCtrl.push(TabsPage);
        this.navCtrl.parent.select(1);
    };
    return Tasks;
}());
Tasks = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tasks',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tasks/tasks.html"*/'<!--\n  Generated template for the Tasks page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>New Task</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="content">\n  <ion-list no-lines style="margin-top:4px"> \n    <ion-item>\n      <ion-label>\n        <h2 style="margin-left:-1px" style="font-weight:bold;color:rgb(40,40,40)">Name</h2>\n      </ion-label>\n      <ion-input [(ngModel)]="name" type="text"></ion-input>\n    </ion-item>      \n\n    <ion-item>\n      <ion-label>\n        <h2 style="margin-left:-1px" style="font-weight:bold;color:rgb(40,40,40)">Due</h2>\n      </ion-label>\n      <ion-datetime [(ngModel)]="due" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="DDD DD MMMM YYYY HH:mm"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>\n      <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>\n      <ion-input [(ngModel)]="note" placeholder="Add Note" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="reminder" color="secondary" checked="false" style="margin-left:-10px"></ion-toggle>\n      <ion-label>\n        <h2 class="titles" style="background-color:MediumSeaGreen">Reminder</h2>\n      </ion-label>\n      <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n      <ion-label>\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n      </ion-label>\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <div class="text-center">\n    <button ion-button round end color="light" (click)="save()">Save</button>\n    <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tasks/tasks.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], Tasks);

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(87);
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
            __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('accounts/' + _this.loginUser.uid).set({
                email: _this.loginUser.email,
                userId: _this.loginUser.uid,
                name: 'newUser',
                img: 'https://firebasestorage.googleapis.com/v0/b/clandar-2e188.appspot.com/o/profile.png?alt=media&token=22fd850b-d8bd-4926-80a4-c87b9032a938',
                description: 'No description yet :('
            })
                .catch(function (error) {
                console.error("User error", error);
            });
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="reg-content">\n  <img src="assets/img/regLogo.png" id="bg">\n  <div class="reg-box">\n    <form [formGroup]="registerForm">\n      <h2 style="margin-bottom:15px">Registration</h2>\n      <ion-input formControlName="email" type="text" placeholder="Email" name="email"></ion-input>\n      <ion-input formControlName="password" type="text" placeholder="Password" name="password"></ion-input>    \n      <button ion-button full (click)="doRegister()" class="reg-btn">Register!</button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validation__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(87);
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
                    subTitle: 'Congratulations! Your email has been confirmed!',
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel'
                },
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
                }
            ]
        }).present();
    };
    return VerifyPage;
}());
VerifyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-verify',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/verify/verify.html"*/'<!--\n  Generated template for the VerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <div *ngIf="user" class="page">\n    <h4 class="title">Verify your account</h4>\n    <p>Please verify <span>{{user.email}}</span> to continue</p>\n    <!-- Verification Menu -->\n    <ion-row style="text-align: center;">\n      <ion-col>\n        <ion-icon name="refresh" tappable (click)="sendEmailVerification()"></ion-icon>\n        <p>Resend</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="mail" tappable (click)="setEmail()"></ion-icon>\n        <p>Update Email</p>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="log-out" tappable (click)="logout()"></ion-icon>\n        <p>Cancel</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/verify/verify.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__["a" /* LogoutProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
], VerifyPage);

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tdlist_tdlist__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(112);
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
        this.calendarPage = __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__["a" /* Calendar */];
        this.taskManagerPage = __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* Tasks */];
        this.eventSearchPage = __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__["a" /* Searcher */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */];
        this.tdListPage = __WEBPACK_IMPORTED_MODULE_7__tdlist_tdlist__["b" /* TdlistPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */];
    }
    Testing.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Testing');
        this.alert.hello();
    };
    return Testing;
}());
Testing = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-testing',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/testing/testing.html"*/'<!--\n  Generated template for the Testing page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <div class="text-center">\n        Testing\n      </div>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <button [navPush]="loginPage" ion-button full>Login</button>\n    <button [navPush]="calendarPage" ion-button full>Calendar</button>\n    <button [navPush]="taskManagerPage" ion-button full>Task Manager</button>\n    <button [navPush]="eventSearchPage" ion-button full>Event Searcher</button>\n    <button [navPush]="settingsPage" ion-button full>Settings</button>\n    <button [navPush]="tdListPage" ion-button full>To-do List</button>  \n    <button [navPush]="tabsPage" ion-button full>Tabs</button>    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/testing/testing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */]])
], Testing);

//# sourceMappingURL=testing.js.map

/***/ }),

/***/ 249:
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
webpackEmptyAsyncContext.id = 249;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		1145,
		26
	],
	"../pages/conversation/conversation.module": [
		1157,
		25
	],
	"../pages/event-modal/event-modal.module": [
		1155,
		1
	],
	"../pages/information/information.module": [
		1159,
		0
	],
	"../pages/login/login.module": [
		1147,
		10
	],
	"../pages/register/register.module": [
		1146,
		9
	],
	"../pages/searcher/searcher.module": [
		1149,
		8
	],
	"../pages/settings/settings.module": [
		1148,
		7
	],
	"../pages/tabs/tabs.module": [
		1152,
		6
	],
	"../pages/tasks/tasks.module": [
		1150,
		5
	],
	"../pages/tdlist/tdlist.module": [
		1151,
		4
	],
	"../pages/testing/testing.module": [
		1154,
		3
	],
	"../pages/verify/verify.module": [
		1153,
		2
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
webpackAsyncContext.id = 292;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verify_verify__ = __webpack_require__(238);


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

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(87);
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
    // Get requests given the userId.
    DataProvider.prototype.getRequests = function (userId) {
        return this.angularfire.object('/requests/' + userId);
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
    DataProvider.prototype.getGroupMessages = function (groupId) {
        return this.angularfire.object('/groups/' + groupId + '/messages');
    };
    // Get groups of the logged in user.
    DataProvider.prototype.getGroups = function () {
        return this.angularfire.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid + '/groups');
    };
    // Get group info given the groupId.
    DataProvider.prototype.getGroup = function (groupId) {
        return this.angularfire.object('/groups/' + groupId);
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(716);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_cloud_angular__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__ = __webpack_require__(1130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(1142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_testing_testing__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tasks_tasks__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_searcher_searcher__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_calendar_calendar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tdlist_tdlist__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_verify_verify__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_conversation_conversation__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_information_information__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_alert_alert__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_auth_service_auth_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_loading_loading__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_logout__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_data_data__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_image_image__ = __webpack_require__(1161);
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
__WEBPACK_IMPORTED_MODULE_31_firebase__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_19__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calendar_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tdlist_tdlist__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_verify_verify__["a" /* VerifyPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_information_information__["a" /* InformationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/calendar/calendar.module#CalendarModule', name: 'Calendar', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searcher/searcher.module#SearcherModule', name: 'Searcher', segment: 'searcher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tasks/tasks.module#TasksModule', name: 'Tasks', segment: 'tasks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tdlist/tdlist.module#TdlistPageModule', name: 'TdlistPage', segment: 'tdlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testing/testing.module#TestingModule', name: 'Testing', segment: 'testing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/conversation/conversation.module#ConversationPageModule', name: 'ConversationPage', segment: 'conversation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_cloud_angular__["b" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, 'Clandar'),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_19__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calendar_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tdlist_tdlist__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_verify_verify__["a" /* VerifyPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_information_information__["a" /* InformationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_logout__["a" /* LogoutProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_32__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_33__providers_image_image__["a" /* ImageProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 293,
	"./af.js": 293,
	"./ar": 294,
	"./ar-dz": 295,
	"./ar-dz.js": 295,
	"./ar-kw": 296,
	"./ar-kw.js": 296,
	"./ar-ly": 297,
	"./ar-ly.js": 297,
	"./ar-ma": 298,
	"./ar-ma.js": 298,
	"./ar-sa": 299,
	"./ar-sa.js": 299,
	"./ar-tn": 300,
	"./ar-tn.js": 300,
	"./ar.js": 294,
	"./az": 301,
	"./az.js": 301,
	"./be": 302,
	"./be.js": 302,
	"./bg": 303,
	"./bg.js": 303,
	"./bn": 304,
	"./bn.js": 304,
	"./bo": 305,
	"./bo.js": 305,
	"./br": 306,
	"./br.js": 306,
	"./bs": 307,
	"./bs.js": 307,
	"./ca": 308,
	"./ca.js": 308,
	"./cs": 309,
	"./cs.js": 309,
	"./cv": 310,
	"./cv.js": 310,
	"./cy": 311,
	"./cy.js": 311,
	"./da": 312,
	"./da.js": 312,
	"./de": 313,
	"./de-at": 314,
	"./de-at.js": 314,
	"./de-ch": 315,
	"./de-ch.js": 315,
	"./de.js": 313,
	"./dv": 316,
	"./dv.js": 316,
	"./el": 317,
	"./el.js": 317,
	"./en-au": 318,
	"./en-au.js": 318,
	"./en-ca": 319,
	"./en-ca.js": 319,
	"./en-gb": 320,
	"./en-gb.js": 320,
	"./en-ie": 321,
	"./en-ie.js": 321,
	"./en-nz": 322,
	"./en-nz.js": 322,
	"./eo": 323,
	"./eo.js": 323,
	"./es": 324,
	"./es-do": 325,
	"./es-do.js": 325,
	"./es.js": 324,
	"./et": 326,
	"./et.js": 326,
	"./eu": 327,
	"./eu.js": 327,
	"./fa": 328,
	"./fa.js": 328,
	"./fi": 329,
	"./fi.js": 329,
	"./fo": 330,
	"./fo.js": 330,
	"./fr": 331,
	"./fr-ca": 332,
	"./fr-ca.js": 332,
	"./fr-ch": 333,
	"./fr-ch.js": 333,
	"./fr.js": 331,
	"./fy": 334,
	"./fy.js": 334,
	"./gd": 335,
	"./gd.js": 335,
	"./gl": 336,
	"./gl.js": 336,
	"./gom-latn": 337,
	"./gom-latn.js": 337,
	"./he": 338,
	"./he.js": 338,
	"./hi": 339,
	"./hi.js": 339,
	"./hr": 340,
	"./hr.js": 340,
	"./hu": 341,
	"./hu.js": 341,
	"./hy-am": 342,
	"./hy-am.js": 342,
	"./id": 343,
	"./id.js": 343,
	"./is": 344,
	"./is.js": 344,
	"./it": 345,
	"./it.js": 345,
	"./ja": 346,
	"./ja.js": 346,
	"./jv": 347,
	"./jv.js": 347,
	"./ka": 348,
	"./ka.js": 348,
	"./kk": 349,
	"./kk.js": 349,
	"./km": 350,
	"./km.js": 350,
	"./kn": 351,
	"./kn.js": 351,
	"./ko": 352,
	"./ko.js": 352,
	"./ky": 353,
	"./ky.js": 353,
	"./lb": 354,
	"./lb.js": 354,
	"./lo": 355,
	"./lo.js": 355,
	"./lt": 356,
	"./lt.js": 356,
	"./lv": 357,
	"./lv.js": 357,
	"./me": 358,
	"./me.js": 358,
	"./mi": 359,
	"./mi.js": 359,
	"./mk": 360,
	"./mk.js": 360,
	"./ml": 361,
	"./ml.js": 361,
	"./mr": 362,
	"./mr.js": 362,
	"./ms": 363,
	"./ms-my": 364,
	"./ms-my.js": 364,
	"./ms.js": 363,
	"./my": 365,
	"./my.js": 365,
	"./nb": 366,
	"./nb.js": 366,
	"./ne": 367,
	"./ne.js": 367,
	"./nl": 368,
	"./nl-be": 369,
	"./nl-be.js": 369,
	"./nl.js": 368,
	"./nn": 370,
	"./nn.js": 370,
	"./pa-in": 371,
	"./pa-in.js": 371,
	"./pl": 372,
	"./pl.js": 372,
	"./pt": 373,
	"./pt-br": 374,
	"./pt-br.js": 374,
	"./pt.js": 373,
	"./ro": 375,
	"./ro.js": 375,
	"./ru": 376,
	"./ru.js": 376,
	"./sd": 377,
	"./sd.js": 377,
	"./se": 378,
	"./se.js": 378,
	"./si": 379,
	"./si.js": 379,
	"./sk": 380,
	"./sk.js": 380,
	"./sl": 381,
	"./sl.js": 381,
	"./sq": 382,
	"./sq.js": 382,
	"./sr": 383,
	"./sr-cyrl": 384,
	"./sr-cyrl.js": 384,
	"./sr.js": 383,
	"./ss": 385,
	"./ss.js": 385,
	"./sv": 386,
	"./sv.js": 386,
	"./sw": 387,
	"./sw.js": 387,
	"./ta": 388,
	"./ta.js": 388,
	"./te": 389,
	"./te.js": 389,
	"./tet": 390,
	"./tet.js": 390,
	"./th": 391,
	"./th.js": 391,
	"./tl-ph": 392,
	"./tl-ph.js": 392,
	"./tlh": 393,
	"./tlh.js": 393,
	"./tr": 394,
	"./tr.js": 394,
	"./tzl": 395,
	"./tzl.js": 395,
	"./tzm": 396,
	"./tzm-latn": 397,
	"./tzm-latn.js": 397,
	"./tzm.js": 396,
	"./uk": 398,
	"./uk.js": 398,
	"./ur": 399,
	"./ur.js": 399,
	"./uz": 400,
	"./uz-latn": 401,
	"./uz-latn.js": 401,
	"./uz.js": 400,
	"./vi": 402,
	"./vi.js": 402,
	"./x-pseudo": 403,
	"./x-pseudo.js": 403,
	"./yo": 404,
	"./yo.js": 404,
	"./zh-cn": 405,
	"./zh-cn.js": 405,
	"./zh-hk": 406,
	"./zh-hk.js": 406,
	"./zh-tw": 407,
	"./zh-tw.js": 407
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
webpackContext.id = 737;

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
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
                content: 'Please wait...',
                dismissOnPageChange: true
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
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */]])
], LoadingProvider);

//# sourceMappingURL=loading.js.map

/***/ })

},[711]);
//# sourceMappingURL=main.js.map