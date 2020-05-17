import { Ship } from "./Ship";


export class Armada {
  private _name: string;
  private _fleet: Ship[];

  constructor(name: string) {
    this._name = name;
    this._fleet =[]
  }

  addShip(vessel: Ship) {
    this._fleet.push(vessel);
  }
}