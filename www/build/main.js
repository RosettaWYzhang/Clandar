<<<<<<< HEAD
webpackJsonp([16],{
=======
webpackJsonp([17],{
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(85);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__ = __webpack_require__(477);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__ = __webpack_require__(476);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_contacts__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(266);
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
                                buttons: [{
                                        text: 'cancel',
                                        handler: function () {
                                            console.log("canceled");
                                        }
                                    }, {
                                        text: 'Share',
                                        handler: function () {
                                            console.log("share");
                                            _this.message = locationMessage;
                                            _this.send();
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
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\chat\chat.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n\n    </ion-buttons>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content has-footer class="content">\n\n  <!-- Messages -->\n\n  <div class="messages">\n\n    <p class="loadPreviousMessages" *ngIf="startIndex > 0"><span tappable (click)="loadPreviousMessages()">Load previous messages</span></p>\n\n    <ion-grid>\n\n    <ion-row *ngFor="let message of messagesToShow">\n\n      <!--  Message -->\n\n      <ion-col width-10 class="center" *ngIf="!isSender(message)">\n\n        <img src="{{message.avatar}}" (load)="doScroll()" />\n\n      </ion-col>\n\n      <ion-col width-10 *ngIf="isSender(message)">\n\n      </ion-col>\n\n      <ion-col width-75 class="sender" *ngIf="!isSender(message)">\n\n          <div class="left" *ngIf="message.type == \'text\'">\n\n            <p class="textMessage">{{message.message}}</p>\n\n            <span>{{message.date | DateFormat}}</span>\n\n          </div>\n\n          <div class="left" *ngIf="message.type == \'image\'">\n\n            <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n            <span>{{message.date | DateFormat}}</span>\n\n          </div>\n\n          <div class="left" *ngIf="message.type == \'video\'">\n\n            <video controls width="100%" (load)="doScroll()">\n\n              <source src="{{message.url}}" type="video/mp4">\n\n            </video>\n\n            <span>{{message.date | DateFormat}}</span>\n\n          </div>\n\n      </ion-col>\n\n      <ion-col width-75 *ngIf="isSender(message)">\n\n          <div class="right" *ngIf="message.type == \'text\'">\n\n            <p class="textMessage">{{message.message}}</p>\n\n            <span>{{message.date | DateFormat}}</span>\n\n          </div>\n\n          <div class="right" *ngIf="message.type == \'image\'">\n\n            <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()" />\n\n            <span>{{message.date | DateFormat}}</span>\n\n          </div>\n\n          <div class="right" *ngIf="message.type == \'video\'">\n\n            <video controls width="100%" (load)="doScroll()">\n\n              <source src="{{message.url}}" type="video/mp4">\n\n            </video>\n\n            <span>{{message.date | DateFormat}}</span>\n\n          </div>\n\n      </ion-col>\n\n      <ion-col width-10 *ngIf="!isSender(message)">\n\n      </ion-col>\n\n      <ion-col width-10 class="center" *ngIf="isSender(message)">\n\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()" />\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n<!-- Message Box -->\n\n<ion-footer>\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        <button item-left ion-button clear (click)="attach()"><ion-icon name="md-attach"></ion-icon></button>\n\n      </ion-col>\n\n      <ion-col col-7>\n\n        <ion-textarea class="inputMessage" type="text" rows="0" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-textarea>\n\n      </ion-col>\n\n    <!-- <ion-buttons item-right> -->\n\n      <ion-col col-2 text-left>\n\n        <button item-left ion-button clear (click)="takePhoto()"><ion-icon name="md-camera"></ion-icon></button>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button item-right ion-button clear (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n\n      </ion-col>\n\n    <!-- </ion-buttons> -->\n\n    </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */]])
], ChatPage);

var ChatPage_1;
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TdlistPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(204);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(203);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
        selector: 'page-tdlist',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tdlist/tdlist.html"*/'<!--\n  Generated template for the TdlistPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>   \n    <ion-title>To-do List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item class="head">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-9>\n          <h1 style="color:RGB(255,120,82)">{{myDate | date:\'EEEE, d\'}}</h1>\n          <span>{{myDate | date:\'MMMM, yyyy\'}}</span>\n        </ion-col>\n        <ion-col class="button" col-3>\n          <ion-buttons end>\n            <button (click)="gotoTaskPage()" ion-button clear icon-only>\n              <ion-icon name="add" class="add"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item>\n    <h1>In Progress</h1>\n  </ion-item>\n\n  <ng-container *ngFor="let task of tasks | async">\n    <ion-card *ngIf="task.finished==false">\n      <ion-card-content style="margin-bottom: -20px">\n        <ion-card-title>\n          {{task.name}}\n        </ion-card-title>\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n        <p>Urgency: {{task.urgency}}</p>\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col text-left *ngIf="task.hide==true" col-4>\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-left *ngIf="task.hide==false" col-4>\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-center col-4>\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'create\'></ion-icon>\n            Edit\n          </button>\n        </ion-col>\n        <ion-col text-right col-4>\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n            <ion-icon name=\'more\'></ion-icon>\n            More\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ng-container>\n\n  <ion-item>\n    <h1>Completed</h1>\n  </ion-item>\n\n  <ng-container *ngFor="let task of tasks | async">\n    <ion-card *ngIf="task.finished==true">\n      <ion-card-content>\n        <ion-card-title>\n          {{task.name}}\n        </ion-card-title>\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n        <p>Urgency: {{task.urgency}}</p>\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col *ngIf="task.hide==true">\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col *ngIf="task.hide==false">\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n            Details\n          </button>\n        </ion-col>\n        <ion-col text-center>\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'create\'></ion-icon>\n            Edit\n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n            <ion-icon name=\'more\'></ion-icon>\n            More\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tdlist/tdlist.html"*/,
=======
        selector: 'page-tdlist',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tdlist\tdlist.html"*/'<!--\n\n  Generated template for the TdlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>   \n\n    <ion-title>To-do List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item class="head">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <h1 style="color:RGB(255,120,82)">{{myDate | date:\'EEEE, d\'}}</h1>\n\n          <span>{{myDate | date:\'MMMM, yyyy\'}}</span>\n\n        </ion-col>\n\n        <ion-col class="button" col-3>\n\n          <ion-buttons end>\n\n            <button [navPush]="taskPage" ion-button clear icon-only>\n\n              <ion-icon name="add" class="add"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <h1>In Progress</h1>\n\n  </ion-item>\n\n\n\n  <ng-container *ngFor="let task of tasks | async">\n\n    <ion-card *ngIf="task.finished==false">\n\n      <ion-card-content style="margin-bottom: -20px">\n\n        <ion-card-title>\n\n          {{task.name}}\n\n        </ion-card-title>\n\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n\n        <p>Urgency: {{task.urgency}}</p>\n\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n\n      </ion-card-content>\n\n      <ion-row no-padding>\n\n        <ion-col text-left *ngIf="task.hide==true" col-4>\n\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n\n            Details\n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-left *ngIf="task.hide==false" col-4>\n\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n\n            Details\n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-center col-4>\n\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n\n            <ion-icon name=\'create\'></ion-icon>\n\n            Edit\n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-right col-4>\n\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n\n            <ion-icon name=\'more\'></ion-icon>\n\n            More\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </ng-container>\n\n\n\n  <ion-item>\n\n    <h1>Completed</h1>\n\n  </ion-item>\n\n\n\n  <ng-container *ngFor="let task of tasks | async">\n\n    <ion-card *ngIf="task.finished==true">\n\n      <ion-card-content style="margin-bottom: -20px">\n\n        <ion-card-title>\n\n          {{task.name}}\n\n        </ion-card-title>\n\n        <ion-note *ngIf="isBefore(task.due)==true">Overdue</ion-note>\n\n        <p>Deadline: {{task.due | date: \'d MMM yyyy, EEE, HH:mm:ss\'}}</p>\n\n        <p>Urgency: {{task.urgency}}</p>\n\n        <p *ngIf="task.hide==false"> Reminder: {{task.reminder}}</p>\n\n        <p *ngIf="task.hide==false">Note: {{task.note}}</p>\n\n      </ion-card-content>\n\n      <ion-row no-padding>\n\n        <ion-col *ngIf="task.hide==true" col-4>\n\n          <button (click)="collapse(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n\n            <ion-icon name=\'arrow-dropdown\'></ion-icon>\n\n            Details\n\n          </button>\n\n        </ion-col>\n\n        <ion-col *ngIf="task.hide==false" col-4>\n\n          <button (click)="hiding(task.$key, task.hide)" ion-button clear small color="danger" icon-start>\n\n            <ion-icon name=\'arrow-dropup\'></ion-icon>\n\n            Details\n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-center col-4>\n\n          <button (click)="edit(task)" ion-button clear small color="danger" icon-start>\n\n            <ion-icon name=\'create\'></ion-icon>\n\n            Edit\n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-right col-4>\n\n          <button (click)="more(task)" ion-button clear small color="danger" icon-start> \n\n            <ion-icon name=\'more\'></ion-icon>\n\n            More\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </ng-container>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tdlist\tdlist.html"*/,
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
        template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Edit\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)=\"dismiss()\">\n          <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n          <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"content\">\n    <ion-list> \n      <ion-item>\n        <ion-icon name=\"bookmark\" item-start style=\"color:orange\"></ion-icon>\n        <ion-input [(ngModel)]=\"tname\" type=\"text\" placeholder=\"{{tname}}\"></ion-input>\n      </ion-item>      \n\n      <ion-item>\n        <ion-icon name=\"calendar\" item-start style=\"color:Salmon\"></ion-icon>\n        <ion-label>Due</ion-label>\n        <ion-datetime [(ngModel)]=\"tdue\" placeholder=\"{{tdue}}\" displayFormat=\"YYYY-MM-DD HH:mm\" pickerFormat=\"DDD DD MMMM YYYY HH:mm\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"calendar\" item-start style=\"color:rgb(83,184,229)\"></ion-icon>\n        <h2 class=\"titles\" style=\"background-color:rgb(83,184,229)\">Add Note</h2>\n        <ion-input [(ngModel)]=\"tnote\" placeholder=\"{{tnote}}\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-toggle [(ngModel)]=\"treminder\" color=\"secondary\" checked=\"{{treminder}}\" style=\"margin-left:-10px\"></ion-toggle>\n        <ion-label>\n          <h2>Reminder</h2>\n        </ion-label>\n        <ion-icon name=\"alarm\" item-start style=\"color:MediumSeaGreen\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"alert\" item-start style=\"color:red;\"></ion-icon>\n        <ion-label>\n          <h2 class=\"titles\" style=\"background-color:red;padding: 10px 8px;border-radius: 8px;color:white\">Urgency</h2>\n        </ion-label>\n        <ion-range [(ngModel)]=\"turgency\" color=\"danger\" min=\"1\" max=\"4\" step=\"1\" snaps=\"true\" style=\"margin-top:-20px\"></ion-range>\n      </ion-item>\n    </ion-list>\n\n    <div style=\"text-align:center\">\n      <button ion-button round end color=\"secondary\" (click)=\"save()\">Save</button>\n    </div>\n  </ion-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], TaskModalPage);

//# sourceMappingURL=tdlist.js.map

/***/ }),

<<<<<<< HEAD
/***/ 1154:
=======
/***/ 1153:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

<<<<<<< HEAD
/***/ 1164:
=======
/***/ 1163:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(561);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_testing_testing__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(26);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_testing_testing__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(27);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\app\app.html"*/
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

<<<<<<< HEAD
/***/ 1165:
=======
/***/ 1164:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            return friends.filter(function (friend) { return friend.name.toLowerCase().indexOf(term_1) > -1 || friend.username.toLowerCase().indexOf(term_1) > -1; });
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

<<<<<<< HEAD
/***/ 1166:
=======
/***/ 1165:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            return accounts.filter(function (account) { return excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1); });
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

<<<<<<< HEAD
/***/ 1167:
=======
/***/ 1166:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

<<<<<<< HEAD
/***/ 1168:
=======
/***/ 1167:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

<<<<<<< HEAD
/***/ 1187:
=======
/***/ 1168:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

/***/ 1189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__club_club__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search__ = __webpack_require__(203);
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
            message: 'This club has been created.',
            icon: 'md-chatbubbles'
        });
        // Add members of the club.
        var members = [];
        for (var i = 0; i < this.clubMembers.length; i++) {
            members.push(this.clubMembers[i].$key);
        }
        // Add club info and date.
        this.club.creater = __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid;
        this.club.dateCreated = new Date().toString();
        this.club.messages = messages;
        this.club.members = members;
        this.club.name = this.clubForm.value["name"];
        this.club.description = this.clubForm.value["description"];
        // Add club to database.
        this.angularfire.list('clubs').push(this.club).then(function (success) {
            var clubId = success.key;
            // Add club reference to users.
            _this.angularfire.object('/accounts/' + _this.clubMembers[0].$key + '/clubs/' + clubId).update({
                messagesRead: 1
            });
            _this.angularfire.list('/accounts/' + __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser.uid + '/createdClubs/').push(clubId);
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
        selector: 'page-new-club',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-club/new-club.html"*/'<!--\n  Generated template for the NewClubPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>New Club</ion-title>\n    <!-- New Group can only be added when a group form is filled up, image is uploaded, and there\'s more than one member. -->\n    <ion-buttons end>\n      <button ion-button tappable (click)="done()" [disabled]="!clubForm.valid || club.img == \'\' || clubMembers.length <= 1">Done</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div *ngIf="club">\n    <ion-list>\n      <ion-list-header>\n        Club Info\n      </ion-list-header>\n      <form [formGroup]="clubForm">\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="{{club.img}}" *ngIf="club.img != \'\'" tappable (click)="setClubPhoto()" />\n            <img src="assets/img/club.png" *ngIf="club.img == \'\'" tappable (click)="setClubPhoto()" />\n          </ion-avatar>\n          <ion-input type="text" formControlName="name" placeholder="Name of Club"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label stacked>Description *</ion-label>\n          <ion-textarea rows="4" formControlName="description" placeholder="Describe this Club"></ion-textarea>\n        </ion-item>\n        <div *ngIf="clubMembers">\n        <ion-list-header>\n          Club Members ({{clubMembers.length}})\n        </ion-list-header>\n        \n        <ion-item  *ngFor="let member of clubMembers">\n          <ion-avatar item-left>\n            <img src="{{member.img}}"/>\n          </ion-avatar>\n          <h2>{{member.name}}</h2>\n          <ion-icon name="close-circle" item-right (click)="removeFromClub(member)"></ion-icon>\n        </ion-item>\n        </div>\n      </form>\n    </ion-list>\n\n    <ion-list-header>\n      Add New Members\n    </ion-list-header>\n    <div class="form">\n      <!-- No friends to create a group. -->\n      <div class="empty" *ngIf="friends && friends.length == 0">\n        <p>You have no friends right now to create a new club.</p>\n        <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search People</button>\n      </div>\n      <!-- Show friends to add/remove to group. -->\n      <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n        <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n        <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="addOrRemoveFromClub(friend)">\n          <ion-fab middle right>\n            <button ion-fab mini tappable (click)="addToClub(friend); $event.stopPropagation();" *ngIf="!inClub(friend)"><ion-icon name="md-add-circle" class="success"></ion-icon></button>\n            <button ion-fab mini tappable (click)="removeFromClub(friend); $event.stopPropagation();" *ngIf="inClub(friend)"><ion-icon name="md-close-circle" class="danger"></ion-icon></button>\n          </ion-fab>\n          <ion-avatar item-left>\n            <img src="{{friend.img}}">\n          </ion-avatar>\n          <h2>{{friend.name}}</h2>\n          <p>@{{friend.username}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-club/new-club.html"*/
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

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function ClubsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClubsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClubsPage');
    };
    return ClubsPage;
}());
ClubsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-clubs',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/clubs/clubs.html"*/'<!--\n  Generated template for the ClubsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>clubs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/clubs/clubs.html"*/,
=======
        selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\calendar\calendar.html"*/'<!-- source: http://www.codeexpertz.com/blog/mobile/ionic-2-calendar -->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{viewTitle}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="addEvent()">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n            <!--<button ion-button (click)="loadEvents()" style="font-size:16px">Load Events</button>-->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="has-header">\n\n\n\n    <ion-buttons class="bottom-buttons">\n\n        <button ion-button (click)="changeMode(\'month\')">M</button>\n\n        <button ion-button (click)="changeMode(\'week\')">W</button>\n\n        <button ion-button (click)="changeMode(\'day\')">D</button>\n\n        <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n    </ion-buttons>\n\n\n\n\n\n\n\n    <calendar [eventSource]="eventSource"\n\n              [calendarMode]="calendar.mode"\n\n              [currentDate]="calendar.currentDate"\n\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n\n              (onEventSelected)="onEventSelected($event)"\n\n              (onTitleChanged)="onViewTitleChanged($event)"\n\n              (onTimeSelected)="onTimeSelected($event)"\n\n              [weekviewNormalEventTemplate]="weekEvents"\n\n              step="15">\n\n    </calendar>\n\n\n\n    <ng-template #weekEvents let-displayEvent="displayEvent">\n\n      <div class="calendar-event-inner"       \n\n      [style.top]="(37*displayEvent.startOffset/hourParts)+\'px\'"\n\n      [style.left]="100/displayEvent.overlapNumber*displayEvent.position+\'%\'"\n\n      [style.width]="100+\'%\'"\n\n      [style.height]="37*(displayEvent.endIndex - displayEvent.startIndex) - 4 + \'px\'"\n\n      >{{displayEvent.event.title}}</div><!--[style.width]="100/displayEvent.overlapNumber+\'%\'" -->\n\n    </ng-template>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\calendar\calendar.html"*/,
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], ClubsPage);

//# sourceMappingURL=clubs.js.map

/***/ }),

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__club_info_club_info__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_modal_image_modal__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_contacts__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(266);
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
<<<<<<< HEAD
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
                                        text: 'cancel',
                                        handler: function () {
                                            console.log("canceled");
                                        }
                                    }, {
                                        text: 'Share',
                                        handler: function () {
                                            console.log("share");
                                            _this.message = locationMessage;
                                            _this.send();
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
        selector: 'page-club',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club/club.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title tappable (click)="clubInfo()">{{title}}</ion-title>\n    <!-- View Group Info -->\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="clubInfo()"><ion-icon name="ios-more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content has-footer>\n  <!-- Messages -->\n  <div class="messages">\n    <p class="center" *ngIf="startIndex > 0"><span tappable (click)="loadPreviousMessages()">Load previous messages</span></p>\n    <ion-row *ngFor="let message of messagesToShow">\n      <!--  System Message -->\n      <ion-col width-100 class="system" *ngIf="isSystemMessage(message)">\n        <p>\n          <ion-icon name="{{message.icon}}"></ion-icon>\n          {{message.message}}\n        </p>\n        <span>{{message.date | DateFormat}}</span>\n      </ion-col>\n      <!--  Message -->\n      <ion-col width-20 class="center" *ngIf="isSender(message) && !isSystemMessage(message)">\n        <img src="{{message.avatar}}" (load)="doScroll()"/>\n      </ion-col>\n      <ion-col width-10 *ngIf="!isSender(message) && !isSystemMessage(message)">\n      </ion-col>\n      <ion-col width-67 class="sender" *ngIf="isSender(message) && !isSystemMessage(message)">\n        <div class="left" *ngIf="message.type == \'text\'">\n          <p>{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()"/>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <ion-col width-67 *ngIf="!isSender(message) && !isSystemMessage(message)">\n        <div class="right" *ngIf="message.type == \'text\'">\n          <p>{{message.message}}</p>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n        <div class="left" *ngIf="message.type == \'image\'">\n          <img tappable (click)="enlargeImage(message.url)" src="{{message.url}}" (load)="doScroll()"/>\n          <span>{{message.date | DateFormat}}</span>\n        </div>\n      </ion-col>\n      <ion-col width-10 *ngIf="isSender(message) && !isSystemMessage(message)">\n      </ion-col>\n      <ion-col width-20 class="center" *ngIf="!isSender(message) && !isSystemMessage(message)">\n        <img src="{{message.avatar}}" tappable (click)="viewUser(message.sender)" (load)="doScroll()"/>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<!-- Message Box -->\n<ion-footer>\n  <ion-item class="bottom_bar">\n    <button item-left ion-button clear (click)="attach()"><ion-icon name="md-attach"></ion-icon></button>\n    <ion-textarea type="text" rows="0" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-textarea>\n    <!-- <ion-buttons item-right> -->\n    <button item-right ion-button clear (click)="takePhoto()"><ion-icon name="md-camera"></ion-icon></button>\n    <button item-right ion-button clear (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n    <!-- </ion-buttons> -->\n  </ion-item>\n  <!-- <div class="bottom_bar">\n    <ion-fab middle left>\n      <button ion-fab mini tappable (click)="sendPhoto()"><ion-icon name="md-camera"></ion-icon></button>\n    </ion-fab>\n    <ion-input type="text" placeholder="Type your message" [(ngModel)]="message" (focus)="scrollBottom()" (keypress)="onType($event.keyCode)"></ion-input>\n    <ion-fab middle right>\n      <button ion-fab mini tappable (click)="send()" [disabled]="!message"><ion-icon name="md-send"></ion-icon></button>\n    </ion-fab>\n  </div> -->\n</ion-footer>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club/club.html"*/
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

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_member_add_member__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_user_info__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(114);
=======
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="settings-content">\n\n  <div *ngIf="user">\n\n    <img src="assets/img/regLogo.png" id="bg">\n\n    <p></p>\n\n    <ion-list>\n\n      <ion-item (click)=\'gotoInfo()\'>\n\n        <ion-avatar item-left>\n\n          <img src=\'{{user.img}}\'>\n\n        </ion-avatar>\n\n        <h2>{{user.name}}</h2>\n\n        <p>{{user.description}}</p>\n\n        <ion-icon name="arrow-forward" item-right style="color:gray"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list full>\n\n      <ion-item>\n\n        <button (click)=\'gotoContacts()\' ion-button full>My Contacts</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button (click)=\'gotoHomePage()\' ion-button full>Sync with System Calendar</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button (click)=\'gotoHomePage()\' ion-button full>Invite Your Friends :)</button>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-toggle color="secondary" checked="false"></ion-toggle>\n\n          <ion-label>\n\n            <h6 class="titles">Allow others to view my calendar</h6>\n\n          </ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item>\n\n        <button (click)=\'doLogout()\' ion-button full>Log Out</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\settings\settings.html"*/,
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(93);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






<<<<<<< HEAD






var ClubInfoPage = (function () {
    // ClubInfoPage
    // This is the page where the user can view club information, change club information, add members, and leave/delete club.
    function ClubInfoPage(navCtrl, navParams, dataProvider, loadingProvider, modalCtrl, alertCtrl, alertProvider, angularfire, imageProvider, camera) {
=======
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams, formBuilder, authService, alertCtrl) {
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
    }
    ClubInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Initialize
        this.clubId = this.navParams.get('clubId');
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
                var index = -1;
                for (var i = 0; i < this.clubMembers.length; i++) {
                    if (this.clubMembers[i].$key == member.$key) {
                        index = i;
                    }
                }
                if (index > -1) {
                    this.clubMembers.splice(index, 1);
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                }
            ]
        }).present();
    };
<<<<<<< HEAD
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel'
                },
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
                            message: _this.user.name + ' has left this club.',
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
                }
            ]
        }).present();
    };
    // Delete club.
    ClubInfoPage.prototype.deleteClub = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this club?',
            buttons: [
                {
                    text: 'Cancel'
                },
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
                }
            ]
        }).present();
    };
    // Add members.
    ClubInfoPage.prototype.addMembers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_member_add_member__["a" /* AddMemberPage */], { clubId: this.clubId });
    };
    return ClubInfoPage;
}());
ClubInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-club-info',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club-info/club-info.html"*/'<!--\n  Generated template for the ClubInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Club Info</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- Club Info -->\n  <div *ngIf="club">\n    <ion-list>\n      <ion-list-header>\n        Club Info\n      </ion-list-header>\n      <ion-item no-lines>\n        <ion-avatar item-left>\n          <img src="{{club.img}}" tappable (click)="setPhoto()"/>\n        </ion-avatar>\n        <h2 tappable (click)="setName()">{{club.name}}</h2>\n        <p>Started {{club.dateCreated | DateFormat}}</p>\n      </ion-item>\n      <ion-list-header>\n        About\n      </ion-list-header>\n      <ion-item no-lines>\n        <p class="description" tappable (click)="setDescription()">{{club.description}}</p>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="clubMembers">\n      <ion-list-header>\n        Club Members ({{clubMembers.length}})\n      </ion-list-header>\n      <ion-item (click)="addMembers()">\n        <ion-icon name="add" item-left></ion-icon>\n        <h2>Add Members</h2>\n      </ion-item>\n      <ion-item *ngFor="let member of clubMembers" (click)="viewUser(member.$key)">\n        <ion-avatar item-left>\n          <img src="{{member.img}}" />\n        </ion-avatar>\n        <h2>{{member.name}}</h2>\n        <p>{{member.description}}</p>\n      </ion-item>\n    </ion-list>\n    <ion-list-header>\n        More\n    </ion-list-header>\n    <ion-list style="text-align: center;">  \n      <ion-item no-lines tappable (click)="leaveClub()" *ngIf="clubMembers && clubMembers.length > 1">\n        Leave Club\n      </ion-item>\n      <!-- When there\'s only one member left, allow deleting of club. -->\n      <ion-item no-lines tappable (click)="deleteClub()" *ngIf="clubMembers && clubMembers.length <= 1">\n        Delete Club\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/club-info/club-info.html"*/
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

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMemberPage; });
=======
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\login\login.html"*/'<!--\n\n  Generated template for the Login page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="login-content">\n\n  <!--<ion-row class="logo-row">-->\n\n    <!--<ion-col></ion-col>-->\n\n      <img src="assets/img/loginLogo1.jpg" id="bg">\n\n  <!--</ion-row>-->\n\n  <h6 style="text-align:center;color:black">Together, We make life simpler</h6>\n\n  <div class="login-box">\n\n    <form [formGroup]="loginForm">\n\n      <div class="login-form">\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              \n\n              <ion-item style="background-color:whitesmoke">\n\n                <ion-icon name="person" item-left></ion-icon>\n\n                <ion-input formControlName="email" type="text" placeholder="Email" name="email"></ion-input>\n\n              </ion-item>\n\n              <ion-item style="background-color:whitesmoke">\n\n                <ion-icon name="lock" item-left></ion-icon>\n\n                <ion-input formControlName="password" type="password" placeholder="Password" name="password"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <div class="login-button">\n\n          <button ion-button full color="white" (click)="login()" class="submit-btn" [disabled]="!loginForm.valid">Login</button>\n\n          <button ion-button full color="white" (click)="register()" class="submit-btn" style="background:lightsalmon; font-size: 0.9em;">Register</button>\n\n          <button ion-button outline color="white" (click)="forgetPassword()" class="forget-btn">Forget Password?</button>\n\n          <!--<button ion-button outline color="white" class="oauth-btn"   (click)="oauth()">OAuth2 Login</button>\n\n          <button ion-button outline color="white" (click)="gotoSearchPatientPage()">Search Patient</button>-->\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searcher; });
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
<<<<<<< HEAD
 * Generated class for the AddMemberPage page.
=======
 * Generated class for the Searcher page.
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
var AddMemberPage = (function () {
    function AddMemberPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddMemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMemberPage');
=======
var Searcher = (function () {
    function Searcher(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Searcher.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Searcher');
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
    };
    return AddMemberPage;
}());
AddMemberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-add-member',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/add-member/add-member.html"*/'<!--\n  Generated template for the AddMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-member</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/add-member/add-member.html"*/,
=======
        selector: 'page-searcher',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\searcher\searcher.html"*/'<!--\n\n  Generated template for the Searcher page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Wound you like to...</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class=\'content\' no-padding>\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="clan">\n\n      <ion-segment-button value="club">\n\n        Clubs\n\n      </ion-segment-button>\n\n      <ion-segment-button value="event">\n\n        Events\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="clan">\n\n    <ion-searchbar></ion-searchbar>\n\n    <ion-list no-border  *ngSwitchCase="\'club\'">\n\n\n\n      <ion-item>\n\n        Sports Club\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        Fight Club\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        Student Union\n\n      </ion-item> \n\n\n\n    </ion-list>\n\n\n\n    <ion-list no-border  *ngSwitchCase="\'event\'">\n\n\n\n      <ion-item>\n\n        Dialogue with leaders in Social Media\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        SMU Open House 2015\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        YIC final presentation invitation\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        SPF career talk\n\n      </ion-item>   \n\n\n\n      <ion-item>\n\n        Sea game volunteers\n\n      </ion-item>  \n\n\n\n      <ion-item>\n\n        Social Media Internship\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        Business Development Intern\n\n      </ion-item> \n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\searcher\searcher.html"*/,
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], AddMemberPage);

//# sourceMappingURL=add-member.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(26);
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
<<<<<<< HEAD
 * Generated class for the Calendar page.
=======
 * Generated class for the Tasks page.
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
var CalendarPage = (function () {
    function CalendarPage(navCtrl, modalCtrl, alertCtrl, afDB, ionicCalendar) {
=======
var Tasks = (function () {
    function Tasks(navCtrl, navParams, alertCtrl, dataProvider, afDB) {
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.ionicCalendar = ionicCalendar;
        this.date = new Date(Date.now());
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.uid = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.uid;
        this.events = afDB.list('/events', {
            query: {
                orderByChild: 'organizer',
                equalTo: this.uid
            }
        });
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("calendarPage");
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
                    "organizer": event.organizer
                };
                console.log(event);
                console.log("testEvent: " + testEvent);
                var testEvents = _this.eventSource;
                testEvents.push(testEvent);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = testEvents;
                });
            });
        });
    };
    CalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
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
    CalendarPage.prototype.addEvent = function () {
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        /**modal.onDidDismiss(data => {
            console.log(data);
            if (data) {
                let events = this.eventSource;

                let eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
        
                events.push(eventData);
                this.eventSource = [];
                setTimeout(() => {
                this.eventSource = events;
                });
            }
            console.log(this.eventSource);
        });**/
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.eventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_4_moment__(event.startTime).format('llll');
        var end = __WEBPACK_IMPORTED_MODULE_4_moment__(event.endTime).format('llll');
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
<<<<<<< HEAD
        selector: 'page-calendar',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/calendar/calendar.html"*/'<!-- source: http://www.codeexpertz.com/blog/mobile/ionic-2-calendar -->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addEvent()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n            <!--<button ion-button (click)="loadEvents()" style="font-size:16px">Load Events</button>-->\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n\n    <ion-buttons class="bottom-buttons">\n        <button ion-button (click)="changeMode(\'month\')">M</button>\n        <button ion-button (click)="changeMode(\'week\')">W</button>\n        <button ion-button (click)="changeMode(\'day\')">D</button>\n        <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n    </ion-buttons>\n\n    <calendar [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              (onTitleChanged)="onViewTitleChanged($event)"\n              (onTimeSelected)="onTimeSelected($event)"\n              [weekviewNormalEventTemplate]="weekEvents"\n              [monthviewEventDetailTemplate]="monthEventDetail"\n              step="15">\n    </calendar>\n\n    <ng-template #monthEventDetail let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n      <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n        <ion-item *ngFor="let event of selectedDate?.events" (click)="eventSelected(event)">\n          <span *ngIf="this.isSameDay(this.selectedDay,event.startTime)" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'HH:mm\'}} - 24:00</span>\n          <span *ngIf="this.isSameDay(this.selectedDay,event.endTime)" class="monthview-eventdetail-timecolumn">00:00 - {{event.endTime|date: \'HH:mm\'}}</span>\n          <span *ngIf="this.dateInRange(this.selectedDay,event.startTime,event.endTime)" class="monthview-eventdetail-timecolumn">All day</span>\n          <span class="event-detail"> | {{event.title}}</span>\n        </ion-item>\n        <ion-item *ngIf="selectedDate?.events.length==0">\n          <div class="no-events-label">{{noEventsLabel}}</div>\n        </ion-item>\n      </ion-list>\n    </ng-template>\n    \n    <ng-template #weekEvents let-displayEvent="displayEvent">\n      <div class="calendar-event-inner"       \n      [style.top]="(37*displayEvent.startOffset/hourParts)+\'px\'"\n      [style.left]="100/displayEvent.overlapNumber*displayEvent.position+\'%\'"\n      [style.width]="100+\'%\'"\n      [style.height]="37*(displayEvent.endIndex - displayEvent.startIndex) - 4 + \'px\'">\n        {{displayEvent.event.title}}\n      </div>\n    </ng-template>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/calendar/calendar.html"*/,
=======
        selector: 'page-tasks',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tasks\tasks.html"*/'<!--\n\n  Generated template for the Tasks page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>New Task</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <ion-list> \n\n    <ion-item>\n\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n\n      <ion-input [(ngModel)]="name" placeholder="Title" type="text"></ion-input>\n\n    </ion-item>      \n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n\n      <ion-label>Due</ion-label>\n\n      <ion-datetime [(ngModel)]="due" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="DDD DD MMMM YYYY HH:mm"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>\n\n      <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>\n\n      <ion-input [(ngModel)]="note" placeholder="Add Note" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-toggle [(ngModel)]="reminder" color="secondary" checked="false" style="margin-left:-10px"></ion-toggle>\n\n      <ion-label>\n\n        <h2>Reminder</h2>\n\n      </ion-label>\n\n      <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n\n      <ion-label>\n\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n\n      </ion-label>\n\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col text-right>\n\n      <button ion-button round end color="secondary" (click)="save()">Save</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\tasks\tasks.html"*/,
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__searcher_searcher__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tdlist_tdlist__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conversation_conversation__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(26);
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Tabs */])
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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__information_information__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__ = __webpack_require__(249);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







<<<<<<< HEAD

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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="settings-content">\n  <div *ngIf="user">\n    <img src="assets/img/regLogo.png" id="bg">\n    <p></p>\n    <ion-list>\n      <ion-item (click)=\'gotoInfo()\'>\n        <ion-avatar item-left>\n          <img src=\'{{user.img}}\'>\n        </ion-avatar>\n        <h2>{{user.name}}</h2>\n        <p>{{user.description}}</p>\n        <ion-icon name="arrow-forward" item-right style="color:gray"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <ion-list full>\n      <ion-item>\n        <button (click)=\'gotoContacts()\' ion-button full>My Contacts</button>\n      </ion-item>\n      <ion-item>\n        <button (click)=\'gotoHomePage()\' ion-button full>Sync with System Calendar</button>\n      </ion-item>\n      <ion-item>\n        <button (click)=\'gotoHomePage()\' ion-button full>Invite Your Friends :)</button>\n      </ion-item>\n      <ion-item>\n          <ion-toggle color="secondary" checked="false"></ion-toggle>\n          <ion-label>\n            <h6 class="titles">Allow others to view my calendar</h6>\n          </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <button (click)=\'doLogout()\' ion-button full>Log Out</button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/settings/settings.html"*/,
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

/***/ 151:
=======
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verify_verify__ = __webpack_require__(250);


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

/***/ 199:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(93);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(475);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
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

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_club_new_club__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clubs_clubs__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__club_club__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(28);
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
    }
    Searcher.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchClub = "";
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
        selector: 'page-searcher',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/searcher/searcher.html"*/'<!--\n  Generated template for the Searcher page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wound you like to...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=\'content\' padding>\n  <div padding>\n    <ion-segment [(ngModel)]="clan">\n      <ion-segment-button value="club">\n        Clubs\n      </ion-segment-button>\n      <ion-segment-button value="event">\n        Events\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="clan">\n    <div no-border  *ngSwitchCase="\'club\'">\n      <div class="empty-list" *ngIf="clubs && clubs.length <= 0">\n        <h1><ion-icon name="md-chatbubbles"></ion-icon></h1>\n        <p>You haven\'t joined any club yet.</p>\n        <button ion-button icon-left tappable (click)="newClub()"><ion-icon name="md-add"></ion-icon>Create A New Club</button>\n        <button ion-button icon-left tappable (click)="joinClub()"><ion-icon name="md-add"></ion-icon>Join A Club</button>\n      </div>\n      \n    \n      <ion-list *ngIf="clubs && clubs.length > 0">\n        <button ion-button full tappable (click)="newClub()">Create A Club</button> \n        <button ion-button full tappable (click)="joinClub()">Join A Club</button>                \n        <ion-searchbar [(ngModel)]="searchClub" placeholder="Search for club" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n        <ion-item *ngFor="let club of clubs | clubFilter: searchClub">\n          <ion-col width-50 (click)="viewClub(club.$key)" tappable>\n            <div [ngClass]=hasUnreadMessages(club)>\n              <img src="{{club.img}}" />\n              <ion-badge color="danger" *ngIf="club.unreadMessagesCount > 0">{{club.unreadMessagesCount}}</ion-badge>\n              <p>{{club.name}}</p>\n              <span>{{club.date | DateFormat}}</span>\n            </div>\n          </ion-col>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div no-border  *ngSwitchCase="\'event\'">\n      \n      <ion-item>\n        Dialogue with leaders in Social Media\n      </ion-item>\n\n      <ion-item>\n        SMU Open House 2015\n      </ion-item>\n\n      <ion-item>\n        YIC final presentation invitation\n      </ion-item>\n\n      <ion-item>\n        SPF career talk\n      </ion-item>   \n\n      <ion-item>\n        Sea game volunteers\n      </ion-item>  \n\n      <ion-item>\n        Social Media Internship\n      </ion-item>\n\n      <ion-item>\n        Business Development Intern\n      </ion-item> \n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/searcher/searcher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */],
        __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], Searcher);

//# sourceMappingURL=searcher.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
=======
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






<<<<<<< HEAD
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
=======

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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
            }
        });
    };
<<<<<<< HEAD
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
        selector: 'page-tasks',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tasks/tasks.html"*/'<!--\n  Generated template for the Tasks page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>New Task</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="content">\n  <ion-list> \n    <ion-item>\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n      <ion-input [(ngModel)]="name" placeholder="Title" type="text"></ion-input>\n    </ion-item>      \n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n      <ion-label>Due</ion-label>\n      <ion-datetime [(ngModel)]="due" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="DDD DD MMMM YYYY HH:mm"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>\n      <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>\n      <ion-input [(ngModel)]="note" placeholder="Add Note" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="reminder" color="secondary" checked="false" style="margin-left:-10px"></ion-toggle>\n      <ion-label>\n        <h2>Reminder</h2>\n      </ion-label>\n      <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n      <ion-label>\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n      </ion-label>\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col text-right>\n      <button ion-button round end color="secondary" (click)="save()">Save</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/tasks/tasks.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], Tasks);

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
=======
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(85);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








<<<<<<< HEAD
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, loading, alert, zone) {
=======
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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_verify_verify__ = __webpack_require__(251);


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

/***/ 200:
=======
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(user.$key);
                    }
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Search People</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No other users to send friend request right now. -->\n\n  <div class="empty-list" *ngIf="accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))">\n\n    <h1><ion-icon name="md-search"></ion-icon></h1>\n\n    <p>We can\'t find new users right now</p>\n\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n\n  </div>\n\n  <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n\n  <ion-list class="avatar-list" *ngIf="accounts && accounts.length > 0">\n\n    <ion-searchbar *ngIf="accounts.length != excludedIds.length" [(ngModel)]="searchUser" placeholder="Search for name or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let account of accounts | searchFilter: [excludedIds, searchUser]" no-lines tappable (click)="viewUser(account.$key)">\n\n      <ion-fab middle right>\n\n        <!-- Show appropriate buttons depending on the status of this user in relation to the current user. -->\n\n        <!-- // Returns:\n\n        // 0 when user can be requested as friend.\n\n        // 1 when a friend request was already sent to this user.\n\n        // 2 when this user has a pending friend request. -->\n\n        <button ion-fab mini tappable (click)="sendFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 0">\n\n          <ion-icon name="md-add-circle" class="success"></ion-icon>\n\n        </button>\n\n        <button ion-fab mini tappable (click)="cancelFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 1">\n\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n\n        </button>\n\n        <button ion-fab mini tappable (click)="acceptFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 2">\n\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{account.img}}">\n\n      </ion-avatar>\n\n      <h2>{{account.name}}</h2>\n\n      <p>@{{account.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation__ = __webpack_require__(93);
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
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="reg-content">\n\n  <img src="assets/img/regLogo.png" id="bg">\n\n  <div class="reg-box">\n\n    <form [formGroup]="registerForm">\n\n      <h2 style="margin-bottom:15px">Registration</h2>\n\n      <ion-input formControlName="email" type="text" placeholder="Email" name="email"></ion-input>\n\n      <ion-input formControlName="password" type="text" placeholder="Password" name="password"></ion-input>    \n\n      <button ion-button full (click)="doRegister()" class="reg-btn">Register!</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 247:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(476);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(114);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
        }).catch(function (error) {
            _this.loadingProvider.dismiss();
        });
=======
        }
        console.log('ionViewDidLoad InformationPage');
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(202);
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
=======
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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(85);
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
<<<<<<< HEAD
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(user.$key);
                    }
=======
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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
=======
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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
=======
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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
                }
            ]
        }).present();
    };
<<<<<<< HEAD
    // View user.
    SearchPage.prototype.viewUser = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_info_user_info__["a" /* UserInfoPage */], { userId: userId });
=======
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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
    };
    return SearchPage;
}());
<<<<<<< HEAD
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Search People</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No other users to send friend request right now. -->\n  <div class="empty-list" *ngIf="accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))">\n    <h1><ion-icon name="md-search"></ion-icon></h1>\n    <p>We can\'t find new users right now</p>\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n  <ion-list class="avatar-list" *ngIf="accounts && accounts.length > 0">\n    <ion-searchbar *ngIf="accounts.length != excludedIds.length" [(ngModel)]="searchUser" placeholder="Search for name or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let account of accounts | searchFilter: [excludedIds, searchUser]" no-lines tappable (click)="viewUser(account.$key)">\n      <ion-fab middle right>\n        <!-- Show appropriate buttons depending on the status of this user in relation to the current user. -->\n        <!-- // Returns:\n        // 0 when user can be requested as friend.\n        // 1 when a friend request was already sent to this user.\n        // 2 when this user has a pending friend request. -->\n        <button ion-fab mini tappable (click)="sendFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 0">\n          <ion-icon name="md-add-circle" class="success"></ion-icon>\n        </button>\n        <button ion-fab mini tappable (click)="cancelFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 1">\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n        </button>\n        <button ion-fab mini tappable (click)="acceptFriendRequest(account); $event.stopPropagation();" *ngIf="getStatus(account) == 2">\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{account.img}}">\n      </ion-avatar>\n      <h2>{{account.name}}</h2>\n      <p>@{{account.username}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 247:
=======
InformationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-information',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\information\information.html"*/'<!--\n\n  Generated template for the InformationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>My Account</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <div *ngIf="user">\n\n    <ion-list>\n\n      <!--<ion-list-header>\n\n        My Account\n\n      </ion-list-header>-->\n\n      <ion-item no-lines class="head">\n\n        <p></p><p></p><p></p><p></p><p></p>\n\n        <div class="tx">\n\n          <ion-img class="img" src="{{user.img}}"></ion-img>\n\n        </div>\n\n        <p></p>\n\n        <h2 style="text-align:center;font-size:22px;color:white" tappable (click)="setName()">{{user.name}} </h2>\n\n        <p></p><p></p><p></p>\n\n      </ion-item>\n\n      <ion-list-header>\n\n        Status\n\n      </ion-list-header>\n\n      <ion-item no-lines>\n\n        <p style="font-size:18px;" tappable (click)="setDescription()" class="description">{{user.description}}</p>\n\n      </ion-item>\n\n      <ion-list-header>\n\n        More\n\n      </ion-list-header>\n\n      <ion-item class="opt" tappable (click)="setEmail()">\n\n        Change Email Address\n\n      </ion-item>\n\n      <ion-item class="opt" tappable (click)="setPassword()" *ngIf="user && this.provider == \'Firebase\'">\n\n        Change Password\n\n      </ion-item>\n\n      <ion-item class="opt" tappable (click)="deleteAccount()">\n\n        Delete Account\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\information\information.html"*/,
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

/***/ 248:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(32);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requests_requests__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_user_info__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD



/**
 * Generated class for the RegisterPage page.
=======







/**
 * Generated class for the ContactsPage page.
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authService, formBuilder) {
=======
var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams, app, loadingProvider, dataProvider) {
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
        selector: 'page-register',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="reg-content">\n  <img src="assets/img/regLogo.png" id="bg">\n  <div class="reg-box">\n    <form [formGroup]="registerForm">\n      <h2 style="margin-bottom:15px">Registration</h2>\n      <ion-input formControlName="email" type="text" placeholder="Email" name="email"></ion-input>\n      <ion-input formControlName="password" type="text" placeholder="Password" name="password"></ion-input>    \n      <button ion-button full (click)="doRegister()" class="reg-btn">Register!</button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/register/register.html"*/,
=======
        selector: 'page-contacts',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\contacts\contacts.html"*/'<!--\n\n  Generated template for the ContactsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button icon-only tappable (click)="manageRequests()"><ion-icon name="md-filing"></ion-icon><ion-badge color="danger" *ngIf="friendRequests">{{friendRequests.length}}</ion-badge></button>\n\n    </ion-buttons>\n\n    <ion-title>Friends</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friends to show -->\n\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n\n    <h1><ion-icon name="contacts"></ion-icon></h1>\n\n    <p>You don\'t have new friend yet</p>\n\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="search"></ion-icon>Search People</button>\n\n  </div>\n\n  <!-- Show list of friends -->\n\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n\n    <ion-searchbar [(ngModel)]="friendSearch" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines (click)="message(friend.$key); $event.stopPropagation();">\n\n      <ion-avatar item-left>\n\n        <img src="{{friend.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friend.name}}</h2>\n\n      <p>{{friend.description}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\contacts\contacts.html"*/,
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(114);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_chat_new_chat__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
        selector: 'page-information',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/information/information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="content">\n  <div *ngIf="user">\n    <ion-list>\n      <!--<ion-list-header>\n        My Account\n      </ion-list-header>-->\n      <ion-item no-lines class="head">\n        <p></p><p></p><p></p><p></p><p></p>\n        <div class="tx">\n          <ion-img class="img" src="{{user.img}}" tappable (click)="setPhoto()"></ion-img>\n        </div>\n        <p></p>\n        <h2 style="text-align:center;font-size:22px;color:white" tappable (click)="setName()">{{user.name}} </h2>\n        <p></p><p></p><p></p>\n      </ion-item>\n      <ion-list-header>\n        Status\n      </ion-list-header>\n      <ion-item no-lines>\n        <p style="font-size:18px;" tappable (click)="setDescription()" class="description">{{user.description}}</p>\n      </ion-item>\n      <ion-list-header>\n        More\n      </ion-list-header>\n      <ion-item class="opt" tappable (click)="setEmail()">\n        Change Email Address\n      </ion-item>\n      <ion-item class="opt" tappable (click)="setPassword()" *ngIf="user && this.provider == \'Firebase\'">\n        Change Password\n      </ion-item>\n      <ion-item class="opt" tappable (click)="deleteAccount()">\n        Delete Account\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/information/information.html"*/,
=======
        selector: 'page-conversation',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\conversation\conversation.html"*/'<!--\n\n  Generated template for the ConversationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Conversation</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only tappable (click)="newMessage()"><ion-icon name="ios-create" class="create"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No conversations to show -->\n\n  <div class="empty-list" *ngIf="conversations && conversations.length <= 0">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/huaji.jpg"/>\n\n      </ion-avatar>\n\n      <h2>No conversations yet.</h2>\n\n      <p>Tap \'+\' to start a new conversation!</p>\n\n    </ion-item>\n\n  </div>\n\n  <!-- Show conversations -->\n\n  <ion-list class="avatar-list" *ngIf="conversations && conversations.length > 0">\n\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let conversation of conversations | conversationFilter:searchFriend" tappable (click)="message(conversation.$key)">\n\n      <ion-avatar item-left *ngIf="conversation.friend">\n\n        <img src="{{conversation.friend.img}}">\n\n      </ion-avatar>\n\n      <div [ngClass]=hasUnreadMessages(conversation)>\n\n        <h2 *ngIf="conversation.friend">{{conversation.friend.name}}</h2>\n\n        <ion-badge color="danger" *ngIf="conversation.unreadMessagesCount > 0">{{conversation.unreadMessagesCount}}</ion-badge>\n\n        <p>{{conversation.message}}</p>\n\n        <span>{{conversation.date | DateFormat}}</span>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\conversation\conversation.html"*/,
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requests_requests__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_user_info__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(26);
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
    return ContactsPage;
}());
ContactsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contacts',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/contacts/contacts.html"*/'<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button icon-only tappable (click)="manageRequests()"><ion-icon name="md-filing"></ion-icon><ion-badge color="danger" *ngIf="friendRequests">{{friendRequests.length}}</ion-badge></button>\n    </ion-buttons>\n    <ion-title>Friends</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No friends to show -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <h1><ion-icon name="contacts"></ion-icon></h1>\n    <p>You don\'t have new friend yet</p>\n    <button ion-button icon-left tappable (click)="searchPeople()"><ion-icon name="search"></ion-icon>Search People</button>\n  </div>\n  <!-- Show list of friends -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="friendSearch" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines (click)="message(friend.$key); $event.stopPropagation();">\n      <ion-avatar item-left>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>{{friend.description}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/contacts/contacts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */]])
], ContactsPage);

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_chat_new_chat__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
    // New conversation.
    ConversationPage.prototype.newMessage = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__new_chat_new_chat__["a" /* NewChatPage */]);
=======
    return VerifyPage;
}());
VerifyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-verify',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\verify\verify.html"*/'<!--\n\n  Generated template for the VerifyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class="veri-content">\n\n  <img src="assets/img/regLogo.png" id="bg">\n\n  <div *ngIf="user" class="page">\n\n    <h4 class="title">Verify your account</h4>\n\n    <p>Please verify <span>{{user.email}}</span> to continue</p>\n\n    <!-- Verification Menu -->\n\n    <ion-row style="text-align: center;">\n\n      <ion-col>\n\n        <ion-icon name="refresh" tappable (click)="sendEmailVerification()"></ion-icon>\n\n        <p>Resend</p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon name="mail" tappable (click)="setEmail()"></ion-icon>\n\n        <p>Update Email</p>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon name="log-out" tappable (click)="logout()"></ion-icon>\n\n        <p>Cancel</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\verify\verify.html"*/,
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

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doodle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        selector: 'page-doodle',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\doodle\doodle.html"*/'<!--\n\n  Generated template for the Tasks page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Poll</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <ion-list> \n\n    <ion-item>\n\n      <ion-icon name="bookmark" item-start style="color:orange"></ion-icon>\n\n      <ion-input [(ngModel)]="name" placeholder="Title" type="text"></ion-input>\n\n    </ion-item>      \n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:Salmon"></ion-icon>\n\n      <ion-label>Due</ion-label>\n\n      <ion-datetime [(ngModel)]="due" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="DDD DD MMMM YYYY HH:mm"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>\n\n      <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>\n\n      <ion-input [(ngModel)]="note" placeholder="Add Note" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-toggle [(ngModel)]="reminder" color="secondary" checked="false" style="margin-left:-10px"></ion-toggle>\n\n      <ion-label>\n\n        <h2>Reminder</h2>\n\n      </ion-label>\n\n      <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="alert" item-start style="color:red;"></ion-icon>\n\n      <ion-label>\n\n        <h2 class="titles" style="background-color:red;padding: 5px">Urgency</h2>\n\n      </ion-label>\n\n      <ion-range [(ngModel)]="urgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col text-right>\n\n      <button ion-button round end color="secondary" (click)="save()">Save</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button round end color="light" (click)="cancel()">Cancel</button>\n\n    </ion-col>\n\n    <ion-col text-left>\n\n      <button ion-button round end color="light" (click)="url()">URL</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\doodle\doodle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], Doodle);

//# sourceMappingURL=doodle.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tdlist_tdlist__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__doodle_doodle__ = __webpack_require__(251);
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
        selector: 'page-testing',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\testing\testing.html"*/'<!--\n\n  Generated template for the Testing page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <div class="text-center">\n\n        Testing\n\n      </div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button [navPush]="loginPage" ion-button full>Login</button>\n\n    <button [navPush]="calendarPage" ion-button full>Calendar</button>\n\n    <button [navPush]="taskManagerPage" ion-button full>Task Manager</button>\n\n    <button [navPush]="eventSearchPage" ion-button full>Event Searcher</button>\n\n    <button [navPush]="settingsPage" ion-button full>Settings</button>\n\n    <button [navPush]="tdListPage" ion-button full>To-do List</button>  \n\n    <button [navPush]="tabsPage" ion-button full>Tabs</button>\n\n    <button [navPush]="doodle" ion-button full>Doodle</button>    \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\testing\testing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */]])
], Testing);

//# sourceMappingURL=testing.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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

/***/ 262:
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
webpackEmptyAsyncContext.id = 262;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		1169,
		16
	],
	"../pages/chat/chat.module": [
		1174,
		15
	],
	"../pages/contacts/contacts.module": [
		1175,
		14
	],
	"../pages/conversation/conversation.module": [
		1180,
		13
	],
	"../pages/doodle/doodle.module": [
		1183,
		12
	],
	"../pages/event-modal/event-modal.module": [
		1185,
		0
	],
	"../pages/information/information.module": [
		1172,
		11
	],
	"../pages/login/login.module": [
		1171,
		10
	],
	"../pages/register/register.module": [
		1170,
		9
	],
	"../pages/searcher/searcher.module": [
		1177,
		8
	],
	"../pages/settings/settings.module": [
		1176,
		7
	],
	"../pages/tabs/tabs.module": [
		1181,
		6
	],
	"../pages/tasks/tasks.module": [
		1178,
		5
	],
	"../pages/tdlist/tdlist.module": [
		1179,
		4
	],
	"../pages/testing/testing.module": [
		1184,
		3
	],
	"../pages/user-info/user-info.module": [
		1173,
		2
	],
	"../pages/verify/verify.module": [
		1182,
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
webpackAsyncContext.id = 310;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(27);
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

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        selector: 'page-image-modal',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\image-modal\image-modal.html"*/'<ion-content>\n\n  <div class="content" (click)="close()" tappable>\n\n    <img src={{image}}/>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\image-modal\image-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], ImageModalPage);

//# sourceMappingURL=image-modal.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(85);
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
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
        selector: 'page-requests',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\requests\requests.html"*/'<!--\n\n  Generated template for the RequestsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button ion-button tappable (click)="back()">Back</button>\n\n    </ion-buttons>\n\n    <ion-title>Friend Requests</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friend requests sent or received. -->\n\n  <div class="empty-list" *ngIf="(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)">\n\n    <h1><ion-icon name="md-filing"></ion-icon></h1>\n\n    <p>No New Requests</p>\n\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n\n  </div>\n\n  <!-- Show friend requests received. -->\n\n  <ion-list class="avatar-list" *ngIf="friendRequests && friendRequests.length > 0">\n\n    <ion-item *ngFor="let friendRequest of friendRequests" no-lines tappable (click)="viewUser(friendRequest.$key)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="acceptFriendRequest(friendRequest); $event.stopPropagation();">\n\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{friendRequest.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friendRequest.name}}</h2>\n\n      <p>has sent you a friend request.</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Show friend requests sent. -->\n\n  <ion-list class="avatar-list" *ngIf="requestsSent && requestsSent.length > 0">\n\n    <ion-item *ngFor="let requestSent of requestsSent" no-lines tappable (click)="viewUser(requestSent.$key)">\n\n      <ion-fab middle right>\n\n        <button ion-fab mini tappable (click)="cancelFriendRequest(requestSent); $event.stopPropagation();">\n\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-avatar item-left>\n\n        <img src="{{requestSent.img}}">\n\n      </ion-avatar>\n\n      <h2>{{requestSent.name}}</h2>\n\n      <p>friend request sent.</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\requests\requests.html"*/
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_logout__ = __webpack_require__(94);
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
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
        selector: 'page-conversation',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/conversation/conversation.html"*/'<!--\n  Generated template for the ConversationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Conversation</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only tappable (click)="newMessage()"><ion-icon name="ios-create"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No conversations to show -->\n  <div class="empty-list" *ngIf="conversations && conversations.length <= 0">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/huaji.jpg"/>\n      </ion-avatar>\n      <h2>No conversations yet.</h2>\n      <p>Tap \'+\' to start a new conversation!</p>\n    </ion-item>\n  </div>\n  <!-- Show conversations -->\n  <ion-list class="avatar-list" *ngIf="conversations && conversations.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let conversation of conversations | conversationFilter:searchFriend" no-lines tappable (click)="message(conversation.$key)">\n      <ion-avatar item-left *ngIf="conversation.friend">\n        <img src="{{conversation.friend.img}}">\n      </ion-avatar>\n      <div [ngClass]=hasUnreadMessages(conversation)>\n        <h2 *ngIf="conversation.friend">{{conversation.friend.name}}</h2>\n        <ion-badge color="danger" *ngIf="conversation.unreadMessagesCount > 0">{{conversation.unreadMessagesCount}}</ion-badge>\n        <p>{{conversation.message}}</p>\n        <span>{{conversation.date | DateFormat}}</span>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/conversation/conversation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]])
], ConversationPage);

//# sourceMappingURL=conversation.js.map

/***/ }),

<<<<<<< HEAD
/***/ 251:
=======
/***/ 520:
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(26);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






<<<<<<< HEAD



/**
 * Generated class for the VerifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VerifyPage = (function () {
    function VerifyPage(navCtrl, navParams, app, logoutProvider, alertProvider, loadingProvider, alertCtrl, angularfire) {
=======
var NewChatPage = (function () {
    // NewMessagePage
    // This is the page where the user are asked to select a friend whom they want to start a conversation with.
    function NewChatPage(navCtrl, navParams, app, dataProvider, loadingProvider) {
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD
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

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searcher_searcher__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_calendar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tdlist_tdlist__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(49);
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
        selector: 'page-testing',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/testing/testing.html"*/'<!--\n  Generated template for the Testing page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <div class="text-center">\n        Testing\n      </div>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <button [navPush]="loginPage" ion-button full>Login</button>\n    <button [navPush]="calendarPage" ion-button full>Calendar</button>\n    <button [navPush]="taskManagerPage" ion-button full>Task Manager</button>\n    <button [navPush]="eventSearchPage" ion-button full>Event Searcher</button>\n    <button [navPush]="settingsPage" ion-button full>Settings</button>\n    <button [navPush]="tdListPage" ion-button full>To-do List</button>  \n    <button [navPush]="tabsPage" ion-button full>Tabs</button>    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/testing/testing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */]])
], Testing);

//# sourceMappingURL=testing.js.map

/***/ }),

/***/ 262:
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
webpackEmptyAsyncContext.id = 262;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-member/add-member.module": [
		1198,
		2
	],
	"../pages/calendar/calendar.module": [
		1170,
		36
	],
	"../pages/chat/chat.module": [
		1175,
		4
	],
	"../pages/clubs/clubs.module": [
		1190,
		1
	],
	"../pages/contacts/contacts.module": [
		1176,
		35
	],
	"../pages/conversation/conversation.module": [
		1181,
		6
	],
	"../pages/event-modal/event-modal.module": [
		1185,
		5
	],
	"../pages/information/information.module": [
		1173,
		13
	],
	"../pages/login/login.module": [
		1172,
		12
	],
	"../pages/register/register.module": [
		1171,
		11
	],
	"../pages/search-people/search-people.module": [
		1194,
		0
	],
	"../pages/searcher/searcher.module": [
		1178,
		9
	],
	"../pages/settings/settings.module": [
		1177,
		15
	],
	"../pages/tabs/tabs.module": [
		1182,
		14
	],
	"../pages/tasks/tasks.module": [
		1179,
		10
	],
	"../pages/tdlist/tdlist.module": [
		1180,
		7
	],
	"../pages/testing/testing.module": [
		1184,
		3
	],
	"../pages/verify/verify.module": [
		1183,
		8
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
webpackAsyncContext.id = 310;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(26);
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


=======
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
        selector: 'page-new-chat',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\new-chat\new-chat.html"*/'<!--\n\n  Generated template for the NewChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons>\n\n      <button class="back" ion-button tappable (click)="back()"><ion-icon name="arrow-back"></ion-icon>Back</button>\n\n    </ion-buttons>\n\n    <ion-title>New Chat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- No friends yet to start a conversation with -->\n\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n\n    <button ion-button block icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search for your friends here</button>\n\n  </div>\n\n  <!-- Show friends to start a conversation with -->\n\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" tappable (click)="message(friend.$key)">\n\n      <ion-avatar item-left>\n\n        <img src="{{friend.img}}">\n\n      </ion-avatar>\n\n      <h2>{{friend.name}}</h2>\n\n      <p>@{{friend.username}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\new-chat\new-chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
], NewChatPage);

//# sourceMappingURL=new-chat.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(734);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2

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

<<<<<<< HEAD
/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
=======
/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_cloud_angular__ = __webpack_require__(1079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_calendar__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_testing_testing__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tasks_tasks__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_searcher_searcher__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_calendar_calendar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tdlist_tdlist__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_verify_verify__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_conversation_conversation__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_new_chat_new_chat__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_information_information__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_contacts_contacts__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_requests_requests__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_user_info_user_info__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_image_modal_image_modal__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_doodle_doodle__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_friend__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_search__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_conversation__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_date__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pipes_group__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_auth_service_auth_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_loading_loading__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_auth_service_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_firebase__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_firebase__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_image_image__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_firebase_firebase__ = __webpack_require__(200);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_info_user_info__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








<<<<<<< HEAD
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
=======







































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
__WEBPACK_IMPORTED_MODULE_47_firebase__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(user.$key);
                    }
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
<<<<<<< HEAD
RequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-requests',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/requests/requests.html"*/'<!--\n  Generated template for the RequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>Friend Requests</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No friend requests sent or received. -->\n  <div class="empty-list" *ngIf="(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)">\n    <h1><ion-icon name="md-filing"></ion-icon></h1>\n    <p>No New Requests</p>\n    <button ion-button icon-left tappable (click)="back()"><ion-icon name="md-arrow-round-back"></ion-icon>Go Back</button>\n  </div>\n  <!-- Show friend requests received. -->\n  <ion-list class="avatar-list" *ngIf="friendRequests && friendRequests.length > 0">\n    <ion-item *ngFor="let friendRequest of friendRequests" no-lines tappable (click)="viewUser(friendRequest.$key)">\n      <ion-fab middle right>\n        <button ion-fab mini tappable (click)="acceptFriendRequest(friendRequest); $event.stopPropagation();">\n          <ion-icon name="md-checkmark-circle" class="success"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{friendRequest.img}}">\n      </ion-avatar>\n      <h2>{{friendRequest.name}}</h2>\n      <p>has sent you a friend request.</p>\n    </ion-item>\n  </ion-list>\n  <!-- Show friend requests sent. -->\n  <ion-list class="avatar-list" *ngIf="requestsSent && requestsSent.length > 0">\n    <ion-item *ngFor="let requestSent of requestsSent" no-lines tappable (click)="viewUser(requestSent.$key)">\n      <ion-fab middle right>\n        <button ion-fab mini tappable (click)="cancelFriendRequest(requestSent); $event.stopPropagation();">\n          <ion-icon name="md-close-circle" class="danger"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-left>\n        <img src="{{requestSent.img}}">\n      </ion-avatar>\n      <h2>{{requestSent.name}}</h2>\n      <p>friend request sent.</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/requests/requests.html"*/
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
=======
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_22__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_23__pages_calendar_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tdlist_tdlist__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_verify_verify__["a" /* VerifyPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_new_chat_new_chat__["a" /* NewChatPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_contacts_contacts__["a" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_user_info_user_info__["a" /* UserInfoPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            __WEBPACK_IMPORTED_MODULE_38__pipes_friend__["a" /* FriendPipe */],
            __WEBPACK_IMPORTED_MODULE_40__pipes_conversation__["a" /* ConversationPipe */],
            __WEBPACK_IMPORTED_MODULE_39__pipes_search__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_41__pipes_date__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_42__pipes_group__["a" /* GroupPipe */],
            __WEBPACK_IMPORTED_MODULE_37__pages_doodle_doodle__["a" /* Doodle */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/calendar/calendar.module#CalendarModule', name: 'Calendar', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-info/user-info.module#UserInfoPageModule', name: 'UserInfoPage', segment: 'user-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
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
            __WEBPACK_IMPORTED_MODULE_12__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_13_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, 'Clandar'),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_testing_testing__["a" /* Testing */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tasks_tasks__["a" /* Tasks */],
            __WEBPACK_IMPORTED_MODULE_22__pages_searcher_searcher__["a" /* Searcher */],
            __WEBPACK_IMPORTED_MODULE_23__pages_calendar_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tdlist_tdlist__["b" /* TdlistPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tdlist_tdlist__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_verify_verify__["a" /* VerifyPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_conversation_conversation__["a" /* ConversationPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_new_chat_new_chat__["a" /* NewChatPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_information_information__["a" /* InformationPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_contacts_contacts__["a" /* ContactsPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_user_info_user_info__["a" /* UserInfoPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_image_modal_image_modal__["a" /* ImageModalPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_doodle_doodle__["a" /* Doodle */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_43__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_44__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_45__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_46__providers_auth_service_logout__["a" /* LogoutProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_49__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_50__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_48__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_51__providers_firebase_firebase__["a" /* FirebaseProvider */]
        ]
    })
], AppModule);
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2

//# sourceMappingURL=requests.js.map

/***/ }),

<<<<<<< HEAD
/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_logout__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
=======
/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 311,
	"./af.js": 311,
	"./ar": 312,
	"./ar-dz": 313,
	"./ar-dz.js": 313,
	"./ar-kw": 314,
	"./ar-kw.js": 314,
	"./ar-ly": 315,
	"./ar-ly.js": 315,
	"./ar-ma": 316,
	"./ar-ma.js": 316,
	"./ar-sa": 317,
	"./ar-sa.js": 317,
	"./ar-tn": 318,
	"./ar-tn.js": 318,
	"./ar.js": 312,
	"./az": 319,
	"./az.js": 319,
	"./be": 320,
	"./be.js": 320,
	"./bg": 321,
	"./bg.js": 321,
	"./bn": 322,
	"./bn.js": 322,
	"./bo": 323,
	"./bo.js": 323,
	"./br": 324,
	"./br.js": 324,
	"./bs": 325,
	"./bs.js": 325,
	"./ca": 326,
	"./ca.js": 326,
	"./cs": 327,
	"./cs.js": 327,
	"./cv": 328,
	"./cv.js": 328,
	"./cy": 329,
	"./cy.js": 329,
	"./da": 330,
	"./da.js": 330,
	"./de": 331,
	"./de-at": 332,
	"./de-at.js": 332,
	"./de-ch": 333,
	"./de-ch.js": 333,
	"./de.js": 331,
	"./dv": 334,
	"./dv.js": 334,
	"./el": 335,
	"./el.js": 335,
	"./en-au": 336,
	"./en-au.js": 336,
	"./en-ca": 337,
	"./en-ca.js": 337,
	"./en-gb": 338,
	"./en-gb.js": 338,
	"./en-ie": 339,
	"./en-ie.js": 339,
	"./en-nz": 340,
	"./en-nz.js": 340,
	"./eo": 341,
	"./eo.js": 341,
	"./es": 342,
	"./es-do": 343,
	"./es-do.js": 343,
	"./es.js": 342,
	"./et": 344,
	"./et.js": 344,
	"./eu": 345,
	"./eu.js": 345,
	"./fa": 346,
	"./fa.js": 346,
	"./fi": 347,
	"./fi.js": 347,
	"./fo": 348,
	"./fo.js": 348,
	"./fr": 349,
	"./fr-ca": 350,
	"./fr-ca.js": 350,
	"./fr-ch": 351,
	"./fr-ch.js": 351,
	"./fr.js": 349,
	"./fy": 352,
	"./fy.js": 352,
	"./gd": 353,
	"./gd.js": 353,
	"./gl": 354,
	"./gl.js": 354,
	"./gom-latn": 355,
	"./gom-latn.js": 355,
	"./he": 356,
	"./he.js": 356,
	"./hi": 357,
	"./hi.js": 357,
	"./hr": 358,
	"./hr.js": 358,
	"./hu": 359,
	"./hu.js": 359,
	"./hy-am": 360,
	"./hy-am.js": 360,
	"./id": 361,
	"./id.js": 361,
	"./is": 362,
	"./is.js": 362,
	"./it": 363,
	"./it.js": 363,
	"./ja": 364,
	"./ja.js": 364,
	"./jv": 365,
	"./jv.js": 365,
	"./ka": 366,
	"./ka.js": 366,
	"./kk": 367,
	"./kk.js": 367,
	"./km": 368,
	"./km.js": 368,
	"./kn": 369,
	"./kn.js": 369,
	"./ko": 370,
	"./ko.js": 370,
	"./ky": 371,
	"./ky.js": 371,
	"./lb": 372,
	"./lb.js": 372,
	"./lo": 373,
	"./lo.js": 373,
	"./lt": 374,
	"./lt.js": 374,
	"./lv": 375,
	"./lv.js": 375,
	"./me": 376,
	"./me.js": 376,
	"./mi": 377,
	"./mi.js": 377,
	"./mk": 378,
	"./mk.js": 378,
	"./ml": 379,
	"./ml.js": 379,
	"./mr": 380,
	"./mr.js": 380,
	"./ms": 381,
	"./ms-my": 382,
	"./ms-my.js": 382,
	"./ms.js": 381,
	"./my": 383,
	"./my.js": 383,
	"./nb": 384,
	"./nb.js": 384,
	"./ne": 385,
	"./ne.js": 385,
	"./nl": 386,
	"./nl-be": 387,
	"./nl-be.js": 387,
	"./nl.js": 386,
	"./nn": 388,
	"./nn.js": 388,
	"./pa-in": 389,
	"./pa-in.js": 389,
	"./pl": 390,
	"./pl.js": 390,
	"./pt": 391,
	"./pt-br": 392,
	"./pt-br.js": 392,
	"./pt.js": 391,
	"./ro": 393,
	"./ro.js": 393,
	"./ru": 394,
	"./ru.js": 394,
	"./sd": 395,
	"./sd.js": 395,
	"./se": 396,
	"./se.js": 396,
	"./si": 397,
	"./si.js": 397,
	"./sk": 398,
	"./sk.js": 398,
	"./sl": 399,
	"./sl.js": 399,
	"./sq": 400,
	"./sq.js": 400,
	"./sr": 401,
	"./sr-cyrl": 402,
	"./sr-cyrl.js": 402,
	"./sr.js": 401,
	"./ss": 403,
	"./ss.js": 403,
	"./sv": 404,
	"./sv.js": 404,
	"./sw": 405,
	"./sw.js": 405,
	"./ta": 406,
	"./ta.js": 406,
	"./te": 407,
	"./te.js": 407,
	"./tet": 408,
	"./tet.js": 408,
	"./th": 409,
	"./th.js": 409,
	"./tl-ph": 410,
	"./tl-ph.js": 410,
	"./tlh": 411,
	"./tlh.js": 411,
	"./tr": 412,
	"./tr.js": 412,
	"./tzl": 413,
	"./tzl.js": 413,
	"./tzm": 414,
	"./tzm-latn": 415,
	"./tzm-latn.js": 415,
	"./tzm.js": 414,
	"./uk": 416,
	"./uk.js": 416,
	"./ur": 417,
	"./ur.js": 417,
	"./uz": 418,
	"./uz-latn": 419,
	"./uz-latn.js": 419,
	"./uz.js": 418,
	"./vi": 420,
	"./vi.js": 420,
	"./x-pseudo": 421,
	"./x-pseudo.js": 421,
	"./yo": 422,
	"./yo.js": 422,
	"./zh-cn": 423,
	"./zh-cn.js": 423,
	"./zh-hk": 424,
	"./zh-hk.js": 424,
	"./zh-tw": 425,
	"./zh-tw.js": 425
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
<<<<<<< HEAD




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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(27);
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
        selector: 'page-new-chat',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-chat/new-chat.html"*/'<!--\n  Generated template for the NewChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title>New Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- No friends yet to start a conversation with -->\n  <div class="empty-list" *ngIf="friends && friends.length == 0">\n    <button ion-button block icon-left tappable (click)="searchPeople()"><ion-icon name="md-search"></ion-icon>Search for your friends here</button>\n  </div>\n  <!-- Show friends to start a conversation with -->\n  <ion-list class="avatar-list" *ngIf="friends && friends.length > 0">\n    <ion-searchbar [(ngModel)]="searchFriend" placeholder="Search for friend or username" showCancelButton="true" cancelButtonText="Done"></ion-searchbar>\n    <ion-item *ngFor="let friend of friends | friendFilter:searchFriend" no-lines tappable (click)="message(friend.$key)">\n      <ion-avatar item-left>\n        <img src="{{friend.img}}">\n      </ion-avatar>\n      <h2>{{friend.name}}</h2>\n      <p>@{{friend.username}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/new-chat/new-chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
], NewChatPage);

//# sourceMappingURL=new-chat.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(734);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_calendar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_cloud_angular__ = __webpack_require__(1080);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_calendar__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_testing_testing__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tasks_tasks__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_searcher_searcher__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_calendar_calendar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tdlist_tdlist__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_verify_verify__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_conversation_conversation__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_new_chat_new_chat__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_information_information__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_contacts_contacts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_search_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_requests_requests__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_user_info_user_info__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_image_modal_image_modal__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_new_club_new_club__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_clubs_clubs__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_club_club__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_club_info_club_info__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_add_member_add_member__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pipes_friend__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pipes_search__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pipes_conversation__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pipes_date__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_club__ = __webpack_require__(1187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_alert_alert__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_auth_service_auth_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_auth_service_logout__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_firebase__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_image_image__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_firebase_firebase__ = __webpack_require__(201);
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
__WEBPACK_IMPORTED_MODULE_52_firebase__["initializeApp"](firebaseConfig);
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
            __WEBPACK_IMPORTED_MODULE_42__pages_add_member_add_member__["a" /* AddMemberPage */],
            __WEBPACK_IMPORTED_MODULE_43__pipes_friend__["a" /* FriendPipe */],
            __WEBPACK_IMPORTED_MODULE_45__pipes_conversation__["a" /* ConversationPipe */],
            __WEBPACK_IMPORTED_MODULE_44__pipes_search__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_46__pipes_date__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_47__pipes_club__["a" /* ClubPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/calendar/calendar.module#CalendarModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/searcher/searcher.module#SearcherModule', name: 'Searcher', segment: 'searcher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tasks/tasks.module#TasksModule', name: 'Tasks', segment: 'tasks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tdlist/tdlist.module#TdlistPageModule', name: 'TdlistPage', segment: 'tdlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/conversation/conversation.module#ConversationPageModule', name: 'ConversationPage', segment: 'conversation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/testing/testing.module#TestingModule', name: 'Testing', segment: 'testing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/clubs/clubs.module#ClubsPageModule', name: 'ClubsPage', segment: 'clubs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search-people/search-people.module#SearchPeoplePageModule', name: 'SearchPeoplePage', segment: 'search-people', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-member/add-member.module#AddMemberPageModule', name: 'AddMemberPage', segment: 'add-member', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_42__pages_add_member_add_member__["a" /* AddMemberPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_48__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_49__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_50__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_51__providers_auth_service_logout__["a" /* LogoutProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_54__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_55__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_53__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_56__providers_firebase_firebase__["a" /* FirebaseProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 312,
	"./af.js": 312,
	"./ar": 313,
	"./ar-dz": 314,
	"./ar-dz.js": 314,
	"./ar-kw": 315,
	"./ar-kw.js": 315,
	"./ar-ly": 316,
	"./ar-ly.js": 316,
	"./ar-ma": 317,
	"./ar-ma.js": 317,
	"./ar-sa": 318,
	"./ar-sa.js": 318,
	"./ar-tn": 319,
	"./ar-tn.js": 319,
	"./ar.js": 313,
	"./az": 320,
	"./az.js": 320,
	"./be": 321,
	"./be.js": 321,
	"./bg": 322,
	"./bg.js": 322,
	"./bn": 323,
	"./bn.js": 323,
	"./bo": 324,
	"./bo.js": 324,
	"./br": 325,
	"./br.js": 325,
	"./bs": 326,
	"./bs.js": 326,
	"./ca": 327,
	"./ca.js": 327,
	"./cs": 328,
	"./cs.js": 328,
	"./cv": 329,
	"./cv.js": 329,
	"./cy": 330,
	"./cy.js": 330,
	"./da": 331,
	"./da.js": 331,
	"./de": 332,
	"./de-at": 333,
	"./de-at.js": 333,
	"./de-ch": 334,
	"./de-ch.js": 334,
	"./de.js": 332,
	"./dv": 335,
	"./dv.js": 335,
	"./el": 336,
	"./el.js": 336,
	"./en-au": 337,
	"./en-au.js": 337,
	"./en-ca": 338,
	"./en-ca.js": 338,
	"./en-gb": 339,
	"./en-gb.js": 339,
	"./en-ie": 340,
	"./en-ie.js": 340,
	"./en-nz": 341,
	"./en-nz.js": 341,
	"./eo": 342,
	"./eo.js": 342,
	"./es": 343,
	"./es-do": 344,
	"./es-do.js": 344,
	"./es.js": 343,
	"./et": 345,
	"./et.js": 345,
	"./eu": 346,
	"./eu.js": 346,
	"./fa": 347,
	"./fa.js": 347,
	"./fi": 348,
	"./fi.js": 348,
	"./fo": 349,
	"./fo.js": 349,
	"./fr": 350,
	"./fr-ca": 351,
	"./fr-ca.js": 351,
	"./fr-ch": 352,
	"./fr-ch.js": 352,
	"./fr.js": 350,
	"./fy": 353,
	"./fy.js": 353,
	"./gd": 354,
	"./gd.js": 354,
	"./gl": 355,
	"./gl.js": 355,
	"./gom-latn": 356,
	"./gom-latn.js": 356,
	"./he": 357,
	"./he.js": 357,
	"./hi": 358,
	"./hi.js": 358,
	"./hr": 359,
	"./hr.js": 359,
	"./hu": 360,
	"./hu.js": 360,
	"./hy-am": 361,
	"./hy-am.js": 361,
	"./id": 362,
	"./id.js": 362,
	"./is": 363,
	"./is.js": 363,
	"./it": 364,
	"./it.js": 364,
	"./ja": 365,
	"./ja.js": 365,
	"./jv": 366,
	"./jv.js": 366,
	"./ka": 367,
	"./ka.js": 367,
	"./kk": 368,
	"./kk.js": 368,
	"./km": 369,
	"./km.js": 369,
	"./kn": 370,
	"./kn.js": 370,
	"./ko": 371,
	"./ko.js": 371,
	"./ky": 372,
	"./ky.js": 372,
	"./lb": 373,
	"./lb.js": 373,
	"./lo": 374,
	"./lo.js": 374,
	"./lt": 375,
	"./lt.js": 375,
	"./lv": 376,
	"./lv.js": 376,
	"./me": 377,
	"./me.js": 377,
	"./mi": 378,
	"./mi.js": 378,
	"./mk": 379,
	"./mk.js": 379,
	"./ml": 380,
	"./ml.js": 380,
	"./mr": 381,
	"./mr.js": 381,
	"./ms": 382,
	"./ms-my": 383,
	"./ms-my.js": 383,
	"./ms.js": 382,
	"./my": 384,
	"./my.js": 384,
	"./nb": 385,
	"./nb.js": 385,
	"./ne": 386,
	"./ne.js": 386,
	"./nl": 387,
	"./nl-be": 388,
	"./nl-be.js": 388,
	"./nl.js": 387,
	"./nn": 389,
	"./nn.js": 389,
	"./pa-in": 390,
	"./pa-in.js": 390,
	"./pl": 391,
	"./pl.js": 391,
	"./pt": 392,
	"./pt-br": 393,
	"./pt-br.js": 393,
	"./pt.js": 392,
	"./ro": 394,
	"./ro.js": 394,
	"./ru": 395,
	"./ru.js": 395,
	"./sd": 396,
	"./sd.js": 396,
	"./se": 397,
	"./se.js": 397,
	"./si": 398,
	"./si.js": 398,
	"./sk": 399,
	"./sk.js": 399,
	"./sl": 400,
	"./sl.js": 400,
	"./sq": 401,
	"./sq.js": 401,
	"./sr": 402,
	"./sr-cyrl": 403,
	"./sr-cyrl.js": 403,
	"./sr.js": 402,
	"./ss": 404,
	"./ss.js": 404,
	"./sv": 405,
	"./sv.js": 405,
	"./sw": 406,
	"./sw.js": 406,
	"./ta": 407,
	"./ta.js": 407,
	"./te": 408,
	"./te.js": 408,
	"./tet": 409,
	"./tet.js": 409,
	"./th": 410,
	"./th.js": 410,
	"./tl-ph": 411,
	"./tl-ph.js": 411,
	"./tlh": 412,
	"./tlh.js": 412,
	"./tr": 413,
	"./tr.js": 413,
	"./tzl": 414,
	"./tzl.js": 414,
	"./tzm": 415,
	"./tzm-latn": 416,
	"./tzm-latn.js": 416,
	"./tzm.js": 415,
	"./uk": 417,
	"./uk.js": 417,
	"./ur": 418,
	"./ur.js": 418,
	"./uz": 419,
	"./uz-latn": 420,
	"./uz-latn.js": 420,
	"./uz.js": 419,
	"./vi": 421,
	"./vi.js": 421,
	"./x-pseudo": 422,
	"./x-pseudo.js": 422,
	"./yo": 423,
	"./yo.js": 423,
	"./zh-cn": 424,
	"./zh-cn.js": 424,
	"./zh-hk": 425,
	"./zh-hk.js": 425,
	"./zh-tw": 426,
	"./zh-tw.js": 426
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
=======
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 761;

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
=======
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Accept',
                    handler: function () {
                        _this.firebaseProvider.acceptFriendRequest(_this.userId);
                    }
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Reject',
                    handler: function () {
                        _this.firebaseProvider.deleteFriendRequest(_this.userId);
                    }
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.firebaseProvider.cancelFriendRequest(_this.userId);
                    }
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
                    text: 'Cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Send',
                    handler: function () {
                        _this.firebaseProvider.sendFriendRequest(_this.userId);
                    }
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
<<<<<<< HEAD
        selector: 'page-user-info',template:/*ion-inline-start:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/user-info/user-info.html"*/'<!--\n  Generated template for the UserInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons>\n      <button ion-button tappable (click)="back()">Back</button>\n    </ion-buttons>\n    <ion-title *ngIf="user">{{user.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- User Info -->\n  <div *ngIf="user">\n    <div class="profile">\n      <img src="{{user.img}}" tappable (click)="enlargeImage(user.img)" />\n    </div>\n    <h4>\n      <span>{{user.name}} </span>\n      <ion-icon name="md-flame" *ngIf="user.provider == \'Firebase\'" class="firebase"></ion-icon>\n      <ion-icon name="logo-facebook" *ngIf="user.provider == \'Facebook\'" class="facebook"></ion-icon>\n      <ion-icon name="logo-google" *ngIf="user.provider == \'Google\'" class="google"></ion-icon>\n    </h4>\n    <p class="username">@{{user.username}}</p>\n    <p class="description">{{user.description}}</p>\n    <div class="divider"></div>\n    <div class="center">\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n      <div *ngIf="friendRequests && friendRequests.indexOf(user.$key) > -1">\n        <p class="info">Sent you a friend request.</p>\n        <button ion-button icon-only class="danger" tappable (click)="rejectFriendRequest()"><ion-icon name="md-close"></ion-icon></button>\n        <button ion-button icon-only class="success" tappable (click)="acceptFriendRequest()"><ion-icon name="md-checkmark"></ion-icon></button>\n      </div>\n      <div *ngIf="requestsSent && requestsSent.indexOf(user.$key) > -1">\n        <p class="info">Friend request sent.</p>\n        <button ion-button class="dark" tappable (click)="cancelFriendRequest()">Cancel Friend Request</button>\n      </div>\n      <div *ngIf="canAdd()">\n        <p class="info">You are not yet friends.</p>\n        <button ion-button class="primary" tappable (click)="sendFriendRequest()">Send Friend Request</button>\n      </div>\n      <div *ngIf="friends && friends.indexOf(user.$key) > -1">\n        <p class="info">You are already friends.</p>\n        <button ion-button class="primary" tappable (click)="sendMessage()">Send Message</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liam/Documents/IONIC/Project/Clandar/src/pages/user-info/user-info.html"*/
=======
        selector: 'page-user-info',template:/*ion-inline-start:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\user-info\user-info.html"*/'<!--\n\n  Generated template for the UserInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>user-info</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\YUE Baochuan\Desktop\Clandar-master\Clandar_0805\Clandar\src\pages\user-info\user-info.html"*/,
>>>>>>> d41ea44fb65daeef34b86bd5bdf08233b36d35f2
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _g || Object])
], UserInfoPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 93:
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(26);
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

/***/ })

},[729]);
//# sourceMappingURL=main.js.map