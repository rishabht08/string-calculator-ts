import { add } from "../src/add";

describe('String Calculator', () => {
    it('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
    });

    it('returns number for single number', () => {
        expect(add('5')).toBe(5);
    });

    it('returns sum for two numbers', () => {
        expect(add('1,2')).toBe(3);
    });

    it('handles newlines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    it('supports custom delimiter', () => {
        expect(add('//;\n12;26')).toBe(38);
    });

    it('supports custom delimiter for multiple values', () => {
        expect(add('//;\n2;4;8;100')).toBe(114);
    });
});
