import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';

declare var window: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: any;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private eliteApi: EliteApi,
    private toastController: ToastController) {
  }

  ionViewDidLoad() {
    let games = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTournament();
    let location = tourneyData.locations[games.locationId];

    if (location) {
      this.map = {
        lat: location.latitude,
        lng: location.longitude,
        zoom: 12,
        markerLabel: games.location
      };
    }
    else {
      let toast = this.toastController.create({
        message: 'Location not available for this game.',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  getDirections() {
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`;
  }
}
