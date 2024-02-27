import t from "bun:test";

export function gasStation(gas: number[], cost: number[]): number {
  let sum = 0;
  let fuel = 0;
  let sp = 0;
  for (let i = 0; i < gas.length; i++) {
    const d = gas[i] - cost[i];
    sum += d;
    if (fuel + d < 0) {
      fuel = 0;
      sp = i + 1;
    } else {
      fuel += d;
    }
  }

  return sum < 0 ? -1 : sp;
}

t.describe("134. Gas Station", () => {
  t.test("scenario 1", () => {
    const gas = [1, 2, 3, 4, 5];
    const cost = [3, 4, 5, 1, 2];

    const result = gasStation(gas, cost);

    t.expect(result).toBe(3);
  });
  t.test("scenario 2", () => {
    const gas = [2, 3, 4];
    const cost = [3, 4, 3];

    const result = gasStation(gas, cost);

    t.expect(result).toBe(-1);
  });
  t.test("scenario 3", () => {
    const gas = [5, 1, 2, 3, 4];
    const cost = [4, 4, 1, 5, 1];

    const result = gasStation(gas, cost);

    t.expect(result).toBe(4);
  });
  t.test("scenario 4", () => {
    const gas = [3, 1, 1];
    const cost = [1, 2, 2];

    const result = gasStation(gas, cost);

    t.expect(result).toBe(0);
  });
});
