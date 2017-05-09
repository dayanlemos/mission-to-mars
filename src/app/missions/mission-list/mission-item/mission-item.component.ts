import { Component, OnInit, Input } from '@angular/core';

import { Mission } from '../../missions.model';
import { MissionService } from '../../missions.service';

@Component({
  selector: 'app-mission-item',
  templateUrl: './mission-item.component.html',
  styleUrls: ['./mission-item.component.css']
})
export class MissionItemComponent implements OnInit {
  @Input() mission: Mission;
  constructor(private missionService: MissionService) { }

  ngOnInit() {
  }

  onSelected() {
    console.log(this.mission);
    this.missionService.missionSelected.emit(this.mission);
  }

}
