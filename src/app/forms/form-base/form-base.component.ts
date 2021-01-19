import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/models/field';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  public field: Field;
  public group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
