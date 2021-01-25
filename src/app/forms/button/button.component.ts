import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends FormBaseComponent implements OnInit{
  // @Output() public onButtonClickedEmmiter: EventEmitter<void> = new EventEmitter<void>();
  constructor() {
    super()
   }

  ngOnInit() {
  }

  public onButtonClicked(): void {
    this.field.formData.onClick(this.group)
  }

}
