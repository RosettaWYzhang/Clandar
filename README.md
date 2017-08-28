# Clandar
## How to integrate this project with your own firebase
### 1. Log into your firebase console
### 2. Create a new firebase project and add firebase configuration information to the Ionic project

####  a) Go to the newly created project in the firebase console and find 'Overview', choose 'Add Firebase to your web app', copy the content with 'var config'
  
####  b) In Ionic project folder, go to 'src/app/app.module.ts', find 'export const firebaseConfig = {};'(72nd line) and paste the copied content. Then go to 'src/info.ts', paste the copied content in the 'export const firebaseConfig = {};'(7th line)

### 3. Install dependencies
```npm install --save firebase```

```npm install --save angularfire2```

```npm install --save moment```

```npm install --save ng2-cordova-oauth```

```npm install @ionic/app-scripts@latest --save-dev```

### 4. Firebase Notification Setup
#### a) Register Android app with Firebase & Download setup file
     
  In 'Overview', click 'add Firebase to your Android app', fill your package name and register app, download 'google-services.json'
     
#### b) Register iOS app with Firebase & Download setup file
  
  Choose ios project, fill your bundle id, register app and download 'GoogleServices-Info.plist' file
  
#### c) Adding Firebase Plugin to your project
  
  ```ionic cordova plugin add cordova-plugin-firebase```
  
  ```npm install --save @ionic-native/firebase```
  
  > IMPORTANT : you need to copy the downloaded files into project folder
  
  - google-services.json
  
  - GoogleService-Info.plist
  
### 5. Firebase Cloud Function Setup
  In your downloaded Ionic project folder, run cmd: 
  
#### a) Installing Firebase tools

  ```npm install -g firebase-tools```
  
#### b) Login to your firebase with your google account

  ```firebase login```
  
#### c) Deploy firebase functions  
  
  ```cd fcf```

  ```firebase deploy --only functions```
