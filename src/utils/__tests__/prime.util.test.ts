import { describe, it, expect } from 'vitest';
import { isPrime, getPrimeIndicesAbove3 } from 'src/utils/prime.util';

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

describe('getPrimeIndicesAbove3', () => {
  it('returns empty array when max is below 5', () => {
    expect(getPrimeIndicesAbove3(4)).toEqual([]);
  });

  it('returns [5] when max is 5', () => {
    expect(getPrimeIndicesAbove3(5)).toEqual([5]);
  });

  it('returns [5, 7] when max is 7', () => {
    expect(getPrimeIndicesAbove3(7)).toEqual([5, 7]);
  });

  it('returns first 5 primes above 3', () => {
    expect(getPrimeIndicesAbove3(13)).toEqual([5, 7, 11, 13]);
  });
});
