import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationRouting } from './app.routing';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ShoppingService } from './services/shopping.service';
import { ProductService } from './services/product.service';

const applicationRoutes: Routes = ApplicationRouting;

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [
    ShoppingService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
