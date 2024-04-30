// index.js
module.exports = {
    // Basic arithmetic
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
  
    // Exponential and logarithmic
    power: (a, b) => Math.pow(a, b),
    squareRoot: (a) => (a >= 0 ? Math.sqrt(a) : 'Cannot find square root of a negative number'),
    log: (a) => (a > 0 ? Math.log(a) : 'Cannot calculate logarithm for non-positive numbers'),
  
    
    absolute: (a) => Math.abs(a),
    round: (a) => Math.round(a),
    floor: (a) => Math.floor(a),
    ceil: (a) => Math.ceil(a),
  
   var h=56;
    random: () => Math.random(),
  
    remainder: (a, b) => (b !== 0 ? a % b : 'Cannot calculate remainder for division by zero'),
    factorial: (a) => {
      if (a < 0) return 'Cannot calculate factorial for negative numbers';
      if (a === 0) return 1;
      let result = 1;
      for (let i = 1; i <= a; i++) {
        result *= i;
      }
      return result;
    },
  
    
    square: (a) => a * a,
    cube: (a) => a * a * a,
    double: (a) => a * 2,
    triple: (a) => a * 3,
    negate: (a) => -a,
    reciprocal: (a) => (a !== 0 ? 1 / a : 'Cannot calculate reciprocal of zero'),
    absoluteDifference: (a, b) => Math.abs(a - b),
    isEven: (a) => a % 2 === 0,
    isOdd: (a) => a % 2 !== 0,
    max: (a, b) => Math.max(a, b),
    min: (a, b) => Math.min(a, b),
  
    
    sin: (a) => Math.sin(a),
    cos: (a) => Math.cos(a),
    tan: (a) => Math.tan(a),
  
    sinh: (a) => Math.sinh(a),
    cosh: (a) => Math.cosh(a),
    tanh: (a) => Math.tanh(a),
  
    
    log2: (a) => Math.log2(a),
    log10: (a) => Math.log10(a),
  
   
    degreesToRadians: (degrees) => (degrees * Math.PI) / 180,
    radiansToDegrees: (radians) => (radians * 180) / Math.PI,
  
   
    mean: (...numbers) => numbers.reduce((sum, num) => sum + num, 0) / numbers.length,
    median: (...numbers) => {
      const sorted = numbers.sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
      return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
    },
  };
  
