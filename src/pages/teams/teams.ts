import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi) {
  }

  teams = [];

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

  ionViewDidLoad() {
    let selectedTournament = this.navParams.data;

    this.eliteApi.getTournamentData(selectedTournament.id)
      .subscribe(data => {
        this.teams = data.teams;
      })
  }
}
