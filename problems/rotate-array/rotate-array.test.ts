import t from "bun:test";
import { rotateArray } from "./rotate-array";

t.describe("189. Rotate Array", () => {
  t.test("rotates correctly", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const k = 3;

    rotateArray(input, k);

    t.expect(input).toEqual([6, 7, 8, 1, 2, 3, 4, 5]);
  });

  t.test("k greater than len", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const k = 9;

    rotateArray(input, k);

    t.expect(input).toEqual([8, 1, 2, 3, 4, 5, 6, 7]);
  });
});
