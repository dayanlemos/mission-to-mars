export class Mission {

  public id: number;
  public name: string;
  public launchDate: string;
  public notes: string;
  public status: string;
  public description: string;

  constructor(id: number, name: string, launchDate: string, notes: string, status: string, description: string){
    this.id = id;
    this.name = name;
    this.launchDate = launchDate;
    this.notes = notes;
    this.status = status;
    this.description = description;
  }

}
