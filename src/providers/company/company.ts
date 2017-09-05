import { Company } from './../../pages/company/model/company-model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the CompanyProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CompanyProvider {

  private url = 'http://localhost:4000/companies/';
  public headers:Headers = new Headers();

  constructor(public http: Http) {
    console.log('Hello CompanyProvider Provider');
  }

  addCompany(company: Company): Promise<Company>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'add', JSON.stringify(company), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log('valor de daa' + data);
          resolve(data);
        }, error => {
          console.log('erro: ' + error)
          reject(error);
        });
    });
  }

  getCompanies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
