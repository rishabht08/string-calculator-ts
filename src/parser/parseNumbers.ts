import { ParsedAttribute } from "../models/model";

export function parseNumbers(numbersString: string, delimiter: string): ParsedAttribute {
  const regex = new RegExp(delimiter);
  const numbers : number[] = [];
  const alphabets : string[] = [];
  numbersString
    .split(regex)
    .forEach((s => {
      let parsedNum = parseInt(s);
      if(isNaN(parsedNum)) {
        alphabets.push(s);
      }else if(parsedNum <= 1000) {
        numbers.push(parsedNum);
      }
    }))

    return {
      alphabets,
      numbers
    }
}
