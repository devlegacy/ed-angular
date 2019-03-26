import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.scss']
})
export class MaterialButtonComponent implements OnInit {

  frm = {
    valid: true,
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.frm.valid = false;
    }, 1500)
  }

  onClick($event) {
    console.log('Click',$event);
  }
}
