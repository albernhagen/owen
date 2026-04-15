import { describe, expect, it } from "bun:test";
import { factorial, fibonacci } from "./math";

describe("factorial", () => {
  it("GivenZero_WhenFactorialCalled_ThenReturnsOne", () => {
    expect(factorial(0)).toBe(1);
  });

  it("GivenPositiveInteger_WhenFactorialCalled_ThenReturnsCorrectValue", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  it("GivenNegativeInteger_WhenFactorialCalled_ThenThrowsRangeError", () => {
    expect(() => factorial(-1)).toThrow(RangeError);
  });

  it("GivenFloat_WhenFactorialCalled_ThenThrowsRangeError", () => {
    expect(() => factorial(1.5)).toThrow(RangeError);
  });
});

describe("fibonacci", () => {
  it("GivenZero_WhenFibonacciCalled_ThenReturnsZero", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("GivenOne_WhenFibonacciCalled_ThenReturnsOne", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("GivenPositiveIndex_WhenFibonacciCalled_ThenReturnsCorrectSequence", () => {
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    sequence.forEach((expected, n) => {
      expect(fibonacci(n)).toBe(expected);
    });
  });

  it("GivenNegativeInteger_WhenFibonacciCalled_ThenThrowsRangeError", () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
  });
});
