import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-button-component",
  template: `
  <div [class]= "config.divClass" 
      [formGroup]="group">
      <button *ngFor="let button of config.buttons" [type]="button.buttonType" [class]="button.class" (click)="button.click()">
        {{ button.label }}
      </button>
    </div>
  `,
  styles: []
})
export class FormButtonComponent implements OnInit {
@Input()
click;
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
