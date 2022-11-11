import { Truck } from "./Truck";
import { num, str } from "./TYPE";
import { getString } from "./stringMetod";

export class TruckState {
    private _trucks:Truck[]
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
