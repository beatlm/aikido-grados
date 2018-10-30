import { CreateComponent } from './views/create/create.component';

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { SearchComponent } from './views/search/search.component';
import { UserResolverService } from './services/user-resolver.service';

 const routes: Routes = [

  {
    path: "create",
    component: CreateComponent,

  },
  {
    path: "user/:id",
    component: CreateComponent,
    resolve: {
      user: UserResolverService
    }
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

