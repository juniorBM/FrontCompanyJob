import { Company } from './../company/model/company-model';
import { CompanyProvider } from './../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-company-detail',
  templateUrl: 'company-detail.html',
})
export class CompanyDetailPage {

  public companies: Company[] = [];

  constructor(
    public companyService: CompanyProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {
      this.getCompanies();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDetailPage');
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .then((companies: Company[]) => {
        this.companies = companies;
        console.log(this.companies);
      }, (error) => {
        console.log(error);
      });
  }

}
