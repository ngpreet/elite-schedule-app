import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyTeamsPage, TournamentsPage, GamePage, TeamDetailsPage, TeamsPage, TeamHomePage, StandingsPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { EliteApi } from '../shared/shared'

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage, 
    GamePage, 
    TeamDetailsPage, 
    TeamsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage, 
    GamePage, 
    TeamDetailsPage, 
    TeamsPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    EliteApi,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
