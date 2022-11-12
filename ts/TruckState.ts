import { Truck } from "./Truck";
import { num, str } from "./TYPE";
import { getString } from "./stringMetod";
import { getRandom } from "./stringMetod";
export class TruckState {
    public name :str = ""
    public _trucks!:Truck[] 
    constructor(trucks:Truck[]){
        this._trucks = trucks
    }
    public state = ():str => {
        let strState:str = ""
        let str:any =  ["|",[4,"№"], [15,"Грузовик"], [15,"Водитель"], [12,"Состояние"]]
        strState += getString(str)
        for (let key of this._trucks) {
            let stateList:any = ["|",[4,key.stateReturn.id ], [15,key.stateReturn.name], [15,key.stateReturn.driver.name], [12,key.stateReturn.stringState]]
            strState += getString( stateList)
        }
        return strState
    }
    public stateID = (id:num):str => {
        for (let key of this._trucks ) {
            if (key.stateReturn.id === id ){
                let strId:any = ["|",[10,"Номер"],[15,key.stateReturn.id]]
                strId = getString(strId)
                strId += getString(["|",[10,"Марка"],[15,key.stateReturn.name]])
                strId += getString(["|",[10,"Имя"],[15,key.stateReturn.driver.name]])
                strId += getString(["|",[10,"Состояние"],[15,key.stateReturn.stringState]])
                return strId
            }
        }return ""
    }
}

export class InRunState extends TruckState {
    public override name :str = "run";
    public startRun = () => {
        alert("ошибка - грузовик и так в пути")
    }
    public сhangeDriver = () => {
        alert("ошибка - так как водителя нельзя менять в пути")
    }
    public startRepair = (id:any) => {
        this._trucks[id].stringState = "repair"
        alert(" состояние грузовика изменено на “repair” ")
    }
}

export class InBaseState extends TruckState {
    public override name :str = "base";
    public startRun = (id:any) => {
        this._trucks[id].stringState = "run"
        alert(" состояние грузовика изменено на “run” ")
    }
    public сhangeDriver = () => {
        alert("водитель поменян успешно")
    }
    public startRepair = (id:any) => {
        this._trucks[id].stringState = "repair"
        alert(" состояние грузовика изменено на “repair” ")
    }
}

export class InRepairState extends TruckState {
    public override name :str = "repair";
    public startRun = (id:any) => {
        const listSting = ["repair","base"]
        this._trucks[id].stringState = listSting[getRandom(0,1)]
        alert(`состояние изменилось на ${this._trucks[id].stateReturn.stringState}`)
    }
    public сhangeDriver = () => {
        alert(" водителя нельзя менять пока грузовик находится на ремонте ")
    }
    public startRepair = () => {
        alert(" уже в ремонте")
    }
}
