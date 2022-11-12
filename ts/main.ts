import { Driver } from "./Driver";
import { Truck } from "./Truck";
import { TruckState } from "./TruckState"; 
import  { bool, str } from "../ts/TYPE"
import { InBaseState, InRunState, InRepairState  } from "./TruckState";


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

let stringMenu:str = "1  =  Отобразить текущее состояние грузовиков\n2  =  Показать данные грузовика по id\n3  =  Обновить состояние грузовика\nОтмена  =  Завершить программу"
let cicle:bool = true
while(cicle){
    const inbasestate:InBaseState = new InBaseState(trucks)
    const inrunstate:InRunState = new InRunState(trucks)
    const inrepairstate:InRepairState = new InRepairState(trucks)
    let userChoce:str|null = prompt(stringMenu)
    if (userChoce === null){
        cicle = false
    }
    else if (userChoce === "1"){
        console.log(state.state())
    }
    else if (userChoce === "2"){
        let id = prompt("Введите id")
        let idNum = parseInt(<str>id)
        if (isNaN( idNum)) {
            alert ("Такой команды или индекса нет")
            break 
        }
        for (let i = 0; i < trucks.length; i++) {
            if (trucks[i].stateReturn.id +"" === id){
                console.log(state.stateID(idNum))
            }
        }
    }
    else if (userChoce === "3"){
        let userComandId = <str>prompt ("ведите через пробел номер и команду")
        let userComandIdList = userComandId.split(" ")
        for (let i = 0; i < trucks.length; i++) {
            if(state._trucks[i].stateReturn.id+ "" === userComandIdList[0] && state._trucks[i].sring === "base"){
                if(userComandIdList[1] === "run"){
                    inbasestate.startRun(i)
                }
                else if(userComandIdList[1] === "repair"){
                    inbasestate.startRepair(i)
                }
                else if(userComandIdList[1] === "base"){
                    inbasestate.сhangeDriver()
                }
            }

            else if(state._trucks[i].stateReturn.id+ "" === userComandIdList[0] && state._trucks[i].sring === "run"){
                if(userComandIdList[1] === "run"){
                    inrunstate.startRun()
                }
                else if(userComandIdList[1] === "repair"){
                    inrunstate.startRepair(i)
                }
                else if(userComandIdList[1] === "base"){
                    inrunstate.сhangeDriver()
                }
            }

            else if(state._trucks[i].stateReturn.id+ "" === userComandIdList[0] && state._trucks[i].sring === "repair"){
                if(userComandIdList[1] === "run"){
                    inrepairstate.startRun(i)
                }
                else if(userComandIdList[1] === "repair"){
                    inrepairstate.startRepair()
                }
                else if(userComandIdList[1] === "base"){
                    inrepairstate.сhangeDriver()
                }
            }
        }
    }
}


