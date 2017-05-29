import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyTeamsPage, TournamentsPage, GamePage, TeamDetailsPage, TeamsPage, TeamHomePage, StandingsPage, MapPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IonicStorageModule } from '@ionic/storage';
import { EliteApi, UserSettings } from '../shared/shared'

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage, 
    GamePage, 
    TeamDetailsPage, 
    TeamsPage,
    TeamHomePage,
    StandingsPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__elitedb',
         driverOrder: ['sqlite', 'websql', 'indexeddb']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgu3eWCRcEVcvdK5bjoZxY7_T7-0WtFI8'
    })
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
    StandingsPage,
    MapPage
  ],
  providers: [
    EliteApi,
    UserSettings,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
