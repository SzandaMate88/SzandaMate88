import { Pirate } from "./Pirate";
import { Captain } from "./Captain";
import { pirateArray } from "./pirateNames";

export class Ship {
  private _crew: Pirate[];
  private _hasCaptin: boolean;
  private _name: string;
  private _maxCrew: number;

  constructor(name:string) {
    this._name = name;
    this._hasCaptin = false;
    this._crew = [];
    this._maxCrew = 20;
  }

  battle(enemy: Ship) {
    if (this.calculateScore() >= enemy.calculateScore()) {
      this.ravel();
      enemy.massacre();
    } else {
      enemy.ravel();
      this.massacre();
    }
  } 

  ravel() {
      this._crew = this.getAliveCrew();
      this._crew.forEach((pirate) => {
        let rumCount: number = Math.floor(Math.random() * 5);
        for (let i: number = 0; i <= rumCount; i++) {
          pirate.drinkSomeRum();
        }

      })
    }

  massacre() {
      this._crew = this.getAliveCrew();
      let bodyCount : number = Math.ceil(Math.random() * this._crew.length);
      this._crew.forEach((pirate) => {
        let russianRulett: number = Math.floor(Math.random() * 2)
          if (russianRulett === 0) {
            pirate.die();
            bodyCount--;
          }
      })
    }
  

  

  private calculateScore(): number {
    let captain = this._crew[0];
    return this.getAliveCrew().length - captain.intoxicationLevel;
  }
  
  fillShip(): void {
    // TODO : rewrite so dead pirates get removed from array and fillCount balance
    let fillCount: number = Math.ceil(Math.random() * 19);
    if (!this._hasCaptin) {
      let nameIndex: number = Math.ceil(Math.random() * (pirateArray.length - 1));
      this._crew.push(new Captain(pirateArray[nameIndex]));
      this._hasCaptin = true;
    } 
    for (let i: number = 0; i < fillCount; i++) {
      let nameIndex: number = Math.ceil(Math.random() * (pirateArray.length - 1));
      this._crew.push(new Pirate(pirateArray[nameIndex]));
    }
  }
  
  printShipStatus(): void {
    let captain = this._crew[0];
    let shipStatus: string = `Captain ${captain.pirateName}'s consumed rum: ${captain.intoxicationLevel}
      ${captain.pirateState}
      avaiable crew : ${this.getAliveCrew().length}`;
    console.log(shipStatus);
  }

  private getAliveCrew(): Pirate[] {
    return this._crew.filter((pirate) => pirate.isPirateAlive);
  }
}