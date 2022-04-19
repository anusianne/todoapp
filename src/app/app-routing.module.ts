import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AddTaskPageModule } from './pages/add-task.page-module';
import { ListPageModule } from './pages/list.page-module';
import { NavComponentModule } from '@nav';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'atask', 
        loadChildren: () => AddTaskPageModule
      },
  { 
        path: 'list', 
        loadChildren: () => ListPageModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
