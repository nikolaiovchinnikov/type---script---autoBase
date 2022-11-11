import { Driver } from "./Driver";
import { Truck } from "./Truck";
import { TruckState } from "./TruckState"; 


const john = new Driver("John", "Doe", 35, 10);
const jack = new Driver("Jack", "Rose", 55, 30);
const jane = new Driver("Jane", "McClein", 45, 15);

const renault = new Truck(1, "Renault Magnum", john);
const volvo = new Truck(2, "Volvo FH12", jack);
const daf = new Truck(3, "DAF XF", jane);

const trucks: Truck[] = [renault, volvo, daf];
const state = new TruckState(trucks)
for (let key of trucks) {
    key.state = state
}

console.log(state.state())
console.log(state.stateID(1))

