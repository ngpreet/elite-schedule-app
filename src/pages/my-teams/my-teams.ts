import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentsPage, TeamHomePage } from '../pages';
import { EliteApi, UserSettings } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public eliteApi: EliteApi,
    public userSettings: UserSettings) {
  }

  favorites = [];

  favoriteTapped($event, favourite) {
    let loader = this.loadingController.create({
      content: 'Geting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favourite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favourite.team));
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

  ionViewDidEnter() {
    this.favorites = this.userSettings.getAllFavorites();
  }
}
