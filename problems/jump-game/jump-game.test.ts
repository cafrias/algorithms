import t from "bun:test";
import { jumpGame } from "./jump-game";

t.describe("55. Jump Game", () => {
  t.test("scenario 1", () => {
    const input = [3, 2, 1, 0, 4];
    const res = jumpGame(input);
    t.expect(res).toBe(false);
  });

  t.test("scenario 2", () => {
    const input = [2, 3, 1, 1, 4];
    const res = jumpGame(input);
    t.expect(res).toBe(true);
  });

  t.test("scenario 3", () => {
    const input = [2, 0];
    const res = jumpGame(input);
    t.expect(res).toBe(true);
  });
});
