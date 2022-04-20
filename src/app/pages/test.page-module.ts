import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestPage } from './test.page';
import { TestComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/test.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TestPage,
        }
      ]),
  TestComponentModule
],
  	declarations: [TestPage],
  	providers: [],
  	exports: [] })
export class TestPageModule {
}
