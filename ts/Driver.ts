import { str, num } from "./TYPE";
export class Driver {
    private _name: str;
    private _surname: str;
    private _age: num;
    private _experience: num;
    constructor(name:str, surname:str, age:num, experience:num){
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._experience = experience
    }
    get stateReturn (){
        return {name : this._name, surname : this._surname}
    }
}