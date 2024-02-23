import t from "bun:test";
import { jumpGameII } from "./jump-game-ii";

t.describe("45. Jump Game II", () => {
  t.test("Scenario 1", () => {
    const input = [2, 3, 1, 1, 4];
    const res = jumpGameII(input);
    t.expect(res).toBe(2);
  });

  t.test("Scenario 2", () => {
    const input = [2, 3, 0, 1, 4];
    const res = jumpGameII(input);
    t.expect(res).toBe(2);
  });
});
