import { describe, expect, test } from "bun:test";
import { landPlot } from "./land-plot";

describe("Land Plot", () => {
  test("solves correctly", () => {
    const w = 1680;
    const h = 640;
    const result = landPlot(w, h);
    expect(result).toBe(80);
  });
});
