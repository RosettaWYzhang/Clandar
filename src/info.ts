import { TabsPage } from './pages/tabs/tabs';
import { VerifyPage } from './pages/verify/verify';

export namespace Info {
  // replace with your key
  export const firebaseConfig = {
    apiKey: "AIzaSyAbihXWCa40DwPvVcy8rL0SYEDY4bOMOsE",
    authDomain: "clandar-2e188.firebaseapp.com",
    databaseURL: "https://clandar-2e188.firebaseio.com",
    projectId: "clandar-2e188",
    storageBucket: "clandar-2e188.appspot.com",
    messagingSenderId: "1038439505893"
  };
  //export const facebookAppId: string = "767580770058358";
  //export const googleClientId: string = "478860799652-526uf84nsn4jfjg0l2trbivm1676ohgb.apps.googleusercontent.com";
  export const tabsPage = TabsPage;
  export const verifyPage = VerifyPage;
  export const emailVerification: boolean = true;
}

