import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  error: string;
  // Dependency Injection
  constructor(private _nasaApi: NasaApiService) { }

  ngOnInit() {

    this._nasaApi.getApod()
    .subscribe( // Needs susbcribe to Observable
      (data: Apod) => {
        setTimeout(() => this.apod = data, 1500);
      },
      (error: any) => {
        setTimeout(() => {
          console.log('Error al conectar al servidor :(', error);
          this.error = 'Error al conectar al servidor :(';
        }, 1500);
      },
      () => console.log('All done getting data')
    );

  }

}
