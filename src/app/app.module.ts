import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductModule } from "./product/product.module";
import { AppRoutingModule } from "./app-routing.module";
import { CartModule } from "./cart/cart.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
