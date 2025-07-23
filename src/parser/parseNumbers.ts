export function parseNumbers(numbersString: string, delimiter: string): number[] {
  const regex = new RegExp(delimiter);
  return numbersString
    .split(regex)
    .map(s => parseInt(s, 10))
    .filter(n => (!isNaN(n) && n<=1000));
}
