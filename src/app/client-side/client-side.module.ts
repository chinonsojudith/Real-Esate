import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import{ReactiveFormsModule}from '@angular/forms'


@NgModule({
  declarations: [
    ClientSideComponent,
    HomeComponent,
    AboutComponent,
    PropertiesComponent,
    GalleryComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientSideModule { }
