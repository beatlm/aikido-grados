import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-list-component",
  template: `
  <div [class]= "config.divClass" 
      [formGroup]="group">
      <ul>
      <li *ngFor="let date of config.dates" >{{date}}</li>
      </ul>

    </div>
  `,
  styles: []
})
export class FormListComponent implements OnInit {
@Input()
click;
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
