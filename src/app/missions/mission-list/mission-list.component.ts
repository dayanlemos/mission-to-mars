import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import {Mission} from '../missions.model';
import {MissionService} from '../missions.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  @Input() mission: Mission;
  @Input() index: number;

  missions: Mission[];
  subscription: Subscription;

  constructor(private missionService: MissionService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.missionService.missionsChanged
      .subscribe(
        (missions: Mission[]) => {
          this.missions = missions;
        }
      );
    this.missions = this.missionService.getMissions();
  }

  selectItem(mission) {
    console.log(mission);
    this.missionService.missionSelected.emit(mission);
  }

  newItem() {
    this.missionService.newMission = true;
  }

  onNewMission() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  addItem() {
    this.missionService.newMission = true;
    //this.missionService.insertMission('aasd', 'basdf', 'casdf', 'asdfd', 'sde');
    //this.missions = this.missionService.getMissions();
  }

}
