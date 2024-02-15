import { describe, test, expect } from "bun:test";
import { mergeSortedArrays } from "./merge-sorted-arrays";

describe("Merge sorted arrays", () => {
  test("merges correctly", () => {
    const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
    const nums2 = [1, 2, 2];
    const n = nums2.length;
    const m = nums1.length - n;

    mergeSortedArrays(nums1, m, nums2, n);

    expect(nums1).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
  });

  test("only one array", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    const n = nums2.length;
    const m = nums1.length - n;

    mergeSortedArrays(nums1, m, nums2, n);

    expect(nums1).toEqual([1]);
  });
});
