# @smartsale/math

All things math for Smartsale.

## BigInt Math Utilities

This module provides a collection of utility functions for performing mathematical operations on `bigint` values. These functions are designed to handle common mathematical tasks efficiently using JavaScript's `bigint` type.

### Functions

- **`abs(x: bigint): bigint`**  
  Returns the absolute value of the given `bigint`.

- **`sign(x: bigint): bigint`**  
  Determines the sign of the given `bigint`, returning `-1n` for negative, `0n` for zero, and `1n` for positive values.

- **`pow(base: bigint, exponent: bigint): bigint`**  
  Raises a `bigint` base to the power of a `bigint` exponent.

- **`min(value: bigint, ...values: bigint[]): bigint`**  
  Returns the smallest `bigint` from a list of provided values.

- **`max(value: bigint, ...values: bigint[]): bigint`**  
  Returns the largest `bigint` from a list of provided values.

### Usage

To use these utilities, import the `bigMath` object from the module:



