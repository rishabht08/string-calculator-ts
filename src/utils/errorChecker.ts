export function checkForNegatives(numbers: number[]): void {
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }
}
