import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CoatItemComponent } from './coat-item/coat-item.component';
import { DressItemComponent } from './dress-item/dress-item.component';
import { JeansItemComponent } from './jeans-item/jeans-item.component';
import { SkirtItemComponent } from './skirt-item/skirt-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesService } from './categories.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductItemComponent,
    CoatItemComponent,
    DressItemComponent,
    JeansItemComponent,
    SkirtItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
