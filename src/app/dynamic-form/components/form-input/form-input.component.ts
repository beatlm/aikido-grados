import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mr-form-input-component',
  template: 
  `
  <div [class]= "config.divClass"
    [formGroup]="group">
    <label>{{ config.label }}</label>
    <input
      [value]="config.value"
      [attr.disabled]="config.disabled"
      [attr.type]="config.inputType"
      [class] ="config.class"
      [attr.placeholder]="config.placeholder"
      [formControlName]="config.name"
      (focus)="config.change()"
      />
  </div>
  `,
  styles: []
})
export class FormInputComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
