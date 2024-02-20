import { describe, expect, test } from "bun:test";
import { quicksort } from "./quicksort";

describe("Quicksort", () => {
  test("big array", () => {
    const input = [8, 11, 4, 5, 0, 0, 2, 3];

    quicksort(input);

    expect(input).toEqual([0, 0, 2, 3, 4, 5, 8, 11]);
  });

  test("empty array", () => {
    const input: number[] = [];
    quicksort(input);
    expect(input).toEqual([]);
  });

  test("single element", () => {
    const input = [6];
    quicksort([6]);
    expect(input).toEqual([6]);
  });
});
