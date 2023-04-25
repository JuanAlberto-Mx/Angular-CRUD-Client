import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports to use the Routes in the project
import { Routes, RouterModule } from '@angular/router';

// Imports to add the ReadProduct and CreateProduct components
import { ReadProductComponent } from './components/read-product/read-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

// Routes to render specific components in the web page
const routes: Routes = [

  // Render the ReadComponent whenever the user enter http://localhost:4200
  {path: '', component: ReadProductComponent},

  // Render the CreateComponent whenever the user enter http://localhost:4200/create-product
  {path: 'create-product', component: CreateProductComponent},

  // Render the CreateComponent whenever the user enter http://localhost:4200/update-product/<id>
  {path: 'update-product/:id', component: CreateProductComponent},
  
  // Redirect to the main path whenever the user enter a different address
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
