import { CompanyProvider } from './../../providers/company/company';
import { Company } from './model/company-model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {

  public company: Company;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public companyProvider: CompanyProvider) {

    this.company = new Company(0, '', '', '');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  onSubmit(): void {
    this.addCompany(this.company);
    console.log(this.company);
  }

  addCompany(company: Company): void {
    this.companyProvider.addCompany(company)
      .then((company: Company) => {
        this.company = company;
      }, (error) => {
        console.log('Erro a inserir companhia: ' + error);

      });
  }

}
