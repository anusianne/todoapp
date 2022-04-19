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
import { FormGroup, FormControl } from '@angular/forms';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';



@Component({ selector: 'lib-task-list', templateUrl: './task-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class TaskListComponent {
    
   readonly removeTask: FormGroup = new FormGroup({
    id: new FormControl(),
  });

  tasks$: Observable<TaskDTO[]> =
    this._getsAllTaskDto.getAll();

  constructor(
    
    @Inject(GETS_ALL_TASK_DTO)   
    private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(ADDS_TASK_DTO)
    private _addsTaskDto: AddsTaskDtoPort,
    @Inject(REMOVES_TASK_DTO)
    private _removesTaskDto: RemovesTaskDtoPort,
  ) { }

  onAddTaskClicked(addTask: FormGroup): void {
    this._addsTaskDto.add({
      text: addTask.get('text')?.value,
    });
  }

  onSwitchClicked(): void {
    console.log("test");
    var auxForm = document.getElementById('auxform');
    if(auxForm != null)
      auxForm.style.display = "block";
    var switcher = document.getElementById('switch');
    if (switcher != null)
      switcher.style.display = "none";
  }
  

  onItemClicked(addTask: FormGroup): void {
    this._addsTaskDto.add({
      text: addTask.get('text')?.value,
    });
  }

  onClickDeleted(taskId: string): void {
    this._removesTaskDto.remove(taskId)
  }
}

