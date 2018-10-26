import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-input-component",
  template: `
  <div [class]= "config.divClass">
    <label [class] ="config.labelClass">Fecha Alta</label>
    <label [class] ="config.labelClass">Fecha Email</label>
    <label [class] ="config.labelClass">Fecha Cobrado</label>
</div>
<div [class]= "config.divClass"  [formGroup]="date">
      <input
      type="date"
      [value]="config.fechaAlta"
        [attr.disabled]="config.disabled"
        [class] ="config.class"
        placeholder="dd/mm/aaaa"
        [formControlName]="createDate"
        />
    <input
      type="date"
      [value]="config.fechaEmail"
      [attr.disabled]="config.disabled"
      [class] ="config.class"
      placeholder="dd/mm/aaaa"
      [formControlName]="emailDate"
      />

      <input
      type="date"
      [value]="config.fechaCobrado"
        [attr.disabled]="config.disabled"
        [class] ="config.class"
        placeholder="dd/mm/aaaa"
        [formControlName]="paymentDate"
        />
  </div>


  <div [class]= "config.divClass">
  <label [class] ="config.labelClass">Fecha Enviado</label>
  <label [class] ="config.labelClass">Fecha Recibido</label>

</div>
<div [class]= "config.divClass"  [formGroup]="date">
      <input
      type="date"
      [value]="config.fechaEnviado"
      [attr.disabled]="config.disabled"
      [class] ="config.class"
      placeholder="dd/mm/aaaa"
      [formControlName]="sentDate"
      />

      <input
      type="date"
      [value]="config.fechaRecibido"
      [attr.disabled]="config.disabled"
      [class] ="config.class"
      placeholder="dd/mm/aaaa"
      [formControlName]="receivedDate"
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
