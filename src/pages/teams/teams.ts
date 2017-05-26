import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi,
    public loadingController: LoadingController) {
  }

  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

  ionViewDidLoad() {
    let selectedTournament = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTournament.id)
        .subscribe(data => {
          this.allTeams = data.teams;
          this.allTeamDivisions = _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();

          this.teams = this.allTeamDivisions;
          loader.dismiss();
          console.log(this.teams);
        });
    });

  }
}
