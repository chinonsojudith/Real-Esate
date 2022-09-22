import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FooterComponent,
    MenuBarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    MenuBarComponent,
    
  ]
})
export class SharedModule { }
