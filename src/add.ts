export function add(numbers: string): number {
    if (!numbers) return 0;

    const parts = numbers.split(",")
        .map((n) => parseInt(n, 10))
        .filter((n) => !isNaN(n));

    if (!parts.length) return 0;
    return parts.reduce((sum, n) => sum + n, 0);

}
