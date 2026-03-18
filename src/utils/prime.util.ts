export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

export function getPrimeIndicesAbove3(max: number): number[] {
  const result: number[] = [];
  for (let i = 5; i <= max; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}
