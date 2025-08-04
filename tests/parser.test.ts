import { parseDelimiter } from "../src/parser/delimiterParser";
import { parseNumbers } from "../src/parser/parseNumbers";

describe('String Calculator Parser Utility methods', () => {
    it('returns default delimiter for normal input', () => {
        const result = parseDelimiter('1,2\n3');
        expect(result).toEqual({
            delimiter: ',|\n',
            numbersString: '1,2\n3'
        });
    });

    it('parses custom delimiter', () => {
        const result = parseDelimiter('//;\n5;8');
        expect(result).toEqual({
            delimiter: ';',
            numbersString: '5;8'
        });
    });

    it('parses comma-delimited numbers', () => {
        expect(parseNumbers('1,2,3', ',')).toEqual({
            numbers : [1, 2, 3],
            alphabets: []
        });
    });

    it('parses newline-delimited numbers', () => {
        expect(parseNumbers('4\n5\n6', '\n')).toEqual({
            numbers : [4,5,6],
            alphabets: []
        });
    });

    it('parses custom-delimited numbers', () => {
        expect(parseNumbers('4;5;6', ';')).toEqual({
            numbers : [4,5,6],
            alphabets: []
        });
    });

    it('parses only numbers less than equal to 1000', () => {
        expect(parseNumbers('4,5,1001', ',')).toEqual({
            numbers : [4,5],
            alphabets: []
        });;
    });

    it('parses only numbers less than equal to 1000 in custom delimiter', () => {
        expect(parseNumbers('4%5%1001', '%')).toEqual({
            numbers : [4,5],
            alphabets: []
        });;
    });

    it('should return empty if only one number greater than 1000', () => {
        expect(parseNumbers('1001', ',')).toEqual({
            numbers : [],
            alphabets: []
        });;
    });
});
