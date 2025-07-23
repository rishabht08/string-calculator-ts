import { add } from './add';

const input = process.argv[2] || "";
const result = add(input);
console.log(`Result: ${result}`);