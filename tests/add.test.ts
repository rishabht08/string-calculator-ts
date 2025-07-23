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
});
