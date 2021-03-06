import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { Router } from '@angular/router';

@Component({ selector: 'lib-add-task', templateUrl: './add-task.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {
  readonly addTask: FormGroup = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    @Inject(ADDS_TASK_DTO)
    private _addsTaskDto: AddsTaskDtoPort,
    private _router: Router,
  ) { }


  onAddTaskClicked(addTask: FormGroup): void {
    this._addsTaskDto.add({
      text: addTask.get('text')?.value,
      created_at: Date.now()
    });
    //if (window.location.toString() == 'localhost/list')
   // window.location.reload();
  } 
}
