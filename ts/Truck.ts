import { TruckState } from "./TruckState";
import { num, str } from "./TYPE"
import { Driver } from "./Driver";
export class Truck {
    private _id: num;
    private _name: str;
    private _driver: Driver;
    private _state!: TruckState;
    private _stringState: str = "base" ;
    constructor(id:num, name:str, driver:Driver ){
        this._id = id
        this._driver = driver
        this._name = name
    }
    set state (statisticObject:TruckState){
        this._state = statisticObject
    }
    set stringState (string:str){
        this._stringState = string
    }
    get sring (){
        return this._stringState
    }
    get stateReturn (){
        return {
            id : this._id,
            name : this._name,
            driver : this._driver.stateReturn,
            stringState : this._stringState,
        } 
    }


}