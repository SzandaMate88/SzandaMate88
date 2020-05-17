export class Pirate {
  private _intoxication : number;
  private _name: string;
  private _isAlive: boolean;
  private _state: string;
  
  constructor(name:string) {
    this._name = name;
    this._intoxication = 0;
    this._isAlive = true;
    this._state = 'Sober';
  }

  drinkSomeRum(): void {
    this._intoxication++;
  }

  howsItGoingMate(): string {
    if (this._intoxication >= 5) {
      this._state = 'Wasted!';
      return `I'ma Pirate. How d'ya d'ink its goin?`;
    }
    return "Pour me anudder!";
  }

  get intoxicationLevel(): number {
    return this._intoxication;
  }

  die(): void {
    this._isAlive = false;
    this._state = "He's DEAD!";
  }

  brawl(enemy: Pirate): void {
    //if (enemy._isAlive) {} 
    if (enemy._isAlive === true) {
      let chance: number = Math.ceil(Math.random() * 3);
      switch(chance) {
        case 1:
          this.die();
          break;
        case 2:
          enemy.die();
          break;
        case 3:
          console.log('They both pass out');
          break;
        default:
          console.log('LAndLubbers!!')  
      }
    }
  }

  get pirateName(): string {
    return this._name;
  } 

  get pirateState(): string {
    return this._state;
  }

  get isPirateAlive(): boolean {
    return this._isAlive;
  }
}