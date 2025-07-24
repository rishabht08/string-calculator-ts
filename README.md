# String Calculator

This project implements the String Calculator Kata using **TypeScript** with a clean, modular, and test-driven design.

## Features

- Supports addition of comma- and newline-separated numbers
- Supports custom delimiters (including multi-character delimiters)
- Throws an exception for negative numbers with all of them listed
- Ignores numbers greater than 1000
- Supports Variable length Delimiter
- Fully unit-tested with modular parser architecture

## Example Inputs

| Input                  | Output |
|------------------------|--------|
| `""`                   | `0`    |
| `"1"`                  | `1`    |
| `"1,2"`                | `3`    |
| `"1\n2,3"`             | `6`    |
| `"//;\n1;2"`           | `3`    |
| `"//$\n12$26"`         | `38`   |
| `"//$$\n10$$5$$5"`     | `20`   |
| `"//[***]\n1***2***3"` | `6`    |


# 📁 Project Structure — String Calculator (TypeScript)


---

## 📁 `src/`

Main source directory containing the implementation of the calculator and supporting logic.

### 📄 `add.ts`
- Entry point of the calculator logic.
- Exposes a single `add(input: string): number` function.
- Uses modular helper functions for parsing and validation.
- Delegates:
  - Delimiter extraction to `delimiterParser`
  - Number extraction to `numberParsers`
  - Error checks to `errorChecker`

---

### 📁 `parser/`

Responsible for parsing the input string and extracting usable data.

#### 📄 `delimiterParser.ts`
- Extracts custom delimiters from strings like `"//[***]\n1***2"` or `"//;\n1;2"`.
- Supports multi-character and bracketed delimiters.
- Falls back to default delimiters (`,` and `\n`) when no custom delimiter is provided.

#### 📄 `numberParsers.ts`
- Splits the number string using parsed delimiters.
- Converts string tokens to integers and filters out non-numeric inputs.

---

### 📁 `utils/`

Helper utilities and validators.

#### 📄 `errorChecker.ts`
- Validates numbers for negative values.
- Throws an error listing all negatives found.
- Can be extended to support other validations in the future (e.g., max values, float checks).

---

## 📁 `tests/`

All unit and integration tests live here.

#### 📄 `add.test.ts`
- Tests various cases for the `add` function:
  - Empty input
  - Single/multiple numbers
  - Newline-delimited numbers
  - Custom delimiters (single & multi-character)
  - Negative number exception handling

#### 📄 `parser.test.ts`
- Tests various cases for the `parser` helper functions:
  - Returns default delimiter for normal input
  - Parses custom delimiter
  - Parses only numbers less than equal to 1000

---

## 📄 `package.json`
- Declares project dependencies, scripts, and metadata.
- Key scripts:
  - `dev`: Run calculator from CLI
  - `test`: Run test suite via Jest

## 📄 `tsconfig.json`
- TypeScript compiler configuration:
  - ES target version
  - Module resolution rules
  - Source mapping for debugging

## 📄 `jest.config.js`
- Configuration for the Jest testing framework:
  - Test environment set to Node
  - Transformation settings for `.ts` files using `ts-jest`

---

## ✅ Summary

The project is structured with modularity and clarity in mind:
- Parser logic is separated from computation
- Utilities are isolated for testability
- Tests validate behavior in a TDD-friendly way





