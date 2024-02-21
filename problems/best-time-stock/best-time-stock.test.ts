import t from "bun:test";
import { bestTimeStock } from "./best-time-stock";

t.describe("121. Best Time To Buy and Sell Stock", () => {
  t.test("finds correctly", () => {
    const input = [7, 1, 5, 3, 6, 4];
    const output = 5;

    const res = bestTimeStock(input);

    t.expect(res).toBe(output);
  });
});
