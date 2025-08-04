export function checkForNegatives(numbers: number[]): void {
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(',')}`);
  }
}

export function checkForAlphabets(alphabets: string[]): void {
  // Database i need to put the whole input
  if (alphabets.length > 0) {
    throw new Error(`Alphabets not allowed: ${alphabets.join(',')}`);
  }
}
