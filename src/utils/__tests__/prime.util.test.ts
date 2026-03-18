import { describe, it, expect } from 'vitest';
import { isPrime } from 'src/utils/prime.util';

describe('isPrime', () => {
  it('returns false for numbers less than 2', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it('returns true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('returns false for even numbers > 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
  });

  it('returns true for known primes', () => {
    [3, 5, 7, 11, 13, 17, 19, 23].forEach((n) => {
      expect(isPrime(n)).toBe(true);
    });
  });

  it('returns false for composite numbers', () => {
    [9, 15, 21, 25].forEach((n) => {
      expect(isPrime(n)).toBe(false);
    });
  });
});
