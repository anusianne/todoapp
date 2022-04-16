import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListPage } from './list.page';
import { TaskListComponentModule } from '@task';
import { FirebaseTaskServiceModule } from '@task';


@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ListPage,
        },
      ]),
  TaskListComponentModule,
  FirebaseTaskServiceModule,
],
  	declarations: [ListPage],
  	providers: [],
  	exports: [] })
export class ListPageModule {
}