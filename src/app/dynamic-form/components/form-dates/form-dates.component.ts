import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-input-component",
  template: `

  <div [class]= "config.divClass"  [formGroup]="group" >
  <label [class] ="config.labelClass">{{config.label}}</label>
      <input  
      type="date"
      [value]="config.value | date:'yyyy-MM-dd'"
      [attr.disabled]="config.disabled"
      [class] ="config.class"
      placeholder="dd/mm/aaaa"
      [formControlName]="config.name"
       />
  </div>
  `,
  styles: []
})
export class FormDatesComponent implements OnInit {
  config;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
