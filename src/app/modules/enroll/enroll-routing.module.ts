import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EnrollComponent } from './enroll.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
   {
    path: '',
    component: EnrollComponent,

    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      },
      {
        path: 'view/:id',
        component: ViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollRoutingModule { }
