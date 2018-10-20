import { CreateComponent } from './views/create/create.component';

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { SearchComponent } from './views/search/search.component';

 const routes: Routes = [

  {
    path: "create",
    component: CreateComponent,

  },
  {
    path: "",
    component: SearchComponent,

  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

