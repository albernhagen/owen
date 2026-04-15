/**
 * Returns the factorial of a non-negative integer.
 * Throws for negative inputs.
 */
export function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError(`factorial requires a non-negative integer, got ${n}`);
  }
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

/**
 * Returns the nth Fibonacci number (0-indexed).
 * fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 1, ...
 */
export function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError(`fibonacci requires a non-negative integer, got ${n}`);
  }
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
