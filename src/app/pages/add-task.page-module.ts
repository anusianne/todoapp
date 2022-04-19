import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import { FirebaseTaskServiceModule } from '@task';
import { AddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task.component-module';
import { ImagesComponentModule } from '../../../projects/nav/src/lib/adapters/primary/ui/images.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AddTaskPage,
        }
      ]),
  FirebaseTaskServiceModule,
  AddTaskComponentModule,
  ImagesComponentModule
],
  	declarations: [AddTaskPage],
  	providers: [],
  	exports: [] })
export class AddTaskPageModule {
}
