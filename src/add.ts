
import { parseDelimiter } from './parser/delimiterParser';
import { parseNumbers } from './parser/parseNumbers';
import { checkForAlphabets, checkForNegatives } from './utils/errorChecker';


export function add(input: string): number {
  if (input === '') return 0;

  const { delimiter, numbersString } = parseDelimiter(input);
  const { numbers, alphabets } = parseNumbers(numbersString, delimiter);
  checkForNegatives(numbers);
  checkForAlphabets(alphabets);


  return numbers.reduce((sum, n) => sum + n, 0);
}


