import { add } from './add';

let input = '';

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    console.log('Input received: ', input.trim());
    const result = add(input.trim());
    console.log(`Result: ${result}`);
});