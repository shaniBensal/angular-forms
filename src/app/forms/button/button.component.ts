import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends FormBaseComponent implements OnInit{
  constructor() {
    super()
   }

  ngOnInit() {
  }

}
