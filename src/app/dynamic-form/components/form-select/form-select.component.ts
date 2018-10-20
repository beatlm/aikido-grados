import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-select-component",
  template: `
  <div [class]= "config.divClass"
  [formGroup]="group">
  <label>{{ config.label }}</label>
  <select [formControlName]="config.name" [class]="config.class">
    <option *ngFor="let option of config.options">
      {{ option }}
    </option>
  </select>
  <div class="d-inline p-2">
  <input disabled
  [value]="config.value"
  [attr.type]="config.inputType"
  [class] ="config.class"
  [attr.placeholder]="config.placeholder"
  [formControlName]="config.name"
  />
  </div>
</div>
  `,
  styles: []
})
export class FormSelectComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
