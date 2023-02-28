import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';

import { SystemComponent } from './components/system/system.component';
import { TeamComponent } from './components/team/team.component';


@NgModule({
  declarations: [
    SystemComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
  ]
})
export class SystemModule { }
