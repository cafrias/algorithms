import { describe, test, expect } from "bun:test";

export function removeDuplicatesSorted(arr: number[]): number {
  let k = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  return k;
}

describe("Remove duplicates from sorted array", () => {
  test("sorted array no duplicate", () => {
    const input = [1, 2, 3, 4, 5];

    const result = removeDuplicatesSorted(input);

    const expected = input.slice(0, result);
    expect(expected).toEqual([1, 2, 3, 4, 5]);
  });

  test("all same elements", () => {
    const input = [1, 1, 1, 1];

    const result = removeDuplicatesSorted(input);
    const expected = input.slice(0, result);

    expect(expected).toEqual([1]);
  });

  test("removes correctly", () => {
    const input = [1, 1, 2, 2, 3, 3, 4, 5];

    const result = removeDuplicatesSorted(input);

    const expected = input.slice(0, result);
    expect(expected).toEqual([1, 2, 3, 4, 5]);
  });
});
