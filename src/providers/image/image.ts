import { Injectable } from '@angular/core';
import { AlertProvider } from '../alert/alert';
import { LoadingProvider } from '../loading/loading';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { MediaCapture } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';

@Injectable()
export class ImageProvider {
  // Image Provider
  // This is the provider class for most of the image processing including uploading images to Firebase.
  // Take note that the default function here uploads the file in .jpg. If you plan to use other encoding types, make sure to
  // set the encodingType before uploading the image on Firebase.
  // Example for .png:
  // data:image/jpeg;base64 -> data:image/png;base64
  // generateFilename to return .png
  private profilePhotoOptions: CameraOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };

  private photoMessageOptions: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };

  private clubPhotoOptions: CameraOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };
  // All files to be uploaded on Firebase must have DATA_URL as the destination type.
  // This will return the imageURI which can then be processed and uploaded to Firebase.
  // For the list of cameraOptions, please refer to: https://github.com/apache/cordova-plugin-camera#module_camera.CameraOptions

  constructor(public angularfire: AngularFireDatabase, public alertProvider: AlertProvider, public loadingProvider: LoadingProvider, public camera: Camera, public mediaCapture: MediaCapture, public file: File) {
    console.log("Initializing Image Provider");
  }

  // Function to convert dataURI to Blob needed by Firebase
  imgURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: mimeString
    });
  }

  // Generate a random filename of length for the image to be uploaded
  generateFilename() {
    var length = 8;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }

  // Set ProfilePhoto given the user and the cameraSourceType.
  // This function processes the imageURI returned and uploads the file on Firebase,
  // Finally the user data on the database is updated.
  setProfilePhoto(user, sourceType) {
    this.profilePhotoOptions.sourceType = sourceType;
    this.loadingProvider.load();
    // Get picture from camera or gallery.
    this.camera.getPicture(this.profilePhotoOptions).then((imageData) => {
      // Process the returned imageURI.
      let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
      let metadata = {
        'contentType': imgBlob.type
      };
      // Generate filename and upload to Firebase Storage.
      firebase.storage().ref().child('images/' + user.userId + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
        // Delete previous profile photo on Storage if it exists.
        this.deleteImageFile(user.img);
        // URL of the uploaded image!
        let url = snapshot.metadata.downloadURLs[0];
        let profile = {
          displayName: user.name,
          photoURL: url
        };
        // Update Firebase User.
        firebase.auth().currentUser.updateProfile(profile)
          .then((success) => {
            // Update User Data on Database.
            this.angularfire.object('/accounts/' + user.userId).update({
              img: url
            }).then((success) => {
              this.loadingProvider.dismiss();
              this.alertProvider.showProfileUpdatedMessage();
            }).catch((error) => {
              this.loadingProvider.dismiss();
              this.alertProvider.showErrorMessage('profile/error-change-photo');
            });
          })
          .catch((error) => {
            this.loadingProvider.dismiss();
            this.alertProvider.showErrorMessage('profile/error-change-photo');
          });
      }).catch((error) => {
        this.loadingProvider.dismiss();
        this.alertProvider.showErrorMessage('image/error-image-upload');
      });
    }).catch((error) => {
      this.loadingProvider.dismiss();
    });
  }

  // Upload and set the club object's image.
  setClubPhoto(club, sourceType) {
    this.clubPhotoOptions.sourceType = sourceType;
    this.loadingProvider.load();
    // Get picture from camera or gallery.
    this.camera.getPicture(this.clubPhotoOptions).then((imageData) => {
      // Process the returned imageURI.
      let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
      let metadata = {
        'contentType': imgBlob.type
      };
      firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
        this.deleteImageFile(club.img);
        // URL of the uploaded image!
        let url = snapshot.metadata.downloadURLs[0];
        club.img = url;
        this.loadingProvider.dismiss();
      }).catch((error) => {
        this.loadingProvider.dismiss();
        this.alertProvider.showErrorMessage('image/error-image-upload');
      });
    }).catch((error) => {
      this.loadingProvider.dismiss();
    });
  }

  // Set club photo and return the club object as promise.
  setClubPhotoPromise(club, sourceType): Promise<any> {
    return new Promise(resolve => {
      this.clubPhotoOptions.sourceType = sourceType;
      this.loadingProvider.load();
      // Get picture from camera or gallery.
      this.camera.getPicture(this.clubPhotoOptions).then((imageData) => {
        // Process the returned imageURI.
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
          this.deleteImageFile(club.img);
          // URL of the uploaded image!
          let url = snapshot.metadata.downloadURLs[0];
          club.img = url;
          this.loadingProvider.dismiss();
          resolve(club);
        }).catch((error) => {
          this.loadingProvider.dismiss();
          this.alertProvider.showErrorMessage('image/error-image-upload');
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

  //Delete the image given the url.
  deleteImageFile(path) {
    var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + fileName).delete().then(() => { }).catch((error) => { });
  }

  //Delete the user.img given the user.
  deleteUserImageFile(user) {
    var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + user.userId + '/' + fileName).delete().then(() => { }).catch((error) => { });
  }

  // Delete club image file on club storage reference.
  deleteClubImageFile(clubId, path) {
    var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + clubId + '/' + fileName).delete().then(() => { }).catch((error) => { });
  }

  // Upload photo message and return the url as promise.
  uploadPhotoMessage(conversationId, sourceType): Promise<any> {
    return new Promise(resolve => {
      this.photoMessageOptions.sourceType = sourceType;
      this.loadingProvider.load();
      // Get picture from camera or gallery.
      this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
        // Process the returned imageURI.
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        // Generate filename and upload to Firebase Storage.
        firebase.storage().ref().child('images/' + conversationId + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
          // URL of the uploaded image!
          let url = snapshot.metadata.downloadURLs[0];
          this.loadingProvider.dismiss();
          resolve(url);
        }).catch((error) => {
          this.loadingProvider.dismiss();
          this.alertProvider.showErrorMessage('image/error-image-upload');
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

  // Upload club photo message and return a promise as url.
  uploadClubPhotoMessage(clubId, sourceType): Promise<any> {
    return new Promise(resolve => {
      this.photoMessageOptions.sourceType = sourceType;
      this.loadingProvider.load();
      // Get picture from camera or gallery.
      this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
        // Process the returned imageURI.
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        // Generate filename and upload to Firebase Storage.
        firebase.storage().ref().child('images/' + clubId + '/' + this.generateFilename()).put(imgBlob, metadata).then((snapshot) => {
          // URL of the uploaded image!
          let url = snapshot.metadata.downloadURLs[0];
          this.loadingProvider.dismiss();
          resolve(url);
        }).catch((error) => {
          this.loadingProvider.dismiss();
          this.alertProvider.showErrorMessage('image/error-image-upload');
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

  /*uploadClubVideoMessage(clubId): Promise<any> {
    return new Promise(resolve => {
      this.loadingProvider.load();
          this.mediaCapture.captureVideo().then( data => {
              let videoUrl = data[0].fullPath;
              console.log("video path: "+videoUrl);
              let x = videoUrl.split("/");
              let filepath = videoUrl.substring(0,videoUrl.lastIndexOf("/"));
              let name = x[x.length-1];
              console.log(filepath + " - "+ name);
              this.file.readAsArrayBuffer(filepath, name).then( success => {
                console.log(success);
                let blob = new Blob([success], {type: "video/mp4"});
                console.log(blob);
                let timestamp = (Math.floor(Date.now() / 1000)).toString();
                let storageRef = firebase.storage().ref();

                let upload = storageRef.child('videos/'+clubId+"/"+name).put(blob);
                upload.on('state_changed', snapshot =>{
                  let process = upload.snapshot.bytesTransferred / upload.snapshot.totalBytes * 100;
                  console.log(process);
                }, err => {
                  this.loadingProvider.dismiss();
                  console.log("error in uploading"+err);
                } () => {
                  this.loadingProvider.dismiss();
                  resolve(upload.snapshot.downloadURL)
                });
                
              });      
            }, err => {
              this.loadingProvider.dismiss();
              console.log("Media Err = "+err);
            });
    });
  }

  uploadVideoMessage(conversationId): Promise<any> {
    return new Promise(resolve => {
      this.loadingProvider.load();
          this.mediaCapture.captureVideo().then( data => {
              let videoUrl = data[0].fullPath;
              console.log("video path: "+videoUrl);
              let x = videoUrl.split("/");
              let filepath = videoUrl.substring(0,videoUrl.lastIndexOf("/"));
              let name = x[x.length-1];
              console.log(filepath + " - "+ name);
              this.file.readAsArrayBuffer(filepath, name).then( success => {
                console.log(success);
                let blob = new Blob([success], {type: "video/mp4"});
                console.log(blob);
                let timestamp = (Math.floor(Date.now() / 1000)).toString();
                let storageRef = firebase.storage().ref();

                let upload = storageRef.child('videos/'+name).put(blob);
                upload.on('state_changed', snapshot =>{
                  let process = upload.snapshot.bytesTransferred / upload.snapshot.totalBytes * 100;
                  console.log(process);
                }, err => {
                  this.loadingProvider.dismiss();
                  console.log("error in uploading"+err);
                }, () => {
                  this.loadingProvider.dismiss();
                  resolve(upload.snapshot.downloadURL)
                });
                
              });      
            }, err => {
              this.loadingProvider.dismiss();
              console.log("Media Err = "+err);
            });
    });
  }*/
}