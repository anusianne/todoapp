import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ImagesComponentModule } from '../../../projects/nav/src/lib/adapters/primary/ui/images.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
          
        },
      ]),
  ImagesComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
