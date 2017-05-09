import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MissionsComponent } from './missions/missions.component';
import { MissionListComponent } from './missions/mission-list/mission-list.component';
import { MissionDetailComponent } from './missions/mission-detail/mission-detail.component';
import { MissionItemComponent } from './missions/mission-list/mission-item/mission-item.component';
import { AppRoutingModule } from './app-routing.module';
import { MissionStartComponent } from './missions/mission-start/mission-start.component';
import { MissionEditComponent } from './missions/mission-edit/mission-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MissionsComponent,
    MissionListComponent,
    MissionDetailComponent,
    MissionItemComponent,
    MissionStartComponent,
    MissionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
