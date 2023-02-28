import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './components/system/system.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: 'team', pathMatch: 'full' },
  { path: 'team', component:TeamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
