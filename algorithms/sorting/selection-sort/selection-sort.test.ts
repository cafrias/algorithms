import { describe, test, expect } from "bun:test";
import { selectionSort } from "./selection-sort";

describe("selection sort", () => {
  test("sorts correctly", () => {
    const input = [7, 1, 8, 8, 0, 55, 99, 800];
    const result = selectionSort(input);
    expect(result).toEqual([0, 1, 7, 8, 8, 55, 99, 800]);
  });
});
