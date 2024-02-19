import t from "bun:test";
import { majorityElement } from "./majority-item";

t.describe("Majority Item", () => {
  t.test("finds it", () => {
    const input = [2, 2, 1, 1, 1, 2, 2];

    const result = majorityElement(input);

    t.expect(result).toBe(2);
  });
});
