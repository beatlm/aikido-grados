import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-table",
  template: `
  <div [class]= "config.divClass"
  [formGroup]="group">
  <table [class] ="config.class">
  <thead> 
  <tr *ngIf="config.list != null" class="bg-dark text-light">
<td> Nombre</td>
<td> Email</td>
<td> Estado</td>
<td> </td>
  </tr>
  </thead >
  <tr *ngFor="let data of config.list;let i = index">
      <td>{{data.name}}</td>
      <td>{{data.email}}</td>
      <td>{{data.status}}</td>
      <td>
      <div (click)="config.click(data.id)">
          <a class="btn-small" (click)="config.click(data.id)">
              <i class="material-icons left">Ver</i>
          </a>
          </div>
      </td>
  </tr>
  <div *ngIf="config.list == null">
    Lo sentimos, no se han encontrado usuarios con ese nombre.
</div>
</table>
</div>
  `,
  styles: []
})
export class FormTableComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
