export function parseDelimiter(input: string): { delimiter: string, numbersString: string } {
  if (input.startsWith('//')) {
    const match = input.match(/^\/\/(.+)\n([\s\S]*)$/);
    if (match && match.length > 2) {
      return { delimiter: match[1], numbersString: match[2] };
    }
  }
  return { delimiter: ',|\n', numbersString: input };
}
