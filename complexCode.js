/* complexCode.js */

// This code calculates the sum of the nth term in the Fibonacci sequence.

function fibonacci(n) {
  var fib = [0, 1];
  
  if (n <= 2) {
    return fib[n - 1];
  }
  
  for (var i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  
  return fib[n - 1];
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

function primeChecker(n) {
  if (n <= 1 || (n > 2 && n % 2 === 0)) {
    return false;
  }
  
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  
  if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }
  
  var result = 1;
  
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    
    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  
  return result;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function primeFactors(n) {
  var factors = [];
  
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  
  if (n > 2) {
    factors.push(n);
  }
  
  return factors;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  return str === reverseString(str);
}

// Usage examples:

console.log("Fibonacci sequence: " + fibonacci(10));  // Output: 34
console.log("Factorial of 5: " + factorial(5));  // Output: 120
console.log("Is 17 prime? " + primeChecker(17));  // Output: true
console.log("2^3: " + pow(2, 3));  // Output: 8
console.log("GCD of 36 and 48: " + gcd(36, 48));  // Output: 12
console.log("LCM of 12 and 18: " + lcm(12, 18));  // Output: 36
console.log("Prime factors of 84: " + primeFactors(84));  // Output: [2, 2, 3, 7]
console.log("Is 'racecar' a palindrome? " + isPalindrome('racecar'));  // Output: true