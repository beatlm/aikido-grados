import { UserResolverService } from "./services/user-resolver.service";
import { UserServiceService } from "./services/user-service.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import "rxjs/add/operator/map";
import { AppComponent } from "./app.component";
import { CreateComponent } from "./views/create/create.component";
import { AppRoutingModule } from "./app.routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormModule } from "./dynamic-form/dynamic-form.module";
import { SearchComponent } from "./views/search/search.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DynamicFormModule,
    HttpClientModule
  ],
  providers: [UserServiceService, UserResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
