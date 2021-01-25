import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field';
import { componentMapper } from './component-mapper';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() public field: Field;
  @Input() public group: FormGroup;
  public componentRef: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }
  ngOnInit() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}
