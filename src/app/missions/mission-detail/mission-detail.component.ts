import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Mission} from '../missions.model';
import {MissionService} from '../missions.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  mission: Mission;
  id: number;

  constructor(private missionService: MissionService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.mission = this.missionService.getMission(this.id);
        }
      );
  }

  onEditMission() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteMission() {
    this.missionService.deleteMission(this.id);
    this.router.navigate(['/missions']);
  }

}
