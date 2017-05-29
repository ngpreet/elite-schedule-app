import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  team: any;
  tournamentData: any;
  standings: any;
  allStandings: any;
  divisionFilter = 'division';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    this.tournamentData = this.eliteApi.getCurrentTournament();
    this.standings = this.tournamentData.standings;
    this.allStandings = this.tournamentData.standings;
    // this.allStandings = _.chain(this.standings)
    //   .groupBy('division')
    //   .toPairs()
    //   .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
    //   .value();

    this.filterDivision();
  }

  getHeader(record, recordIndex, records){
    if(recordIndex === 0 || record.division != records[recordIndex-1].division){
      return record.division;
    }
    return null;
  }

  filterDivision(){
    if(this.divisionFilter === 'all'){
      this.standings = this.allStandings;
    }
    else{
      this.standings = _.filter(this.allStandings, s=>s.division === this.team.division);
    }
  }

}
