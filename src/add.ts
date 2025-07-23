import { parseDelimiter } from './parser/delimiterParser';
import { parseNumbers } from './parser/parseNumbers';
import { checkForNegatives } from './utils/errorChecker';

export function add(input: string): number {
  if (input === '') return 0;

  const { delimiter, numbersString } = parseDelimiter(input);
  const numbers = parseNumbers(numbersString, delimiter);
  checkForNegatives(numbers);

  return numbers.reduce((sum, n) => sum + n, 0);
}
