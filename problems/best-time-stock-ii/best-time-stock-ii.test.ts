import t from "bun:test";
import { bestTimeStockII } from "./best-time-stock-ii";

t.describe("122. Best Time to Buy Stock II", () => {
  t.test("Scenario 1", () => {
    const input = [7, 1, 5, 3, 6, 4];
    const res = bestTimeStockII(input);
    t.expect(res).toBe(7);
  });

  t.test("Scenario 2", () => {
    const input = [1, 2, 3, 4, 5];
    const res = bestTimeStockII(input);
    t.expect(res).toBe(4);
  });

  t.test("Scenario 3", () => {
    const input = [7, 6, 4, 3, 1];
    const res = bestTimeStockII(input);
    t.expect(res).toBe(0);
  });
});
