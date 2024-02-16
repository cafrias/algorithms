import { describe, expect, test } from "bun:test";
import { quicksort } from "./quicksort";

describe("Quicksort", () => {
  test("big array", () => {
    const input = [8, 11, 4, 5, 0, 0, 2, 3];

    const res = quicksort(input);

    expect(res).toEqual([0, 0, 2, 3, 4, 5, 8, 11]);
  });

  test("empty array", () => {
    const res = quicksort([]);
    expect(res).toEqual([]);
  });

  test("single element", () => {
    const res = quicksort([6]);
    expect(res).toEqual([6]);
  });
});
