import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollComponent } from './enroll.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from 'src/app/common/common-module';

@NgModule({
  declarations: [EnrollComponent, ListComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrollRoutingModule

  ]
})
export class EnrollModule { }
