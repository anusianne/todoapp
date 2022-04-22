import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, map } from 'rxjs';
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
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
  

@Component({ selector: 'lib-task-list', templateUrl: './task-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class TaskListComponent {

  private readonly notifier: NotifierService
    
  readonly removeTask: FormGroup = new FormGroup({
    id: new FormControl(),
  });
  
  tasks$: Observable<TaskDTO[]> =
    this._getsAllTaskDto
      .getAll()
      .pipe(map((task: TaskDTO[]) => task.sort((a, b) => (b.created_at) - (a.created_at))));
    
  
  taskIdToBeDeleted: string = "";

  counter: number = 0;

  
  constructor(
    
    @Inject(GETS_ALL_TASK_DTO)
    private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(ADDS_TASK_DTO)
    private _addsTaskDto: AddsTaskDtoPort,
    private _router: Router,
    @Inject(REMOVES_TASK_DTO)
    private _removesTaskDto: RemovesTaskDtoPort,
    notifierService: NotifierService
  ) {this.notifier = notifierService; }

  onAddTaskClicked(addTask: FormGroup): void {
    this._addsTaskDto.add({
      text: addTask.get('text')?.value,
    });
  }

  onSwitchClicked(): void {
    console.log("test");
    var auxForm = document.getElementById('auxform');
    if (auxForm != null)
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

  onDeleteClicked(): void {
    this._removesTaskDto.remove(this.taskIdToBeDeleted)
    this.notifier.notify('success', (++this.counter).toString() + ' task has been deleted!')
  }

  getIdToBeDeleted(taskId: string): void {
    this.taskIdToBeDeleted = taskId
  }

  rerouteToHome(): void {
    this._router.navigateByUrl("");
   }

}





