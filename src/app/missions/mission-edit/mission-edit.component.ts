import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Mission } from '../missions.model';
import { MissionService } from '../missions.service';

@Component({
  selector: 'app-mission-edit',
  templateUrl: './mission-edit.component.html',
  styleUrls: ['./mission-edit.component.css']
})
export class MissionEditComponent implements OnInit {

  id: number;
  editMode = false;
  missionForm: FormGroup;
  mission: Mission;

  constructor(private route: ActivatedRoute,
              private missionService: MissionService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
          console.log(this.id);
          //this.mission = this.missionService.getMission(this.id);
        }
      );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let missionName = '';
    let missionLaunchDate = '';
    let missionNotes = '';
    let missionStatus = '';
    let missionDescription = '';

    if (this.editMode) {
      const mission = this.missionService.getMission(this.id);
      missionName = mission.name;
      missionLaunchDate = mission.launchDate;
      missionNotes = mission.notes;
      missionStatus = mission.status;
      missionDescription = mission.description;
    }
    this.missionForm = new FormGroup({
      'name': new FormControl(missionName, Validators.required),
      'launchDate': new FormControl(missionLaunchDate, Validators.required),
      'notes': new FormControl(missionNotes, Validators.required),
      'status': new FormControl(missionStatus, Validators.required),
      'description': new FormControl(missionDescription, Validators.required)
    });
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    console.log('edidtMode: '+this.editMode);
    if (this.editMode) {
      this.missionService.updateMission(this.id, this.missionForm.value);
    } else {
      this.missionService.addMission(this.missionForm.value);
    }
    this.onCancel();
  }

}
