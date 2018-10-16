import { CreateComponent } from './views/create/create.component';

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

 const routes: Routes = [

  {
    path: "create",
    component: CreateComponent,

  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

