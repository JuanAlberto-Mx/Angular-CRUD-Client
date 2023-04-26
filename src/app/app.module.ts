import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReadProductComponent } from './components/read-product/read-product.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ReadProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule, // Allows including routes
    ReactiveFormsModule // Add Reactive forms properties
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
