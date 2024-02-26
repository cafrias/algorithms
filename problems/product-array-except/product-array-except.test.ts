import t from "bun:test";
import { productArrayExcept } from "./product-array-except";

t.describe("238. Product of array except self", () => {
  t.test("scenario 1", () => {
    const input = [1, 2, 3, 4];
    const res = productArrayExcept(input);
    t.expect(res).toEqual([24, 12, 8, 6]);
  });

  t.test("scenario 2", () => {
    const input = [-1, 1, 0, -3, 3];
    const res = productArrayExcept(input);
    t.expect(res).toEqual([-0, 0, 9, -0, 0]);
  });
});
