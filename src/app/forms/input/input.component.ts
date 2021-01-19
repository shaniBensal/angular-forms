import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends FormBaseComponent implements OnInit{
  constructor() {
    super()
   }

  ngOnInit() {
  }

}
