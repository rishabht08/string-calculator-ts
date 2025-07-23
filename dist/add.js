"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (!numbers)
        return 0;
    const parts = numbers.split(",")
        .map((n) => parseInt(n, 10))
        .filter((n) => !isNaN(n));
    if (!parts.length)
        return 0;
    const result = parts.reduce((sum, n) => sum + n, 0);
    console.log({ result });
    return result;
}
