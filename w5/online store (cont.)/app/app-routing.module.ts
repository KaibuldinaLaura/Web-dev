import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CoatItemComponent } from './coat-item/coat-item.component';
import { DressItemComponent } from './dress-item/dress-item.component';
import { JeansItemComponent } from './jeans-item/jeans-item.component';
import { SkirtItemComponent } from './skirt-item/skirt-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full'},
  { path: 'categories', 
    component: CategoryListComponent,
    children: [
      { path: 'coat', component: CoatItemComponent},
      { path: 'dress', component: DressItemComponent},
      { path: 'jeans', component: JeansItemComponent},
      { path: 'skirt', component: SkirtItemComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ProductItemComponent
]
