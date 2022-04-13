import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FirebaseTaskServiceModule } from '../../secondary/infrastructure/firebase-task.service-module';


@NgModule({ imports: [CommonModule, ReactiveFormsModule, RouterModule, FirebaseTaskServiceModule],
  	declarations: [AddTaskComponent],
  	providers: [],
  	exports: [AddTaskComponent] })
export class AddTaskComponentModule {
}
