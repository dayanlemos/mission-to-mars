import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsComponent } from './missions/missions.component';
import { MissionDetailComponent } from './missions/mission-detail/mission-detail.component';
import { MissionStartComponent } from './missions/mission-start/mission-start.component';
import { MissionEditComponent } from './missions/mission-edit/mission-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionsComponent, children: [
    { path: '', component: MissionStartComponent },
    { path: 'new', component: MissionEditComponent },
    { path: ':id', component: MissionDetailComponent },
    { path: ':id/edit', component: MissionEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
