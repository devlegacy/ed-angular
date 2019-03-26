import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {

  user = {
    name : 'Samuel R.',
  };
  placeholder = {
    name: 'Name'
  };
  constructor() { }

  /**
   * Ciclo de vida del componente
   * Cargar configuraciones
   * https://angular.io/guide/lifecycle-hooks
   */
  ngOnInit() {
    setTimeout(() => {
      this.user.name = "Dynamic name :D";
      this.placeholder.name = 'Last name';
    },1500);
  }

  onKeyUp($event) {
    console.log('[keyup]: ',$event);
  }
  onBlur($event) {
    console.log('[blur]: ',$event);
  }
}
