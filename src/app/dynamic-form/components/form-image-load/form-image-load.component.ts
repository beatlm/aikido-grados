import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-image-load",
  template: `
 
  
      <div class="file-div  container-fluid" [formGroup]="group">
         <label>{{ config.label }}</label>
         <div [class]="config.divClass">
          <label class="file-label"> {{ [config.fileName ]}}</label>
          <button  class="btn-inline btn btn-primary" (click)="fileInput.click()" type="button">
            <span>Cargar fichero...</span>
            <input  #fileInput hidden [formControlName]="config.name" type="file" (change)="config.change($event)" >
          </button>

          <button *ngFor="let button of config.buttons" [type]="button.buttonType" [class]="button.class" (click)="button.click()">
          {{ button.label }}
        </button>
        </div>
      </div>

  `,
  styles: []
})
export class FormImageLoadComponent implements OnInit {
  @Input()
  click;
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
