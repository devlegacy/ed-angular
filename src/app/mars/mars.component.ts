import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service'

@Component({
  selector: 'ed-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {
  marsImages: MarsImage[];
  cameras: string[] = [
    'MAST',
    'CHEMCAM',
    'NAVCAM'
  ];
  currentCamera:string;
  //Dependency injection
  constructor(private _nasaApiService: NasaApiService) { }

  ngOnInit() {
    this.currentCamera = this.cameras[0];
    this.refreshView(this.currentCamera);
  }

  onSelectCamera(camera:string) {
    this.refreshView(camera);
  }

  private refreshView(camera:string) {
    this._nasaApiService.getMarsImages(camera).subscribe((data) => {
      this.marsImages = data.photos;
    });
  }

}
