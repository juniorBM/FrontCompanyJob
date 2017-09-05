import { JobProvider } from './../../providers/job/job';
import { Company } from './../company/model/company-model';
import { CompanyProvider } from './../../providers/company/company';
import { Job } from './model/job-model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {

  public job: Job;
  public companies: Company[] = [];

  constructor(
    public navCtrl: NavController,
    public companyService: CompanyProvider,
    public jobService: JobProvider,
    public navParams: NavParams) {
      this.job = new Job(0, '', 0,'', '');

      this.companyService.getCompanies()
        .then((companies: Company[]) => {
          this.companies = companies;
          console.log(this.companies);
        }, (error) => {
          console.log('Erro ao listar: ', error);

        });
  }

  ionViewDidLoad() {
  }

  onSubmit(y): void {
    if(y.checked){
      this.job.remote = 'Sim';
    }else {
      this.job.remote= 'Não';
    }
    this.addJob(this.job);
    console.log(this.job);
  }

  setValue(value) {
    this.job.remote = value;
    console.log('entrou' + value);
  }

  addJob(job: Job): void {
    this.jobService.addJob(job)
    .then((job: Job) => {
      this.job = job;
    }, (error) => {
      console.log('Erro a inserir companhia: ' + error);

    });

  }

}
