import { CreateComponent } from './views/create/create.component';

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { SearchComponent } from './views/search/search.component';
import { UserResolverService } from './services/user-resolver.service';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/authenticate.guard';

 const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "create",
    component: CreateComponent,
    canActivate: [AuthGuard] 

  },
  {
    path: "user/:id",
    component: CreateComponent,
    canActivate: [AuthGuard] ,
    resolve: {
      user: UserResolverService
    }
  },
  {
    path: "search",
    canActivate: [AuthGuard] ,
    component: SearchComponent,
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

