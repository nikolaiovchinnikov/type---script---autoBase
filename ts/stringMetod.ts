import { str, } from "./TYPE";

export const getString = ( stateList:any):str => {
    let str = ''
    for (let i = 1; i < stateList.length; i++) {
        let string = stateList[i][1]
        string += ""
        let num = stateList[i][0]
        str += string
        for (let k = 0; k < (num - string.length ) ; k++) {
            str += " "
            if( k === num - string.length - 1){
                str += stateList[0]
            }
        }
    }
    str += "\n"
    return str
}



