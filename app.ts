import { Pirate } from "./Pirate";
import { type } from "os";
import { Ship } from "./Ship";
import { Armada } from "./Armada";



let Maria : Ship = new Ship('Maria');
let Bismark: Ship = new Ship('Bismark');
let Yamato: Ship = new Ship('Yamato');
let Tirpicz: Ship = new Ship('Tirpicz');
let Argo: Ship = new Ship('Argo');
let SantaMaria: Ship = new Ship('Santa Maria');

Maria.fillShip();
Bismark.fillShip();

Bismark.printShipStatus();
Maria.printShipStatus();

Bismark.battle(Maria);

Bismark.printShipStatus();
Maria.printShipStatus();





