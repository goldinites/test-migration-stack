import { describe, it, expect } from 'vitest';

describe('Example tests', () => {
  it('adds numbers', () => {
    expect(1 + 1).toBe(2);
  });

  it('works with arrays', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(2);
    expect(arr.length).toBe(3);
  });
});
