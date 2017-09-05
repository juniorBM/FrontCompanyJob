import { Job } from './../job/model/job-model';
import { JobProvider } from './../../providers/job/job';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JobDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html',
})
export class JobDetailPage {

  public jobs: Job[] = [];

  constructor(
    public jobService: JobProvider,
    public navCtrl: NavController,
    public navParams: NavParams)
    {
      this.getJobs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailPage');
  }


  getJobs(): void {
    this.jobService.getJobs()
      .then((jobs: Job[]) => {
        this.jobs = jobs;
      }, (error) => {
        console.log(error);
      });
  }


}
