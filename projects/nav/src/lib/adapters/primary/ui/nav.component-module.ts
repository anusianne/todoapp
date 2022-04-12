import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({ imports: [CommonModule, AppRoutingModule],
  	declarations: [NavComponent],
  	providers: [],
  	exports: [NavComponent] })
export class NavComponentModule {
}
