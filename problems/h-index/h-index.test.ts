import t from "bun:test";
import { hIndex } from "./h-index";

t.describe("274. H-Index", () => {
  t.test("Scenario 1", () => {
    const citations = [3, 0, 6, 1, 5];
    const res = hIndex(citations);
    t.expect(res).toBe(3);
  });

  t.test("Scenario 2", () => {
    const citations = [1, 3, 1];
    const res = hIndex(citations);
    t.expect(res).toBe(1);
  });

  t.test("Scenario 3", () => {
    const citations = [1, 2, 3, 4];
    const res = hIndex(citations);
    t.expect(res).toBe(2);
  });
});
