import { describe, expect, test } from "bun:test";
import { sum } from "./sum-array";

describe("Sum Array Recursively", () => {
  test("solves problem", () => {
    const result = sum([1, 5, 8, 10]);
    expect(result).toBe(24);
  });
});
