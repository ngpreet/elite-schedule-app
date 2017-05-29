import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-77a42.firebaseio.com/';

    currentTournament: any = {};
    private tournamentData: any = {};

    constructor(private http: Http) {
    }

    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        })
    }

    getTournamentData(tournamentId, forceRefresh: boolean = false): Observable<any> {
        if (!forceRefresh && this.tournamentData[tournamentId]) {
            this.currentTournament = this.tournamentData[tournamentId];
            return Observable.of(this.currentTournament);
        }
        return this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}.json`)
            .map((response: Response) => {
                this.tournamentData[tournamentId] = response.json();
                this.currentTournament = this.tournamentData[tournamentId];
                return this.currentTournament;
            });
    }

    getCurrentTournament() {
        return this.currentTournament;
    }

    refreshCurrentTournament(tournamentId) {
        return this.getTournamentData(tournamentId, true);
    }
}