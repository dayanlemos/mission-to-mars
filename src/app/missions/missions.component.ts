import {Component, OnInit} from '@angular/core';
import {Mission} from './missions.model';
import {MissionService} from './missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css'],
  providers: [MissionService]
})
export class MissionsComponent implements OnInit {

  selectedMission: Mission;

  constructor(private missionService: MissionService) { }

  ngOnInit() {
  }
}



