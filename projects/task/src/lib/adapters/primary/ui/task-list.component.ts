import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import { Inject } from '@angular/core';
import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { FormGroup } from '@angular/forms';

@Component({ selector: 'lib-task-list', templateUrl: './task-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class TaskListComponent {
    
  tasks$: Observable<TaskDTO[]> =
    this._getsAllTaskDto.getAll();

  constructor(
    
    @Inject(GETS_ALL_TASK_DTO)
      
    private _getsAllTaskDto: GetsAllTaskDtoPort,
      
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort
  ) { }

  onAddTaskClicked(addTask: FormGroup): void {
    this._addsTaskDto.add({
      text: addTask.get('text')?.value,
    });
  }

  onItemClicked(addTask: FormGroup): void {
    this._addsTaskDto.add({
      text: addTask.get('text')?.value,
    });
  }
}