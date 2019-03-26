import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Apod } from '../model/apod';
import { map, tap, catchError } from "rxjs/operators";
// import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { Observable, throwError } from 'rxjs';
import { MarsImage } from '../model/mars-image';
import { ApodError } from '../model/apod-error';

const API_KEY = 'DEMO_KEY';
const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  // private readonly _DATA: Apod = {
  //   date: "2006-04-15",
  //   explanation: "In this stunning cosmic vista, galaxy M81 is on the left surrounded by blue spiral arms.  On the right marked by massive gas and dust clouds, is M82.  These two mammoth galaxies have been locked in gravitational combat for the past billion years.   The gravity from each galaxy dramatically affects the other during each hundred million-year pass.  Last go-round, M82's gravity likely raised density waves rippling around M81, resulting in the richness of M81's spiral arms.  But M81 left M82 with violent star forming regions and colliding gas clouds so energetic the galaxy glows in X-rays.  In a few billion years only one galaxy will remain.",
  //   hdurl: "https://apod.nasa.gov/apod/image/0604/M81_M82_schedler_c80.jpg",
  //   media_type: "image",
  //   service_version: "v1",
  //   title: "Galaxy Wars: M81 versus M82",
  //   url: "https://apod.nasa.gov/apod/image/0604/M81_M82_schedler_c25.jpg"
  // };

  // Dependency injection
  constructor(private _httpClient: HttpClient) { }

  getApod(): Observable<Apod | ApodError> {
    // return this._DATA;
    return this._httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`)
      .pipe(
        catchError(err => this._handleHttpError(err))
      );
  }

  private _handleHttpError(err: HttpErrorResponse): Observable<ApodError> {
    let dataError = new ApodError(100, err.statusText, 'An error occurred retreiving data');

    return throwError(dataError);
  }

  getMarsImages(camera: string = 'CHEMCAM'): Observable<any> {
    return this._httpClient.get<any>(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`);
  }
}
