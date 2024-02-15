import { test, describe, expect } from "bun:test";
import { binarySearch } from "./binary-search";

const haystack = [1, 3, 5, 7, 9];

describe("binary search", () => {
  test("binary search", () => {
    const result = binarySearch(haystack, 7);
    expect(result).toBe(3);
  });

  test("not found", () => {
    const result = binarySearch(haystack, 100);
    expect(result).toBeUndefined();
  });
});
