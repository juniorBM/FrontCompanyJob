import { JobDetailPage } from './../pages/job-detail/job-detail';
import { CompanyDetailPage } from './../pages/company-detail/company-detail';
import { JobPage } from './../pages/job/job';
import { CompanyPage } from './../pages/company/company';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompanyProvider } from '../providers/company/company';
import { JobProvider } from '../providers/job/job';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompanyPage,
    JobPage,
    CompanyDetailPage,
    JobDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CompanyPage,
    JobPage,
    CompanyDetailPage,
    JobDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CompanyProvider,
    JobProvider
  ]
})
export class AppModule {}
