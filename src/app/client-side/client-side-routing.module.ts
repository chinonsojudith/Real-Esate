import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [{ path: '', component: ClientSideComponent, children:[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'about', component:AboutComponent},
{path:'properties', component:PropertiesComponent},
{path:'gallery', component:GalleryComponent},
{path:'blog', component:BlogComponent},
{path:'contact', component:ContactComponent},
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
