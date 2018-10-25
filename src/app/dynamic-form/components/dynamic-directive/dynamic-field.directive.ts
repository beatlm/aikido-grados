import { FormImageLoadComponent } from './../form-image-load/form-image-load.component';
import { FormTableComponent } from './../form-table/form-table.component';
import { Directive, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormListComponent } from '../form-list/form-list.component';
import { FormDatesComponent } from '../form-dates/form-dates.component';

const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    table: FormTableComponent,
    file:FormImageLoadComponent,
    list:FormListComponent,
    dates:FormDatesComponent
  };

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective {
  @Input() config;

  @Input() group: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  component;
  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;

  }
}