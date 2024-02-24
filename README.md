# arithmetic-op

A simple utility library for performing basic mathematical operations in JavaScript.

## Installation

You can install this package using npm:


npm install arithmetic-op
## Usage
**Import the arithmetic-op library**
  const math = require('arithmetic-op');

**Example usage**
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); //  Output: 6
console.log(math.multiply(2, 6)); // Output: 12
console.log(math.divide(8, 2)); // Output: 4

## Available Functions
## Basic Arithmetic
add(a, b): Addition of two numbers.
subtract(a, b): Subtraction of two numbers.
multiply(a, b): Multiplication of two numbers.
divide(a, b): Division of two numbers.

## Exponential and Logarithmic
power(a, b): Exponential power of a to the bth degree.
squareRoot(a): Square root of a number (a >= 0).
log(a): Natural logarithm of a positive number (a > 0).

## Absolute and Rounding
absolute(a): Absolute value of a number.
round(a): Round to the nearest integer.
floor(a): Round down to the nearest integer.
ceil(a): Round up to the nearest integer.

## Random Number
random(): Generate a random number between 0 (inclusive) and 1 (exclusive).

## Additional Arithmetic Operations
remainder(a, b): Remainder of the division of a by b.
factorial(a): Factorial of a non-negative integer a.

## Additional Mathematical Functions
square(a): Square of a number.
cube(a): Cube of a number.
double(a): Double of a number.
triple(a): Triple of a number.
negate(a): Negation of a number.
reciprocal(a): Reciprocal of a number (a !== 0).
absoluteDifference(a, b): Absolute difference between two numbers.
isEven(a): Check if a number is even.
isOdd(a): Check if a number is odd.
max(a, b): Maximum of two numbers.
min(a, b): Minimum of two numbers.

## Trigonometric Functions
sin(a): Sine of an angle.
cos(a): Cosine of an angle.
tan(a): Tangent of an angle.

## Hyperbolic Functions
sinh(a): Hyperbolic sine of an angle.
cosh(a): Hyperbolic cosine of an angle.
tanh(a): Hyperbolic tangent of an angle.

## Logarithmic Functions
log2(a): Base 2 logarithm of a number.
log10(a): Base 10 logarithm of a number.

## Angular Conversion
degreesToRadians(degrees): Convert degrees to radians.
radiansToDegrees(radians): Convert radians to degrees.

## Statistical Functions
mean(...numbers): Mean (average) of numbers.
median(...numbers): Median of numbers.


## Contributing
If you would like to contribute to this project, feel free to open an issue or submit a pull request on the GitHub repository.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
```bash
