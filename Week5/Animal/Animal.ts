'use strict';

export class Animal {
  private name: string;
  private hunger: number = 50;
  private thirst: number = 50;

  constructor(name: string, hunger?: number,thirst?:number) {
    this.name = name
  }
  eat() {
    this.hunger -= 1;
  }
  drink() {
    this.thirst -= 1;
  }
  play() {
    this.hunger +=1
    this.thirst +=1
  }
}