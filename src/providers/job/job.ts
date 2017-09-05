import { Job } from './../../pages/job/model/job-model';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JobProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class JobProvider {

  private url = 'http://localhost:4000/jobs/';
  public headers:Headers = new Headers();

  constructor(public http: Http) {
    console.log('Hello JobProvider Provider');
  }


  addJob(job: Job): Promise<Job>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'add', JSON.stringify(job), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log('valor de data: ',  data);
          resolve(data);
        }, error => {
          console.log('erro: ' + error)
          reject(error);
        });
    });
  }

  getJobs() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log('Erro ao lista: ' + error);
        });
    });
  }
}


