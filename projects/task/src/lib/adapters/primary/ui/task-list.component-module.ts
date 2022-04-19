import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { AddTaskComponentModule } from '@task';
import { RouterModule } from '@angular/router';



@NgModule({ imports: [CommonModule, AddTaskComponentModule, RouterModule],
  	declarations: [TaskListComponent],
  	providers: [],
  	exports: [TaskListComponent] })
export class TaskListComponentModule {
}
