import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoadingProvider {
  private loading;
  constructor(public http: Http,
              public loadingCtrl:LoadingController) {
    console.log('Hello LoadingProvider Provider');
  }

  load(){
    if(!this.loading){
      this.loading = this.loadingCtrl.create({
<<<<<<< HEAD
        content: 'Please wait...'
=======
        content: 'Please wait...',
>>>>>>> 18221842349360faa665bf34a7f8f22d2a964d48
      });
      this.loading.present();
    } 
  }

  dismiss(){
    if(this.loading){
      this.loading.dismiss();
      this.loading = null;
    }
  }

}
