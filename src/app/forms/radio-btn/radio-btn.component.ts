import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';

@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss']
})
export class RadioBtnComponent extends FormBaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
    console.log(this.group);
  }

}
