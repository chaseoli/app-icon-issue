import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WalletModule } from "@carbon/icons-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WalletModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
