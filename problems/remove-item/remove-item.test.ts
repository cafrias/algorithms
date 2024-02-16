import { describe, expect, test } from "bun:test";
import { removeItem } from "./remove-item";

describe("Remove item from array", () => {
  test("removes correctly", () => {
    const input = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    const result = removeItem(input, val);

    expect(result).toBe(5);
    for (let i = 0; i <= result; i++) {
      expect(input[i]).not.toBe(val);
    }
  });
});
