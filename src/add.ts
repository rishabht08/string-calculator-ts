export function add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter: RegExp | string = /,|\n/;

    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.)\n(.*)$/s);
        if (match && match.length > 1) {
            delimiter = match[1];
            numbers = match[2];
        }
    }

    const parts = numbers.split(new RegExp(delimiter as string))
        .map((n) => parseInt(n, 10))
        .filter((n) => !isNaN(n));

    const negatives = parts.filter((n) => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    if (!parts.length) return 0;
    return parts.reduce((sum, n) => sum + n, 0);

}
