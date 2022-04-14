import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { AddTaskComponentModule } from '@task';


@NgModule({ imports: [CommonModule, AddTaskComponentModule],
  	declarations: [TaskListComponent],
  	providers: [],
  	exports: [TaskListComponent] })
export class TaskListComponentModule {
}
