import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, AppRoutingModule, RouterModule],
  	declarations: [NavComponent],
  	providers: [],
	exports: [NavComponent]
})
	
export class NavComponentModule {
	
}
