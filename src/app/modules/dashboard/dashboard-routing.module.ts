import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardComponent,

    children: [
      
      {
        path: 'enroll',
        loadChildren : () => import("../enroll/enroll.module").then(m=>m.EnrollModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

