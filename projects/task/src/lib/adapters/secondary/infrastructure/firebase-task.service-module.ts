import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTaskService } from './firebase-task.service';
import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';
import { GETS_ALL_TASK_DTO } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO } from '../../../application/ports/secondary/removes-task.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTaskService, { provide: ADDS_TASK_DTO, useExisting: FirebaseTaskService },  { provide: GETS_ALL_TASK_DTO, useExisting: FirebaseTaskService }, { provide: REMOVES_TASK_DTO, useExisting: FirebaseTaskService }],
  	exports: [] })
export class FirebaseTaskServiceModule {
}
