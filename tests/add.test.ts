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

    it('supports custom delimiter and escapes special ccharacters like $', () => {
        expect(add('//$\n12$26')).toBe(38);
    });
    it('supports custom delimiter and can take multiple characters in series as delimiter', () => {
        expect(add('//$%\n12$%26')).toBe(38);
    });

    it('supports custom delimiter for multiple values', () => {
        expect(add('//;\n2;4;8;100')).toBe(114);
    });
    it('throws error for negative numbers', () => {
        expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2,-4');
    });
    it('throws error for negative numbers with custom delimiter', () => {
        expect(() => add('//;\n1;-12;3;-50')).toThrow('negative numbers not allowed: -12,-50');
    });
});
