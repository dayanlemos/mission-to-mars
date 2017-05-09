import {EventEmitter, Injectable} from '@angular/core';
import {Mission} from './missions.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {
  missionsChanged = new Subject<Mission[]>();
  missionSelected = new EventEmitter<Mission>();
  newMission: Boolean = true;

  private missions: Mission[] = [
    new Mission(1, 'Mars Orbiter Mission 1', '2013', 'Orbiter', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(2, 'MAVEN', '2013', 'Orbiter', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(3, 'ExoMars Trace Gas Orbiter', '2016', 'Orbiter', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(4, 'Schiaparelli EDM lander', '2016', 'Lander', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(5, 'Red Dragon 2018', '2018', 'Lander', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(6, 'InSight', '2018', 'Lander', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(7, '2020 Chinese Mars Mission', '2020', 'Orbiter, lander, rover', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(8, 'Mangalyaan 2', '2020', 'Orbiter. Optional: lander, rover', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Mission(9, 'Emirates Mars Mission', '2020', 'Orbiter', 'Planned launch', 'Lorem ipsudolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  ];

  getMissions() {
    return this.missions.slice();
  }

  getMission(id: number) {
    for (let mission of this.missions) {
      if (mission.id == id){
        return mission;
      }
    }
  }

  addMission(mission: Mission) {
    console.log(mission);
    this.missions.push(new Mission(this.missions[this.missions.length - 1].id + 1, mission.name, mission.launchDate, mission.notes, mission.status, mission.description));
    this.missionsChanged.next(this.missions.slice());
    console.log(this.missions);
  }

  updateMission(id: number, newMission: Mission) {
    newMission.id = id;
    this.missions.forEach((item, index) => {
      if (item.id == id) {
        this.missions[index] = newMission;
        this.missionsChanged.next(this.missions.slice());
      }
    });


  }

  deleteMission(id: number) {
    this.missions.forEach((item, index) => {
      if (item.id == id) {
        this.missions.splice(index, 1);
        this.missionsChanged.next(this.missions.slice());
      }
    });
  }



  insertMission(id: number, name: string, launchDate: string, notes: string, status: string, description: string) {
    console.log(name);
    this.missions.push(new Mission(id, name, launchDate, notes, status, description));
  }

}
