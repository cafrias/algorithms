import t from "bun:test";
import { removeDuplicatesSortedII } from "./remove-duplicates-sorted-ii";

t.describe("Remove Duplicates Sorted II", () => {
  t.test("no duplicates", () => {
    const input = [1, 1, 2];

    const k = removeDuplicatesSortedII(input);

    t.expect(k).toBe(3);
  });

  t.test("removes correctly", () => {
    const input = [0, 0, 1, 1, 1, 1, 2, 3, 3];

    const k = removeDuplicatesSortedII(input);

    t.expect(k).toBe(7);
    t.expect(input.slice(0, 7)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });
});
