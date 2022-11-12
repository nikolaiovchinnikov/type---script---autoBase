import { str,num } from "./TYPE";

export const getString = ( stateList:any):str => {
    let stateString = ''
    for (let i = 1; i < stateList.length; i++) {
        let string = stateList[i][1]
        string += ""
        let amount = stateList[i][0]
        stateString += string
        for (let k = 0; k < (amount - string.length ) ; k++) {
            stateString += " "
            if( k === (amount - string.length) - 1){
                stateString += stateList[0]
            }
        }
    }
    return stateString += "\n"
}

export const  getRandom = (min:num,max:num) => { return Math.floor(Math.random() * (max - min + 1)) + min}


